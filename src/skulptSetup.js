/*
    Copyright (C) 2021-2023 Nick McIntyre, Maxim Schoemaker. All rights reserved.
    Developed by Strive: https://www.strivemath.com/
    Source: https://github.com/StriveMath/p5-python-web
*/


p5._report = function (message, func, color) {
    message = message.replace(/\[.*?\] /, "");
    message += `\nreference: https://learnpython.strivemath.com/p5-python-web/${func}`
    throw new Error(message);
}

p5.prototype.linmap = p5.prototype.map;




async function runCode(code, log, error) {

    function builtinRead(x) {
        if (
            Sk.builtinFiles === undefined ||
            Sk.builtinFiles["files"][x] === undefined
        )
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    function uncaught(pythonException) { // logs error during runtime (p5.js draw)
        const lineno = pythonException.traceback[0]?.lineno;
        const msg = pythonException.args.v[0]?.v;
        const errorMessage = msg + "\n on line " + lineno + "\n";

        // console.log("skulpt uncaught:")
        error(errorMessage);

        // throw new Error(errorMessage); // used to stop execution
    }

    Sk.pre = "output";
    Sk.configure({
        output: log,
        read: builtinRead,
        uncaughtException: uncaught,
    });
    Sk.canvas = "sketch-holder";
    const myPromise = Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody(
            "<stdin>",
            false,
            code.trim() + "\nrun()",
            true
        );
    });
    myPromise.then(
        function (mod) {
            // console.log(" ");
        },
        function (err) { // logs error during startup (p5.js init)
            // console.log("skulpt reject:");
            uncaught(err);
        }
    );
}

async function loadCode(filename = "sketch.py") {
    const sketchFile = await fetch(filename);
    const code = await sketchFile.text()
    return code;
}

async function runAutomatic() {
    const code = await loadCode();
    runCode(code, console.log, console.log);
}

const MANUAL = document.currentScript.getAttribute("manual") !== null;
if (!MANUAL) runAutomatic();

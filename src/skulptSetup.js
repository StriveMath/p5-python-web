/*
    Copyright (C) 2021-2023 Nick McIntyre, Maxim Schoemaker. All rights reserved.
    Developed by Strive: https://www.strivemath.com/
    Source: https://github.com/StriveMath/p5-python-web
*/

function outf(text) {
    // console.log("skulpt outf:");
    console.log(text);
}

function builtinRead(x) {
    if (
        Sk.builtinFiles === undefined ||
        Sk.builtinFiles["files"][x] === undefined
    )
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function uncaught(pythonException) { // logs error during runtime (p5.js draw)
    const lineno = pythonException.traceback[0].lineno;
    const msg = pythonException.args.v[0].v;
    const errorMessage = msg + "\n on line " + lineno + "\n";

    // console.log("skulpt uncaught:")
    console.log(errorMessage);

    // throw new Error(errorMessage); // used to stop execution
}

async function runCode(filename = "sketch.py") {
    const sketchFile = await fetch(filename);
    const code = await sketchFile.text()
    Sk.pre = "output";
    Sk.configure({
        output: outf,
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
            console.log(err.toString());
        }
    );
}

p5._report = function (message, func, color) {
    message = message.replace(/\[.*?\] /, "");
    message += `\nreference: https://learnpython.strivemath.com/p5-python-web/${func}`
    throw new Error(message);
}

p5.prototype.linmap = p5.prototype.map;

runCode();

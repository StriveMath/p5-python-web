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




async function runCode(code, log, error, lineNumberOffset = 0, success = () => {}) {

    const externalLibraries = {
        "./numpy/__init__.js": "https://cdn.jsdelivr.net/gh/StriveMath/p5-python-web@master/numpy/__init__.js"
    };
  
    function builtinRead(file) {
        // console.log("Attempting file: " + Sk.ffi.remapToJs(file));

        if (externalLibraries[file] !== undefined) {
            return Sk.misceval.promiseToSuspension(
                fetch(externalLibraries[file]).then(
                    function (resp) { 
                        return resp.text();
                    }
                )
            );
        }

        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][file] === undefined)
            throw "File not found: '" + file + "'";

        return Sk.builtinFiles["files"][file];
    }

    function uncaught(pythonException) { // logs error during runtime (p5.js draw)
        let lineno = pythonException.traceback[0]?.lineno;
        if (lineno !== undefined) {
            lineno = parseInt(lineno);
            lineno = isNaN(lineno) ? undefined : lineno + lineNumberOffset;
        }

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
        __future__: Sk.python3,
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
            success();
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

// attach all p5 instance properties to the p5 prototype so they are accessible in Python
// necessary for p5play bindings
p5.prototype.registerMethod("init", function () {
    for (let key in this) {
        const val = this[key];
        if (p5.prototype[key] === undefined) {
            p5.prototype[key] = val;
            // console.log(key, "attached to p5.prototype");
        }// else
        // console.log(key, "already exists on p5.prototype");
    }
    this.loadImage = p5.prototype.loadImage;
});
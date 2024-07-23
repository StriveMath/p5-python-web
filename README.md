# p5-python-web

p5-python-web lets you run p5.js sketches written in Python on the web! It's is a Python execution context with [p5.js](https://github.com/processing/p5.js) bindings. It uses [Skulpt](https://github.com/skulpt/skulpt) to execute p5.js sketches written in Python. Its dynamic bindings allow for any p5.js library to be used as well.

The build is hosted on [jsDeiliver](https://www.jsdelivr.com/) and is accessible via https://cdn.jsdelivr.net/gh/StriveMath/p5-python-web

# Usage

Load [p5-python-web.js](https://github.com/StriveMath/p5-python-web/blob/main/dist/p5-python-web.js) in a script tag below p5.js (and any libraries) inside index.html ([example](https://github.com/StriveMath/p5-python-web/tree/main/examples/simple/))

```html
<head>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
   <!-- load any p5.js libraries -->
   <script src="https://cdn.jsdelivr.net/gh/StriveMath/p5-python-web/dist/p5-python-web.js"></script>
</head>
```
p5-python-web.js will look for a file called [sketch.py](https://github.com/StriveMath/p5-python-web/tree/main/examples/simple/sketch.py) inside the same directory as the index.html file.

# Teaching

p5-python-web is being developed in tandem with [p5.teach.js](https://github.com/StriveMath/p5.teach.js) by [Strive](https://www.strivemath.com/) for the purposes of programming education. Have a look at the p5.teach.js [examples](https://github.com/StriveMath/p5-python-web/tree/main/examples/p5.teach.js).

# Contributors

- [Nick McIntyre](https://github.com/nickmcintyre)
- [Tamir Shklaz](https://github.com/TamirShklaz)
- [Maxim Schoemaker](https://github.com/MaximSchoemaker)

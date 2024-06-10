//mi solución
function callback1(fn, ...rest) {
    console.log(rest)
    return fn;
}

function log1(...args) {
    console.log(args);
}

callback1(log1, 5, 6, 7, 8);

//////////////// solución del video
function callback(fn, ...rest) {
    fn(...rest);
}

function log(...args) {
    console.log(args);
}

callback(log, 1, 2, 3, 4);
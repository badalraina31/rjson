
const hasOwn = (object, prop) => Object.prototype.hasOwnProperty.call(object, prop);

const isArguments = object => object != null && hasOwn(object, 'callee')

const isObject = (func) => typeof func === 'object';

const isFunction = func => typeof func === 'function';

const keysOf = object => Object.keys(object);

const lengthOf = object => Object.keys(object).length;

const isInfinityOrNaN = object => Number.isNaN(object) || object === Infinity || object === -Infinity;

const checkError = {
    stack: (msgError) => new RegExp("Maximum call stack size exceeded", 'g').test(msgError),
}

const handleError = func => function() {
    try {
        return func.apply(this, arguments)
    } catch (err) {
        const isMaxStack = checkError.stack(err.message);
        if(isMaxStack){
            throw new Error('Converting circular structure to json');
        }
        throw err;
    }
}

const convertMapToObject = map => {
    Array.from(map).reduce((acc, [key, val]) => {
        // reassign to not create new object
        acc[key] = val;
        return acc
    }, {});
}

export {
    hasOwn,
    isArguments,
    isObject,
    isFunction,
    keysOf,
    lengthOf,
    isInfinityOrNaN,
    checkError,
    handleError,
    convertMapToObject,
}
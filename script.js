let array1 = [100, 'hello', 4, true, null, '555', 300, 'number', 1000];
let string = 'Hello world!';


function reverse(source) {
    let newArray = [];
    let reverseString = '';
    let errorResult = '';

    if (typeof source === 'string') {

        for (let i = source.length - 1; i >= 0; i--) {
            reverseString += source[i];
        }
    } else if (Array.isArray(source)) {
    
        for (let i = source.length - 1; i >= 0; i--) {
            newArray[newArray.length] = source[i];
        }
    } else {
        errorResult = 'it is neither a string nor an array';
    }

    return errorResult || reverseString || newArray;
}

let array2 = [100, 'hello', 4, true, null, '555', 300, 'number', 1000];

function verifyNumbers(source) {
    let newArray2 = [];
    let numberResalt;

    for (let i = 0; i < source.length; i++) {
        numberResalt = Number(source[i]);
        
        if (source[i] === numberResalt) {
            newArray2[newArray2.length] = source[i];
        }
    }
    return newArray2;
}


let array3 = [143, 7, 247, 15, -78, 3, 41, 123];

function getMin(source) {
    let number = source[0];

    for (let i = 1; i < source.length; i++) {
        
        if (source[i] < number) {
            number = source[i];
        }
    }
    
    return number;
}


let array4 = [143, 7, 247, 15, -78, 3, 41, 123];

function getAverage(source) {
    let average = 0;
    let sum = 0;

    for (let i = 0; i < source.length; i++) {
        sum += source[i];
    }
    average = sum/source.length;

    return average;
}


let array5 = ['hello', 'world', 'Madagascar', 'array'];

function getMaxString(source) {
    let maxLength = source[0];

    for (let i = 1; i < source.length; i++) {

        if(source[i].length > maxLength.length)
            maxLength = source[i];
    }

    return maxLength;
}


const util = {
    reversItem: reverse,
    onlyNumbers: verifyNumbers,
    minNumber: getMin,
    averageNumber: getAverage,
    maxString: getMaxString,
}

let result1 = util.reversItem(array1);
let result2 = util.onlyNumbers(array2);
let result3 = util.minNumber(array3);
let result4 = util.averageNumber(array4);
let result5 = util.maxString(array5);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
// Block1;

let array1 = [100, 'hello', 4, true, null, '555', 300, 'number', 1000];
let string = 'Hello world!';


function reverse(source) {
    let newArray1 = [];
    
    for (let i = source.length - 1; i >= 0; i--) {
        newArray1[newArray1.length] = source[i];
    }

    return newArray1;
}

let result1 = reverse(string);
console.log(result1);



// Block2;

let array2 = [100, 'hello', 4, true, null, '555', 300, 'number', 1000];
// let array2 = [];

function verifyNumbers(source) {
    let newArray2 = [];
    
    for (let i = 0; i < source.length; i++) {
        numberResalt = Number(source[i]);
        
        if (source[i] === numberResalt) {
            newArray2[newArray2.length] = source[i];
        }
    }
    return newArray2;
}

let result2 = verifyNumbers(array2);
console.log(result2);

// Block3;

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

let result3 = getMin(array3);
console.log(result3);


// Block4;

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

let result4 = getAverage(array4);
console.log(result4);


// Block5;

let array5 = ['hello', 'world', 'Madagascar', 'array'];

function getMaxString(source) {
    let maxLength = source[0];

    for (let i = 1; i < source.length; i++) {

        if(source[i].length > maxLength.length)
            maxLength = source[i];
    }

    return maxLength;
}

let result5 = getMaxString(array5);
console.log(result5);
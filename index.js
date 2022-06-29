// function to return parseInt str  
function originalparseInt(str) {
    return parseInt(str);
}

// function to return parseInt str 

function customparseInt(str) {
    str = str.replace(/\s/g , '');
    if( /^[a-z]/i.test(str)){
        return NaN;
    }else{
        let result = ''
       for(var i = 0; i < str.length; i++){
        if(/[0-9]/.test(str[i])){
            result += str[i];
            continue;
        }else{
            break;
        }
       }
        return Number(result);
    }
}

console.log(originalparseInt("10"));
console.log(originalparseInt(" 121"));
console.log(originalparseInt("a1312"));
console.log(originalparseInt("13a12"));
console.log(originalparseInt("131a2"));



console.log(customparseInt("10"));
console.log(customparseInt(" 121"));
console.log(customparseInt("a1312"));
console.log(customparseInt("13a12"));
console.log(customparseInt("131a2"));

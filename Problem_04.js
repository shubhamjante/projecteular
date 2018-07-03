var palindromeArray = [];

function isPalindrome(num){
    reverseString = String(num);
    if(reverseString.split('').reverse().join('') === reverseString){
        return true;
    }else{
        return false;
    }
}

for(let i = 100; i <= 999; i++){
    for(let j = 100; j <= 999; j++){
        if(isPalindrome(i * j)){
            palindromeArray.push(i * j);
        }
    }
}

console.log(palindromeArray.reduce((x, y) => x > y ? x : y))

//console.log(isPalindrome(9009))
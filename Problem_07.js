/*
function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
*/

function findNthPrimeNumber(N){
    var num = 1;
    var count = 0;
    while(count < N){
        num = num +1;
        for(var i = 2; i <= num; i++){
            if(num % i === 0){
                break;
            }
        }
        if(i == num){
            count = count + 1;
        }
    }
    return num;
}

console.log(findNthPrimeNumber(10001));
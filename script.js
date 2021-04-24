function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 



function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            totalEvens += arr[i];
        }
        else{
            totalOdds += arr[i];
        }
    if(totalEvens>totalOdds){
        return "evens are larger";
    }
    else{
        return "odds are larger";
    }
    }
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"



function betterThanAverage(arr) {
    var avg = 0;
    var sum = 0;
    var count = 0
    for(var i =0; i<arr.length;i++){
        sum += arr[i];
    }
    avg = sum/arr.length;
    for(var i =0; i<arr.length;i++){
    if (arr[i]>avg){
        count++;
    }
}
return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i = 0; fibArr.length < n; i++) {
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
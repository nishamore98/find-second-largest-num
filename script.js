let arr = [1,5,9,4,8,3];

function secondLargestNum( ){
    let largestNum;
    let secondLargestNum;
    if(arr[0] > arr[1]){
        largestNum = arr[0];
        secondLargestNum = arr[1]
    }else{
        largestNum = arr[1];
        secondLargestNum = arr[0];
    }
    for(var i=2; i<arr.length; i++){
        if(arr[i]>largestNum){
            secondLargestNum = largestNum;
            largestNum = arr[i];
        }else if (arr[i]>secondLargestNum){
            secondLargestNum = arr[i];
        }
    }
    document.getElementById('demo').innerHTML = arr + '<br/>Second Largest Number from given Array is ' + secondLargestNum;
}
// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

function is_array(inp){
    res = Array.isArray(inp);
    return res;
}
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));




// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(inp){
    clone = [];
    for (i = 0; i < inp.length; i++) {
        clone[i] = inp[i];
    }
    return clone;
}
//  console.log(array_Clone([1, 2, 4, 0]));
//  console.log(array_Clone([1, 2, [4, 0]]));





// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(arr, n=0){
    if (n>0){
        return arr.slice(0,n);
    }
    else if (n==0){
        return arr[n];
    }
    else{
        return [];
    }
}
//  console.log(first([7, 9, 0, -2]));
//  console.log(first([],3));
//  console.log(first([7, 9, 0, -2],3));
//  console.log(first([7, 9, 0, -2],6));
//  console.log(first([7, 9, 0, -2],-3));




// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function joinArr(inp){
    res = inp.join('+');
    return res; 
}
myColor = ["Red", "Green", "White", "Black"];
// console.log(joinArr(myColor));



//  Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function occurence(arr, x){
    let i=0;
    let count = 0;
    for(i=0; i<arr.length; i++){
        if (arr[i] == x){
            count +=1;
        }
    }
    return count;
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(occurence(arr1, 'a'))


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
console.log("Part 3 - sort()");

let num3A = [5, 10, 2, 42];
num3A.sort(function (a, b){
    return a-b;
});


let num3B = [-2, 0, -10, -44, 5, 3, 0, 3];
num3B.sort(function(b,a){
    return a-b;
});



let num3C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
num3C.sort(function (a,b) {
    return b-a;
})
//Sort each array in decending order.

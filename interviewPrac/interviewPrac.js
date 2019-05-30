function checkIsPalindrome(arr) {
    function reverse(s) {
        return s.split("").reverse().join("");
    }
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] == reverse(arr[i]));
    }
    return result;
}
console.log(checkIsPalindrome("racecar"))
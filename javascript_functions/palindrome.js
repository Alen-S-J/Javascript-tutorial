function isPalindrome(num) {
    let copy = num;
    let rev = 0;
    let r;

    while (num !== 0) {
        r = num % 10;
        rev = rev * 10 + r;
        num = Math.floor(num / 10);
    }

    if (copy === rev) {
        console.log(copy, "is a palindrome number");
        return true;
    } else {
        console.log(copy, "is not a palindrome number");
        return false;
    }
}

let n=isPalindrome(1200);

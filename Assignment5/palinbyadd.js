function shortestPalindrome(s) {


    function isPalindrome(s, first, last) {
        while (first < last) {
            if (s[first] !== s[last]) {
                return false;
            }
            first++;
            last--;
        }
        return true;
    }

    let n = s.length;
    let maxpalin = 0;
    

    for (let i = n - 1; i >= 0; i--) {
        if (isPalindrome(s, 0, i)) {
            maxpalin = i;
            break;
        }
    }
    let result = "";

    for (let i = n - 1; i > maxpalin; i--) {
        result += s[i];
    }

    for (let a = 0; a < n; a++) {
        result += s[a];
    }

    console.log(result); 
}


shortestPalindrome("abcbba");  








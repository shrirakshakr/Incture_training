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
    let result = "";

    for (let i = n - 1; i >= 0; i--) {
        if (isPalindrome(s, 0, i)) {
            maxpalin = i;
            break;
        }
    }

    for (let i = n - 1; i > maxpalin; i--) {
        result += s[i];
    }

    for (let a = 0; a < n; a++) {
        result += s[a];
    }

    console.log(result);  // <-- this prints the final answer
}

shortestPalindrome("aacbcaaa");  // should print: aacabccaaa



// let right=s.length-1;
    // let char=new Set();
    // while(right>=0)
    // {
    //     char.add(s[right]);
    //     right--;
    // }
    // console.log(char);
    // let a=[];
    // for( let i of char)
    // {
    //     a.push(i);
    // }
    // console.log(a);


// for(let i=1; i<=1000; i++)
// {
    // let temp=i;
    // let rev=0;
//     while(temp>0)
//     {
//         let rem=temp%10;
//         rev=rev*10+rem;
//         temp=Math.floor(temp/10);
//     }
//     if(i==rev)
//     {
//         console.log(i);
//     }
// }

//{
// let b=s.rev();
    // console.log(b);
    // for(let i=0; i<s.length; i++)
    // {
    //     let temp=i;
    //     let rev=0;
    // }
//}
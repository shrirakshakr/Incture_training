function shortestPalindrome(s)
{
    let right=s.length-1;
    let char=new Set();
    while(right>=0)
    {
        char.add(s[right]);
        right--;
    }
    console.log(char);
    let a=[];
    for( let i of char)
    {
        a.push(i);
    }
    console.log(a);
    for(let j=0;j<s.length;j++)
    {
        let last=s.length;
        while(s[j]==s[last])
        {
            last--;
            j++;
        }
        
    }
    
}
shortestPalindrome("abc");
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
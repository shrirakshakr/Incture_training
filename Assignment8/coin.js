function minCoinsToMakeAmount(coins, amount)
{
    coins=[5,10];
    for(let i=0;i<coins.length-1;i++)
    {
        for(let j=0;j<coins.length-i-1;j++)
        {
            if(coins[j]>coins[j+1])
            {
                let temp=coins[j];
                coins[j]=coins[j+1];
                coins[j+1]=temp;
            }
        }
    }
    let sum=0;
    let count=0;
    for(let i=coins.length-1;i>=0;i--)
    {
        while(sum+coins[i]<=amount)
        {
            sum+=coins[i];
            count++;
        }
    }
    if(sum===amount)
    {
        console.log(count);
    }
    else{
        console.log("-1");
    }
}
minCoinsToMakeAmount(34);
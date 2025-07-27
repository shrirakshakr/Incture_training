function minCoinsToMakeAmount(coins, targetAmount) {
    // Sort the coins in ascending order using bubble sort
    for (let i = 0; i < coins.length - 1; i++) {
        for (let j = 0; j < coins.length - i - 1; j++) {
            if (coins[j] > coins[j + 1]) {
                let temp = coins[j];
                coins[j] = coins[j + 1];
                coins[j + 1] = temp;
            }
        }
    }

    // Create an array to store the minimum number of coins needed for every amount from 0 to targetAmount
    let minCoins = new Array(targetAmount + 1).fill(Infinity);

    // To make amount 0, we need 0 coins
    minCoins[0] = 0;

    // Loop through all amounts from 1 to targetAmount
    for (let currentAmount = 1; currentAmount <= targetAmount; currentAmount++) {
        // Try using each coin to make the current amount
        for (let c = 0; c < coins.length; c++) {
            let coinValue = coins[c];

            // If the coin is smaller than or equal to currentAmount,
            // check if we can use it to get fewer coins
            if (coinValue <= currentAmount) {
                let remainingAmount = currentAmount - coinValue;
                let coinsNeeded = minCoins[remainingAmount] + 1;

                if (coinsNeeded < minCoins[currentAmount]) {
                    minCoins[currentAmount] = coinsNeeded;
                }
            }
        }
    }
    if (minCoins[targetAmount] === Infinity) {
        console.log("-1");
    } else {
        console.log(minCoins[targetAmount]);
    }
}


minCoinsToMakeAmount([1, 2, 5], 6);     



/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

//input = obj
//return = string with the winning property and value

// 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    //create a varibale to hold the maximum value
    let highestVotes = 0
    let winningFood = ''
    for(const food in obj){
        if(obj[food] > highestVotes){
            highestVotes = obj[food]
            // in the first iteration highestVotes 3 (the value of the first char in the obj is greater than highest vote)
            winningFood += food
            // in the first iteration winningFood is pizza
        }
        // 
    }
    console.log(highestVotes)
    return `The winner is ${winningFood} with ${highestVotes} votes`
    // highestVote is 10, winningFood is tacos
    

}



console.log(findTheWinner(gameNightFood));
// The computer has four slots, and each slot will contain a ball that is red (R), yellow(Y), green (G), blue (B). for example , the
// computer might have RGGB(Slot #1 is red, slots #2 and #3 are green, Slot #4 is blue). you, the user, are trying to guess the solution.
// You might, for example , guess YRGB. when you guess the correct color for the correct slot, you get a 'hit'. if you guess a color that
// exists but is in the wrong slot, you get a 'pseudo hit'. Note that a slot that is a hit can never count as a pseudo hit
// for example, if the actual solution is RGBY and you guess GGRR, you have one hit and one pseudo-hit.
// write a method that, given a guess and a solution returns the number of hits and pseudo-hits

function countHitsAndPseudoHits(guess, solution){
    let hits = 0
    let pseudoHits = 0

    let guessCount = new Array(4).fill(false)
    let solutionCount = new Array(4).fill(false)
    for(let i = 0; i < 4; i++){
        if(guess[i] === solution[i]){
            hits++
            guessCount[i] = true
            solutionCount[i] = true
        }
    }

    for(let i = 0; i < 4; i++){
        if(!guessCount[i]){
            for(let j = 0; j < 4; j++){
                if(!solutionCount[j] && guess[i] === solution[i]){
                    pseudoHits++
                    solutionCount[j] = true
                    break;
                }
            }
        }
    }
    return {hits, pseudoHits}
}
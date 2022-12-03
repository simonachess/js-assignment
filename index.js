const choices = ['rock', 'paper', 'scissors']

const game = () => {

    let round = 1
    while (round < 6) {
        const computerPlay = choices[Math.floor(Math.random() * choices.length)]
        let playersChoice = prompt(`Enter your choice: "rock", "paper" or "scissors".\n\nROUND ${round}\n`)
        if (playersChoice === null) {
            let confirmExit = prompt('Are your sure you wanna exit the game?\n\nType Y or click OK to confirm\n')
            if (confirmExit === null) {
                continue
            } else {
                let lowerCasedConfirm = confirmExit.toLowerCase()
                if(lowerCasedConfirm === 'y' || lowerCasedConfirm === '') {
                    break
                } else {
                    continue
                }
            }
        }

        const lowerCasedPlayersChoise = playersChoice?.toLowerCase().trim()
        if(lowerCasedPlayersChoise === 'scissors' || lowerCasedPlayersChoise === 'paper' || lowerCasedPlayersChoise === 'rock') {
            playRound(lowerCasedPlayersChoise, computerPlay, round)
            round++
        } else if (lowerCasedPlayersChoise === '') {
            alert('You need to choose one of three options: "rock", "paper" or "scissors"')
        } else {
            alert('No such option. Check your spelling')
        }
    }
}

let playerScore = 0
let computerScore = 0
let draws = 0

const playRound = (playerSelection, computerSelection, round) => {
    console.log({playerSelection})
    console.log({computerSelection})
    console.log({playerScore}, {computerScore})
    console.log({round})
    switch (playerSelection + computerSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            alert(`You WIN! ${playerSelection} beats ${computerSelection}`)
            playerScore++
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            alert(`You LOSE! ${computerSelection} beats ${playerSelection}`)
            computerScore++
            break
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            alert(`It is DRAW ${playerSelection} = ${computerSelection}`)
            draws++
            break
    }

    if(round === 5) {
        if (playerScore > computerScore) {
            alert(`YOU are the winner.\n\nResult:\nyou ${playerScore},\ncomputer ${computerScore},\ndraws ${draws}`)
        } else if (playerScore < computerScore) {
            alert(`COMPUTER is the winner.\n\nResult:\nyou ${playerScore},\ncomputer ${computerScore},\ndraws ${draws}`)
        } else {
            alert(`It is DRAW! Result:\n\nyou ${playerScore},\ncomputer ${computerScore},\ndraws ${draws}`)
        }
    }
}

game()
// uppercase 0, lowercase 1, numbers 2, symbols 3
let choices = {
    0: "ABCDEFGHIJKLMNOQPRSTUYWVZX",
    1: "abcdefghijklmnoqprstuvwyzx",
    2: "0123456789",
    3:"!@#$^&*?",
}

function generatePassword(strengthBars, passwordLength) {

    let activeStrengthBars = strengthBars.filter(bar => bar.state == true);
    let result = '';

    for(let i = 1; i <= passwordLength; i++) {
        const randomChoice = activeStrengthBars[Math.floor(Math.random() * activeStrengthBars.length)].id;
        let choice = choices[randomChoice];
        let randomCharacter = choice.charAt(Math.floor(Math.random() * choice.length));
        result = result.concat(randomCharacter);
    }

    return result;
}

export default generatePassword;


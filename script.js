
let roll = ()=>{
    let input = document.getElementById('input')
    let number = document.getElementById('number')
    let diceimg = document.getElementById('diceimg')
    let randomnumber = [];
    let images = [];
    for(let i = 0;i<input.value;i++){
        let random = Math.floor(Math.random()*6) + 1;
        randomnumber.push(random);
        images.push(`<img src = '${random}.png' style = "width: 100px;height:100px">`)
    }
    number.textContent = `Numbers: ${randomnumber}`
    diceimg.innerHTML = images

}















//guess the number
//increase and decrease the number
//get two number and display with addition
//check property 
//guess the number with only js 
//temperatur conversion
//Roll the dice 
//digital clock
//stopwatch
//calculator



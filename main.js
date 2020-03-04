'use stript'

//add eventlistener
document.getElementById('ftocBt').addEventListener('click', ftcclick);
document.getElementById('ctofBt').addEventListener('click', ctfclick);

//run function : ftoc
function ftcclick(){
    //define the number
    let F = Number(document.getElementById('tif').value);
    
    //creat the formula
    let answerf = 'Temperature in Celsius:' + (F- 32) * 5/9 

   //output
    document.getElementById('result').innerHTML = answerf;
}

//run function : ctof
function ctfclick(){
    //define the number
    let C = Number(document.getElementById('tic').value);

    //create the formula
    let answerC = 'Temperature in Farhrenheit' + [32 + (C * 9/5)]

    //output
    document.getElementById('result').innerHTML = answerC;
}
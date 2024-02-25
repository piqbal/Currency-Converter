#! /usr/bin/env node

import inquirer from 'inquirer';
let loop=true;
while(loop){
let answer:{InputCurrency:string, OutputCurrency:string, Amount:number}= await inquirer.prompt([{
   
    type: "list",
    name: "InputCurrency",
    choices:["USD","PKR","INR"],
    message: "Select your input currency",
},
{   
    type: "list",
    name: "OutputCurrency",
    choices:["USD","PKR","INR"],
    message: "Select your ourput currency",

},
{
    type: "number",
    name: "Amount",
    message: "Please enter your amount.",
}
])
let {InputCurrency, OutputCurrency, Amount}= answer

if(InputCurrency == "USD"){
    if(OutputCurrency == "PKR"){
        console.log(`The ${Amount} USD is equal to ${Amount *280} Pakistani Rupees.`)
    }else if (OutputCurrency == "INR"){
        console.log(`The ${Amount} USD is equal to ${Amount * 90} Indian Rupees. `)
    }
}

if(InputCurrency == "PKR"){
    if(OutputCurrency == "USD"){
        console.log(`The ${Amount} PKR is equal to ${Amount / 280} Us Dollar.`)
    }else if (OutputCurrency == "INR"){
        console.log(`The ${Amount} PKR is equal to ${Amount / 3} Indian Rupees. `)
    }
}

if(InputCurrency == "INR"){
    if(OutputCurrency == "USD"){
        console.log(`The ${Amount} INR is equal to ${Amount / 90} Us Dollar.`)
    }else if (OutputCurrency == "PKR"){
        console.log(`The ${Amount} INR is equal to ${Amount * 3} Pakistani Rupees. `)
    }}

let calculateAgain=await inquirer.prompt({
    type: "confirm",
    name: "CalculateMore",
    message: "Do you want to more conversation?",
    default: false

})
if(calculateAgain.CalculateMore == false){
    loop= false;

}

}


const prompt = require ('prompt-sync')({sigint: true});

let pincode = Number(prompt('Enter your pincode: '));

if (pincode === 4429)
{
    console.log('Your pincode is correct!!');
}   else {
    console.log('Your pincode is incorrect :(');
}
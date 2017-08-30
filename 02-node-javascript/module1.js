function myFunction(){
    console.log("Function in Module 1");
}

var myString = 'String!';

module.exports.myFunction = myFunction;
module.exports.myString = myString;
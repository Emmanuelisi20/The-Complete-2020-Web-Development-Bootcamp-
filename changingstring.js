//asking the user his name so we can manipulate the first name 
var name = prompt("what us your name");

// Capitalize the first name 

//isolating the first name char.
var firstChar = name.slice(0.1);

// turn the first char to a upper case
var upperCaseFirstChar = firstChar.toUpperCase();

// isolate the rest of the name 
// name.length is the total 8 Emmanuel is the name
var restOfName = name.slice(1, name.length);

// also changing the rest of the charaters to the lowercase so we wouldnt have a bug when we are typing our names
restOfName = restOfName.toLowerCase();

// Concactenate the first char with the rest if the char's 
// joinning the chars together to get a full word but with the first character capitalised
var capitalisedName = upperCaseFirstChar + restOfName;

// we use the joinning of both funtions
alert("Hello,"+capitalisedName);


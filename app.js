
var person = new Object();

person["firstname"] = "Dror";
person["lastname"] = "Avidov";

var firstNameProp = 'firstname';
console.log(person);
console.log(person[firstNameProp]);

console.log(person.lastname);

person.address = new Object();
person.address.street = "9 Yael Rom st.";
person.address.city = "Petah Tikva";

console.log(person["address"]["city"]);
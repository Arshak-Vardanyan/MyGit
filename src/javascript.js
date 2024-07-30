const person = {
    firstName: "John",
    lastName: "Smith",
    age: 33
}

function test({firstName,lastName,age}){

    console.log(firstName + " " + lastName + " is " + age + " years old")
}

test(person)

 // const firstName = obj.firstName;
    // const lastName = obj.lastName;
    // const age = obj.age
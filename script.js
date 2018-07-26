"use strict";

/* 
INSTRUCTIONS: 

JAVASCRIPT ADDRESS BOOK LAB PART 1
Task: Build an object-oriented console address book application.

The AddressBook class:
Properties
• contacts: an array of Contact instances. This is initialized with a few contacts in the contructor.

Methods
• add(info): Makes a new Contact instance and adds it to this AddressBook's contacts.
• deleteAt(index): Removes the contact at the given array index in this AddressBook's contacts.
• print(): Logs all of this AddressBook's contacts to the console.

The Contact class:
The class has a name, email, phone, and relation property. All four can be set by passing them into the constructor.

Build Specifications:
1. Create the AddressBook and Contact classes. Create one instance of AddressBook.
2. Write a loop to prompt the user whether they would like to add, delete, print, or quit.
    a. When the user chooses to add, prompt them for the four contact properties and call the AddressBook's *add* method to add the new contact.
    b. When the user chooses to delete, prompt them for the index of the contact and call the AddresBook's *deleteAt* method to remove the contact.
    c. When the user chooses to print, call the AddressBook's •print• method.
    d. When the user chooses to quit, end the program. 

Bonus:
Add a deleteByName method to AddressBook and use it in the loop. •deleteByName(name)• removes the contact with the given name from this AddressBook's contacts.
*/


// AddressBook class
class AddressBook {
    constructor(contacts) {
        this.contacts = [
            {
                name: "John",
                email: "john21@gmail.com",
                phone: "313-555-1212",
                relation: "classmate"
            }, 
            {
                name: "Reuel",
                email: "reuelbeats@gmail.com",
                phone: "313-262-6222",
                relation: "brother"
            }, 
            {
                name: "Rihanna",
                email: "riri@yahoo.com",
                phone: "213-994-2284",
                relation: "friend"
            }, 
            {
                name: "Steph Curry",
                email: "warrior@nba.com",
                phone: "269-445-6600",
                relation: "splash brother"
            }
        ];
    }
    add(info) {
        this.contacts.push(info)
    }
    deleteAt(index) {

    }
    print() {
        //console.log(this.contacts);
        this.contacts.forEach(function(x,index){console.log(index, x)}) // I prefer this because the prompt gets in the way of the contact list the other way
    }
}

const book = new AddressBook();

//Contact class

class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

book.print();

let choice;

setTimeout(function(){

    while (choice !== null) {

        //show pre-existing contacts
        choice = prompt("ADD • DELETE • UPDATE • PRINT • QUIT").toLowerCase();
         
        switch(choice) {
            case "add":
                book.add(new Contact(prompt("name:"), prompt("email:"), prompt("phone:"), prompt("relation:")));
                console.clear();
                console.log(`Added: \"${book.contacts[book.contacts.length-1].name}\"`); 
                book.print();
                break;
    
            case "delete":
                let deleteIndex = prompt("Delete Index Number:");
                let deletedName = book.contacts[deleteIndex].name;
                book.contacts.splice(deleteIndex, 1);
                console.clear();
                console.log(`Deleted: \"${deletedName}\"`);
                book.print();
                break;
            case "print":
                console.clear();
                console.log(`${book.contacts.length} Contacts`);
                book.print();
                break; 
                
    
            case "update":
                let updateIndex = prompt("update index:");
                let updateProperty = prompt("edit: NAME, EMAIL, PHONE, or RELATION").toLowerCase();
                book.contacts[updateIndex][updateProperty] = prompt(`new ${updateProperty.toUpperCase()}:`)
                console.clear();
                console.log(`Updated: \"${book.contacts[updateIndex].name}\"`);
                book.print();
                break;
            case "quit":
                console.clear();
                book.print();
                choice = null; // loop runs WHILE choice is not equal to null.
    
                break;
            default:
                console.log("Command Not Found");
                console.clear();
                book.print();
        }
    
       
        
    }


}, 1000);
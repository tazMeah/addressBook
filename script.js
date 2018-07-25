"use strict";

class AddressBook {
    constructor () {
        this.contacts = [
        
        ];
    }
    add(info) {
        this.contacts.push(info)
    }

    deleteAt(index) {

    }

    print() {
        console.log(this);
    }
}
    

class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation
    }
}



const book = new AddressBook();
 book.add(new Contact("Adam","adam@grandcircus.co", "3135551212", "instructor"));
//console.log(book);


// loop to prompt user to add, delete, print
// or quit

function start(){
    let choice = prompt("ADD, INDEX delete, NAME delete, UPDATE, PRINT, or QUIT");

    //if add
    if (choice == "ADD") {
        book.add(new Contact(prompt("Enter name"), prompt("Enter email"), prompt("Enter phone"), prompt("Enter relation")));
        console.log(book);
    }

    //if delete by index
    if (choice == "INDEX") {
        let deleteIndex = prompt("Enter index number to delete.");
        book.contacts.splice(deleteIndex, 1);
        console.log(book);


    }
 

    //if delete by name
    if (choice == "NAME") {
        let deleteContact = prompt("Enter name of contact to delete.");
        //loop through contacts, searching for name match
        for (let i = 0; i < book.contacts.length; i++) {
            if (book.contacts[i].name == deleteContact) {
                book.contacts.splice(i, 1);
            }
        }
        console.log(book);
    }
    
    //if update
    if (choice == "UPDATE") {
        let updateIndex = prompt("Enter index to update");
        let updateProperty = prompt("Editing: NAME, EMAIL, PHONE, or RELATION?").toLowerCase();
        let editedValue = prompt(`Enter the new value for ${updateProperty.toUpperCase()}`);
        // book.contacts[updateIndex].updateProperty = editedValue;
        let foo = book.contacts[updateIndex];
        foo["updateProperty"] = editedValue; 

    }

    //if print
    if (choice == "PRINT") {
        console.log(book);

    }

    //if quit
}
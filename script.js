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
    prompt("add, delete (index), delete (name) update, print, or quit");

    //if add

    //if delete by index

    //if delete by name

    //if update

    //if print

    //if quit
}
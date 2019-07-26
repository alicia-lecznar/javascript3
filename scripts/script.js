"use strict";

class AddressBook{
    constructor(){
        this.contacts = []
    
}
add(name, email, phone, relation){
    let newContact= new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
}
 

delete(name){
    const index = this.contacts.findIndex(contact =>{
        return contact.name === name;
    });
if (index >= 0){
    this.contacts.splice(index,1);


    }
}
print(){
    for(let i = 0; i<this.contacts.length; i++){
    console.log(this.contacts[i])
        }
    }
}

//for(const contact of this.contacts){
//  console.log("for of:", contact);


// this.contacts.forEach(contact =>{
//     console.log('forEach', contact);
// })

class Contact{
    constructor(name, email, phone, relation){
        this.name = name;
        this.email= email;
        this.phone= phone;
        this.relation= relation;
    }
    
}

const addressBook = new AddressBook();
addressBook.add("Pat","@gmail", "3995873495723", "mom");
// addressBook.add (newContact("Pat","@gmail", "3995873495723", "mom"));
addressBook.add("mark", "@gmail", "983473948", "father");
addressBook.print();
addressBook.delete ("pat");
addressBook.print();



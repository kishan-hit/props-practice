import React from "react";
import Card from "./Card";
import contacts from "../contacts";

const createCard = (contact) => {
    return (
        <Card 
            key={contact.id}
            name={contact.name}
            img={contact.imgUrl}
            phone ={contact.phone}
            email={contact.email}  
        />
    );
}

const App = () => {
    return(
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
            {/* <Card 
                name={contacts[0].name}
                img={contacts[0].imgUrl}
                phone={contacts[0].phone}
                email={contacts[0].email}
            />
            <Card 
                name={contacts[1].name}
                img={contacts[1].imgUrl}
                phone={contacts[1].phone}
                email={contacts[1].email}
            />
            <Card 
                name={contacts[2].name}
                img={contacts[2].imgUrl}
                phone={contacts[2].phone}
                email={contacts[2].email}
            /> */}
        </div>
    );
}

export default App;
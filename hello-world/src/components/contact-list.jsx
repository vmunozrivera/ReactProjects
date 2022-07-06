import React from 'react'
import { Contact } from '../models/contact.class'
import ContactComponent from './contact'

function ContactListComponent() {

    const testContact = new Contact('Mario', 'Martinez', 'mario@test.com', false)

  return (
    <div>
        <div>My Contacts</div>
        <ContactComponent contact={testContact}></ContactComponent>
    </div>
  )
}

export default ContactListComponent
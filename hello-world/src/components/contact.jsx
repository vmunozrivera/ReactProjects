import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

function ContactComponent({contact}) {
  return (
    <div>
        <h1>Contacts</h1>
        <br></br>
        <h3>1. {contact.first_name} ({contact.is_online ? 'Online':'Offline'})</h3>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent

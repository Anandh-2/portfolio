import React from 'react'

export default function CantactInfo(contact) {
  return (
    <div id='contact-info'>
    <div>
      <p className='contact-type'>{contact.contact.type}</p>
      <p className='contact-type'>:</p>
      </div>
      <p>{contact.contact.value}</p><p>{contact.contact.icon}</p>
    </div>
  )
}

import React from 'react'

const PersonsList = ({ person }) => {
  const { id, name, age, skill } = person;
  console.log(person)
  return (
    <h3>
      Hi, I'm {name}. I'm {age} and love {skill}
    </h3>
    // "yo"
  )
}

export default PersonsList

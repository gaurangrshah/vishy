import React from 'react'

const PersonsList = ({ person }) => {
  const { name, age, skill } = person;
  console.log(person)
  return (
    <h3>
      Hi, I'm {name}. I'm {age} and love {skill}
    </h3>
  )
}

export default PersonsList

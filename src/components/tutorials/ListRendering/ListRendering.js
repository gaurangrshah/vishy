import React from 'react'
import Twrap from "../../utils/Twrap/Twrap";
import { persons } from './data/persons';
import { names } from './data/names';
import NameList from "./NameList";
import PersonsList from "./PersonsList";

const ListRendering = () => {


  //NOTE: best practice is to pull the rendering logic into its own component as we've done here for <NamesList/> and <PersonsList/> and then we can pass the props need to render into the components in these examples we pass the props "person" and "name" respectively to our rendering components.

  // names and persons are arrays that we're importing in above to .map => render

  const personList = persons.map(person =>
    <PersonsList key={person.id} person={person} />
    // <h3 key={person.id}>
    //   Hi, I'm {person.name}. I'm {person.age} and love {person.skill}
    // </h3>
  )

  // const namesList = names.map((name) => <h2 key={name}>{name}</h2>);
  // refactored the rendering to <NameList/> passing in the props for name
  // const namesList = names.map((name) => <NameList key={name} name={name} />);

  const namesList = names.map((name, index) => <NameList key={index} name={name} />);
  //refactored to use the index arg available from the map method instead of the name for the key prop -- NOTE: using the index as a key may cause UI issues when replacing and creating new DOM elements on when the DOM updates.

  //You can safely use index as a key when:
  // 1. The items in the list do not have a uniqueid. - when uniqueid is availble use the id as key.
  // 2. The list is static and will not change -- the items in the list will not be removed or added
  // 3. The list will never be reordered or filtered.

  // React uses index as key when no key is provided.


  return (
    <Twrap
      title="render-lists"
      source="https://www.youtube.com/watch?v=5s8Ol9uw-yM"
    >
      {namesList}
      {personList}
    </Twrap>
  )
}

export default ListRendering


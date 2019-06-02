import React from 'react';
import { LinkForm } from '../../../PlugForm/useFormMod';
import { StdModal } from '../../Modal/StdModal';


export const mapLinks = (arr) => {
  console.log('😬', Array.isArray(arr))
  // console.log(typeof arr)
  console.log('links:', arr)

  const linked = arr.map((item, index) => {
    // console.log('🚧', { item })
    return (
      <li
        key={index}
      >
        <a
          href={item.href}
          className="app-link"
          target="blank"
          rel="noopener noreferrer"
        >
          {item.linkName}
        </a>
      </li>
    )
  })
  return linked

}


const LinksComponent = (props) => {
  // links is an array that gets passed in from whatever componenet is rendering <LinksComponent/>
  const { links } = props;

  return (
    <>
      {
        // if links exists...
        (links) ? (
          mapLinks(links)
          // then call maplinks passing in the array of links from props.links
          // maplinks returns an array of mapped li's with <a></a> in them.
        ) : (
            <mark>Sorry No Links Available. Check local server.</mark>
            // message if no links get pulled in.
          )
      }
      <StdModal
        // isOpen={() => !this.state.modal}
        toggleButtonLabel="Add New Links"
        children={
          <LinkForm
            nextId={(links) ? links.length + 1 : null}
            hideButton={() => true}
            buttonType="submit"
            handeSubmit={props.handleSubmit}
          />
        }
        {...props}
      />
    </>
  )
}

export default LinksComponent

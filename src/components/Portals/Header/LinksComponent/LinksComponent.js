import React from 'react';
import { LinkForm } from '../../../PlugForm/useFormMod';
import { StdModal } from '../../Modal/StdModal';


export const mapArr = (arr) => (

  (Array.isArray(arr)) ? (
    arr.map((item, index) => {
      // console.log(item)
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
  ) : () => {
    console.log('not an array')
    console.log('isArray?:', Array.isArray(arr))
    console.log('typeof?:', typeof arr)
    console.log('{links:}', arr)
  }
)


const LinksComponent = (props) => {
  // links is an array that gets passed in from whatever componenet is rendering <LinksComponent/>
  const { links, handleSubmit } = props;
  /* FIXME handleSubmit props not being passed into component from GetResLinks?? */

  return (
    <>
      {
        // if links exists...
        (links) ? (
          mapArr(links)
          // then call maplinks passing in the array of links from props.links
          // maplinks returns an array of mapped li's with <a></a> in them.
        ) : (
            <mark>
              Sorry No Links Available. Check local server.
              {/* // message if no links get pulled in. */}

              {console.log('{📛 error:LinksComp}:', { links }, 'remove this message, after adding manual fetching.')}
            </mark>
          )
      }
      <StdModal
        // isOpen={}
        toggleButtonLabel="Add New Link"
        children={
          <LinkForm
            nextId={(links) ? links.length + 1 : null}
            hideButton={() => true}
            buttonType="submit"
            handeSubmit={handleSubmit}
          // FIXME handleSubmit not being passed into <LinksComponent/>
          // updateData={props.updateData}
          />
        }
        {...props}
      />
    </>
  )
}

export default LinksComponent

import React, { useState, useEffect } from 'react';
import DashPortalWrapper from '../components/Portals/Modal/DashPortalWrapper';
import DoList from './DoList/DoList'

const InitialGlobalState = {
  user: { type: 'guest', isLoggedIn: false, username: '', password: null },
  status: { error: '', success: '', other: [] },
  data: { currContent: [], dataTypes: ['notes'], notes: { notebooks: [{ pages: [{ content: {} }] }] } },
  mode: { default: true, edit: false, admin: false, },
  component: { editable: true, editing: false, value: '' }
}


export const DashPage = (props) => {

  const [state, setState] = useState(InitialGlobalState);

  console.log('🎆 currState: ', { state, setState });

  const GlobalContext = React.createContext(state)
  const UserContext = React.createContext(state.user)
  const ComponentContext = React.createContext(state.component)

  console.log('🛫 initialpayload:', { state, GlobalContext, UserContext, ComponentContext })

  return (

    <DashPortalWrapper isOpen={true || props.isOpen}>

      <DoList />

    </DashPortalWrapper>

  )
}


import React from 'react';
import StrapModal from './StrapModal';
import { NameForm } from '../../PlugForm/useForm';


export const StdModal = () => {
  return (
    <StrapModal buttonLabel="Open Me" modalTitle="Modal Modal Yo" isOpen={true}>

      <NameForm />

    </StrapModal>
  )
}

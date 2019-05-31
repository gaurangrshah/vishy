import React from 'react';
import StrapModal from './StrapModal';
import { NameForm } from '../../PlugForm/useForm';


export const StdModal = () => {
  return (
    <StrapModal buttonLabel="Open Me" modalTitle="Test Form Add Inputs" isOpen={true}>

      <NameForm />

    </StrapModal>
  )
}

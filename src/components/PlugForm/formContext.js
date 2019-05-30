import { createContext, useState } from 'react';
import formState from '../../data/form-vals.json';


export const FormContextWrapper = ({ children }) => {

  const stateObj = formState.formVals
  const { state, setState } = useState(stateObj)

  return { state, setState };

}



// const FormContext = createContext()
// const FormProvider = FormContext.Provider
// const FormConsumer = FormContext.Consumer
// const FCW = { FormContext, FormProvider, FormConsumer }
// return FCW

export default FormContextWrapper;


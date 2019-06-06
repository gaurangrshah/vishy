import React from 'react';
import { Alert } from 'reactstrap'

const alerty = (text, type = "info") => {
  return <p className={type}>{text}</p>
}

const success = text => alerty(text, 'success');
const warning = text => alerty(text, 'warning');
const error = text => alerty(text, 'error');
const info = text => alerty(text, 'info');
const neutral = text => alerty(text, 'neutral');


export default {
  success,
  warning,
  error,
  info,
  neutral,
}

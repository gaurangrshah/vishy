import React from 'react';

export const displayMessage = (success, error) => (
  (success) ? <p>{success}</p> : <p>{error}</p>
)

/*
  displayMessage(success,error)
*/


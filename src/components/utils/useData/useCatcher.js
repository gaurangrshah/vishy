import { useState } from 'react';

export const useResp = () => {
  const [resp, setResp] = useState({
    data: [],
    success: '',
    error: ''
  })

  const updateResp = (newResp) => setResp(newResp);

  return { resp, updateResp }
}



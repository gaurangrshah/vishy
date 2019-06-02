import { useState } from 'react';

// 🚧 needs to be integrated for error state handling.

export const useResp = () => {
  const [resp, setResp] = useState({
    data: [],
    success: '',
    error: ''
  })

  const updateResp = (newResp) => setResp(newResp);

  return { resp, updateResp }
}



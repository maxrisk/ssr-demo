import React, { useState } from 'react';
import './index.css';

const Text = (props) => {
  const { children } = props
  const [num, setNum] = useState(0)

  return (
    <div className='my-text' onClick={() => setNum((prevNum) => prevNum+1)}>{children} {num}</div>
  )
}

export default Text;

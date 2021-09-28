import React from 'react';
import { useRecord } from '../../hooks/useRecord';


export default function App() {
  const { currentColor, record, undoColor } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undoColor}>undo</button>
      <button>redo</button>
      <input type="color" value={currentColor} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: currentColor, width: '10rem', height: '10rem' }}></div>
    </>
  )
 }

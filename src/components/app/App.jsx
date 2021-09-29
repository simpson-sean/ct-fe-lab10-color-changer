import React from 'react';
import { useRecord } from '../../hooks/useRecord';


export default function App() {
  const { currentColor, record, undoColor, redoColor } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undoColor} aria-label='undo-button'>undo</button>
      <button onClick={redoColor} aria-label='redo-button'>redo</button>
      <input type="color" aria-label='col-selector'value={currentColor} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: currentColor, width: '10rem', height: '10rem' }} data-testid='render-div'></div>
    </>
  )
}

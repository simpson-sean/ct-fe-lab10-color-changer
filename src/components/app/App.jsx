import React, { useState } from 'react';


const useRecord = (init) => {
     const [ currentColor, setCurrentColor ] = useState(init);
    //  const { record, useRecord } = useState()
    //  const { undo, setUndo } = useState();
    //  const { redo, setRedo } = useState();

    return {currentColor};
    
};

function App() {
  const { currentColor } = useRecord('#FF0000');

  return (
    <>
      <button>undo</button>
      <button>redo</button>
      <input type="color" value={currentColor} />
      <div style={{ backgroundColor: currentColor, width: '10rem', height: '10rem' }}></div>
    </>
  )
 }


export default App;
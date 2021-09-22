import React, { useState } from 'react';


const useRecord = (init) => {
     const [ current, setCurrent ] = useState(init);
    //  const { record, useRecord } = useState()
    //  const { undo, setUndo } = useState();
    //  const { redo, setRedo } = useState();

    return {current}
    
};

function App() {
  const { current } = useRecord('#FF0000');

  return (
    <>
      <button>undo</button>
      <button>redo</button>
      <input type="color" value={current} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
 }


export default App;
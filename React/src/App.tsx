import React, { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import Button from 'devextreme-react/button';

function App(): JSX.Element {
  var [count, setCount] = useState<number>(0);
  const clickHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);
  return (
    <div className="main">
      <Button text={`Click count: ${count}`} onClick={clickHandler} />
    </div>
  );
}

export default App;

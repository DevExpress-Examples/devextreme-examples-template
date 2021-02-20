import { useState } from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import './App.css';

import Button from 'devextreme-react/button';


function App() {
  var [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Button text={`Click count: ${count}`} onClick={clickHandler} />
    </div>
  );
}

export default App;

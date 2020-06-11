import React from 'react';

function App() {
  return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("Clicked")}}/>
      </React.Fragment>
    );
}

export default App;

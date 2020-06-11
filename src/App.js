import React from 'react';

function App() {
  const profiles= [
    {name: "Taro", age: 10},
    {name: "Mary", age: 24}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
    );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, {props.age} years old! </div>
}

Yser.defaultProps = {
  age: 1  
}

export default App;

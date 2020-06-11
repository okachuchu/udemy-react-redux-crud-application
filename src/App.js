import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles= [
    {name: "Taro", age: 10},
    {name: "Mary", age: 24},
    {name: "Maki"}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   age: 1  
// }

export default App;

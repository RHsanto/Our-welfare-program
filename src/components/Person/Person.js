import React from 'react';

const Person = (props) => {
  const{person} = props
  return (
    <div>
      <li> {person.name}</li>
    </div>
  );
};

export default Person;
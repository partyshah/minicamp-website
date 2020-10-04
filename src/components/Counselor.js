import React from 'react';

function Counselor(props) {
  return (
    <div>
      {props.imgpaths.map(path => (
          <img height="120px" width="120px" src={require('../assets/' + path + ".png")} alt=''/>
      ))}
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <h3>{props.blurb}</h3>
    </div>
  );
}

export default Counselor;

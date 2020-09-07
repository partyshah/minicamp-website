import React from 'react';

function CampTitle(props) {
  return (
    <div>
    {props.imgpaths.map(path => (
        <img src={require('../assets/' + path + ".png")} alt=''/>

    
    ))}
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    <h3>{props.tag}</h3>
    </div>
  );
}

export default CampTitle;
import React from 'react';

function CampTitle(props) {
  return (
    <div className="camp-title">
      {props.imgpaths.map(path => (
          <img height="120px" width="120px" src={require('../assets/' + path + ".png")} alt=''/>
      ))}
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3 className="tag">{props.tag}</h3>
    </div>
  );
}

export default CampTitle;

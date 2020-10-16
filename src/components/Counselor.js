import React from 'react';

function Counselor(props) {
  return (
    <div className="counselor">
      {props.imgpaths.map(path => (
          <img className="counselor_image" height="120px" width="120px" src={require('../assets/' + path + ".png")} alt=''/>
      ))}
      <div className="text">
        <h1 className="counselor_name">{props.name}</h1>
        <h2>{props.title}</h2>
        <a className="counselor_link" href={props.link}>{props.link_name}</a>
      </div>
    </div>
  );
}

export default Counselor;

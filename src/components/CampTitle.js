import React from 'react';
import {
  Link
} from "react-router-dom";

function CampTitle(props) {
  if (props.title === "figma"){
    return (

      <Link className="camp-link" to="/figma">
        <div className="camp-title">
          {props.imgpaths.map(path => (
              <img height="120px" width="120px" src={require('../assets/' + path + ".png")} alt=''/>
          ))}
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <h3 className="tag">{props.tag}</h3>
        </div>
      </Link>
    );
  }

  else if (props.title === "curriculum"){
    return (
      <Link className="camp-link" to="/curriculum">
        <div className="camp-title">
          {props.imgpaths.map(path => (
              <img height="120px" width="120px" src={require('../assets/' + path + ".png")} alt=''/>
          ))}
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <h3 className="tag">{props.tag}</h3>
        </div>
      </Link>

    );
  }

}

export default CampTitle;

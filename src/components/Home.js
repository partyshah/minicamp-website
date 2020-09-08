import React from 'react';
import CampTitle from "./CampTitle"

import "./Home.scss";
import "./CampTitle.scss";

const camps = [
    {
        title: "curriculum",
        subtitle: "is a party",
        tag: "for beginners",
        photos: ["parth"]

    },

    {
        title: "figma",
        subtitle: "is a party",
        tag: "for beginners",
        photos: ["lisa", "elizabeth"]

    }

];


function Home() {
  return (
    <div className="page-content">
      {camps.map(camp => (
        <CampTitle title={camp.title} subtitle={camp.subtitle} tag={camp.tag} imgpaths={camp.photos}/>
      ))}
    </div>
  );
}

export default Home;

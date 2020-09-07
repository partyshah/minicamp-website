import React from 'react';
import CampTitle from "./CampTitle"

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
    <div>
      {camps.map(camp => (
        <CampTitle title={camp.title} subtitle={camp.subtitle} tag={camp.tag} imgpaths={camp.photos}/>
      ))}
    </div>
  );
}

export default Home;
import React from 'react';
import CampTitle from "./CampTitle"

import "./Home.scss";
import "./CampTitle.scss";

const camps = [
    {
        title: "curriculum",
        subtitle: "is a party",
        tag: "for beginners",
        counselors: ["parth shah"],
        date: "TBD",
        description: "This 5 day mini camp will be a retreat for teachers, curriculum developers, engineers, really anyone to come create fun lessons with each other. We will work on critiquing and engaging each other in our lesson development.",
        details: ["day 1: blah 1", "day 2: blah 2", "day 3: blah 3", "day 4: blah 4", "day 5: blah 5"],
        photos: ["parth"]

    },

    {
        title: "figma",
        subtitle: "is a party",
        tag: "for beginners",
        counselors: ["elizabeth lin", "lisa inoue"],
        date: "TBD",
        description: "This 5 day mini camp will be a retreat for teachers, curriculum developers, engineers, really anyone to come create fun lessons with each other. We will work on critiquing and engaging each other in our lesson development.",
        details: ["day 1: blah 1", "day 2: blah 2", "day 3: blah 3", "day 4: blah 4", "day 5: blah 5"],
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

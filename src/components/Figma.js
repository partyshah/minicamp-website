import React from 'react';
import {
    Link
  } from "react-router-dom";
import CampTitle from "./CampTitle"


const content = {
      counselors: ["elizabeth lin", "lisa inoue"],
      title: "figma",
      subtitle: "is a party",
      tag: "for beginners",
      date: "TBD",
      photos: ["elizabeth", "lisa"],
      apply: "https://forms.gle/GgGq95sKvAswvhpX7",
      description: "blah description blah",
      outline: ["day 1: blah 1", "day 2: blah 2", "day 3: blah 3", "day 4: blah 4", "day 5: blah 5"]

  };

function Figma() {
  return (
    <div>
        <Link to="/">back</Link>
      <div>
        <CampTitle title={content.title} subtitle={content.subtitle} tag={content.tag} imgpaths={content.photos}/>
     </div>
      <div>
        <h2>camp counselors</h2>
        {content.counselors.map(counselor => (
            <p>{counselor}</p>
        ))}
      </div>

      <div>
        <h2>next class on...</h2>
        <p>{content.date}</p>
      </div>

      <div>
          <a href={content.apply}>apply</a>
      </div>

      <p>{content.description}</p>
      <div>
        {content.outline.map(section => (
            <p>{section}</p>
        ))}
      </div>
      
    </div>
  );
}

export default Figma;

import React from 'react';
import Counselor from "./Counselor"

const counselors = [
  {
      name: "parth",
      title: "dean of fun",
      blurb: "blah blah blah",
      photos: ["parth"]

  },

  {
    name: "lisa",
    title: "resident vibe reader",
    blurb: "blah blah blah",
    photos: ["lisa"]

  },

  {
    name: "elizabeth",
    title: "chief party princess",
    blurb: "blah blah blah",
    photos: ["elizabeth"]

  }
];

function About() {
  return (
    <div>
      <h1>we believe that learning is a party</h1>
      <p>Potlucks don't work unless everyone brings something to the table. Your
        unique perspectives make learning collaborative and community-driven.
      </p>
      <br></br>
      <p>Our learning experiences will challenge you to discover something new
        and learn in unexpected ways.
      </p>
      <br></br>
      <p>the most exciting part of any party can be bringing the party back to
        your community and sharing what you learned.
      </p>
      <div>
      {counselors.map(counselor => (
        <Counselor name={counselor.name} title={counselor.title} blurb={counselor.blurb}  imgpaths={counselor.photos}/>
      ))}
    </div>
    </div>
  );
}

export default About;
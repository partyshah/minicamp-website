import React from 'react';
import Counselor from "./Counselor"

import "./About.scss";

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
    <div className="page-content" id="about-page">
      <h1>we believe that learning is a party</h1>
      <p><strong><span role="img" aria-label="popcorn">🍿</span> A potluck party:</strong> Potlucks don't work unless everyone brings something to the table. Your unique perspectives make learning collaborative and community-driven.
      </p>
      <p><strong><span role="img" aria-label="scream">😱</span> A surprise party:</strong> Our learning experiences will challenge you to discover something new and learn in unexpected ways.
      </p>
      <p><strong><span role="img" aria-label="party">🎉</span> An afterparty:</strong> the most exciting part of any party can be bringing the party back to your community and sharing what you learned.
      </p>
      <h1 style={{marginTop: '80px'}}>meet the counselors</h1>
      <div className="counselors">
        {counselors.map(counselor => (
          <Counselor name={counselor.name} title={counselor.title} blurb={counselor.blurb}  imgpaths={counselor.photos}/>
        ))}
      </div>
      <h2 className="hello-text">talk to us at counselors @ minicamp.fun!</h2>
    </div>
  );
}

export default About;

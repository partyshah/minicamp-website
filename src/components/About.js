import React from 'react';
import Counselor from "./Counselor"

import "./About.scss";

const counselors = [
  {
      name: "parth",
      title: "dean of fun",
      link: "https://pedagogybyparth.com/",
      link_name: "pedagogy by parth",
      photos: ["parth"]

  },

  {
    name: "lisa",
    title: "resident vibe reader",
    link: "https://www.bylisainoue.com/",
    link_name: "by lisa inoue",
    photos: ["lisa"]

  },

  {
    name: "elizabeth",
    title: "chief party princess",
    link: "https://designisaparty.com/",
    link_name: "design is a party",
    photos: ["elizabeth"]

  }
];

function About() {
  return (
    <div className="page-content" id="about-page">
      <h1>we believe that learning is a party </h1>
      <p><strong><span role="img" aria-label="popcorn">🍿</span> a potluck party:</strong> potlucks don't work unless everyone brings something to the table. your unique perspectives make learning collaborative and community-driven.
      </p>
      <p><strong><span role="img" aria-label="scream">😱</span> a surprise party:</strong> our learning experiences will challenge you to discover something new and learn in unexpected ways.
      </p>
      <p><strong><span role="img" aria-label="party">🎉</span> an afterparty:</strong> the most exciting part of any party can be bringing the party back to your community and sharing what you learned.
      </p>
      <h1 id="counselors-heading" style={{marginTop: '80px'}}>meet the counselors</h1>
      <div className="counselors">
        {counselors.map(counselor => (
          <Counselor name={counselor.name} title={counselor.title} link={counselor.link} link_name={counselor.link_name} imgpaths={counselor.photos}/>
        ))}
      </div>
      <h2 className="hello-text">talk to us at counselors @ minicamp.fun!</h2>
    </div>
  );
}

export default About;

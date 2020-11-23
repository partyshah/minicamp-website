import React from 'react';
import {
    Link
  } from "react-router-dom";
import CampTitle from "./CampTitle"
import "./CampPage.scss";

const content = {
      counselors: ["parth shah"],
      title: "curriculum",
      subtitle: "is a party",
      tag: "for beginners",
      date: "jan 4th - jan 7th @ 7-8 PST",
      photos: ["parth"],
      apply: "https://forms.gle/2mr5Ez6ZvsyXAgXj7",
      description: "this 4 day, 1 hour a day, mini camp will be a retreat for teachers, curriculum developers, engineers, really anyone to come create fun lessons with each other. we will work on critiquing and engaging each other in our lesson development.",
      outline: ["🤔 day 1: what do you want to teach?", "🤪 day 2: finding the fun", "🔪 day 3: assessing without assessing", "📜 day 4: document with personality"]

  };

function Teaching() {
  return (
    <div className="page-content camp-page">
      <div className="camp-header">
        <div className="camp-info">
          <Link className="back-button" to="/">← all mini camps</Link>
          <div className="camp-info-section">
            <h2 style={{marginBottom: "0"}}><strong>camp counselors</strong></h2>
            {content.counselors.map(counselor => (
                <p>{counselor}</p>
            ))}
          </div>
        <div className="camp-info-section">
          <h2><strong>next class on</strong></h2>
          <p>{content.date}</p>
        </div>
        <a className="button-signup" href={content.apply}>apply</a>
      </div>

        <div className="camp-name">
          <CampTitle title={content.title} subtitle={content.subtitle} tag={content.tag} imgpaths={content.photos}/>
        </div>
      </div>

      <div className="camp-description">
        <p className="camp-summary">{content.description}</p>
        <div>
          {content.outline.map(section => (
              <p>{section}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teaching;

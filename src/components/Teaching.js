import React from 'react';
import {
    Link
  } from "react-router-dom";
import CampTitle from "./CampTitle"
import "./CampPage.scss";

const content = {
      counselors: ["parth shah"],
      title: "teaching",
      subtitle: "is a party",
      tag: "for beginners",
      date: "TBD",
      photos: ["parth"],
      apply: "https://forms.gle/GgGq95sKvAswvhpX7",
      description: "blah description blah",
      outline: ["day 1: blah 1", "day 2: blah 2", "day 3: blah 3", "day 4: blah 4", "day 5: blah 5"]

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
          <h2><strong>next class on...</strong></h2>
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

import React from 'react';
import {
    Link
  } from "react-router-dom";
import CampTitle from "./CampTitle"
import "./CampPage.scss";

const content = {
      counselors: ["elizabeth lin", "lisa inoue"],
      title: "figma",
      subtitle: "is a party",
      tag: "for beginners",
      date: "jan 28th @ 5 - 7:30 pm pst and jan 29th @ 5 - 6:30 pm pst",
      photos: ["elizabeth", "lisa"],
      apply: "https://forms.gle/f2gUPcNXBYEMTfjP7",
      description: "learn the basics of figma in this 4-hour online class. no previous design tool knowledge is required. we will not cover components or design principles in this class. at the end of this class, you will be able to navigate and use figma to start creating basic ui, illustrations, layouts, and more!",
      outline: ["🎨 topic 1: element & color", "✍️ topic 2: type", "📐 topic 3: alignment", "🧽 topic 4: effects & blending modes", "🎀 topic 5: putting it all together"]

  };

function Figma() {
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

export default Figma;

import React from 'react';
import '../styles/Project.css';

const Project = (props) => {
  const { name, description, sourceCode, liveApp, detailsPlacement } = props;
  const detailsStyling = {
    order: detailsPlacement === 'left' ? -1 : 0,
    margin: detailsPlacement === 'left' ? '1.5em -4em 0 0' : '1.5em 0 0 -3em'
  };

  return (
    <div className="project" 
         style={{justifyContent: detailsPlacement === 'left' ? 'flex-end' : 'flex-start'}}>
      <a className="preview" href={liveApp} target="_blank" rel="noreferrer">
        <div className="frame">
          <div className="media"></div>
        </div>
      </a>
      <article className="details" style={detailsStyling}>
        <h3 className="subheadings-font">{name}</h3>
        <p className="description">{description}</p>
        <p className="link">
          <a href={sourceCode} target="_blank" rel="noreferrer">SOURCE CODE</a>
        </p>
        <p className="link">
          <a href={liveApp} target="_blank" rel="noreferrer">LIVE APP</a>
        </p>
      </article>
    </div>
  );
};

export default Project;

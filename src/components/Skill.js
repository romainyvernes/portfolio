import React from 'react';
import '../styles/Skill.css';

const Skill = (props) => {
  const { name, image } = props;
  
  return (
    <div className="skill">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Skill;

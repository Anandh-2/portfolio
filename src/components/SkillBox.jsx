import React from 'react'

export default function SkillBox(skill) {
  return (
    <div id='skill-box'>
        <h5>{skill.skill.name}</h5>
        {skill.skill.icon}
        <p>{skill.skill.level}</p>
    </div>
  )
}

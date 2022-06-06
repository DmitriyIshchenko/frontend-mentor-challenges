import React from 'react'

export default function Filters({ activeSkills, handleRemoveSkill, handleClearSkills }) {

  const renderedSkills = activeSkills.map(skill =>
    <li key={skill}>
      <span>{skill}</span>
      <button onClick={() => handleRemoveSkill(skill)}>x</button>
    </li>)

  let content;
  if (activeSkills.length > 0) {
    content = <>
      <ul className='flex'>
        {renderedSkills}
      </ul>
      <button onClick={() => handleClearSkills()}>clear</button>
    </>
  }

  return (
    <div className='flex'>
      {content}
    </div >
  )
}

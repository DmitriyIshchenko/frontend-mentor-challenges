import classNames from 'classnames'
import React from 'react'
import { ReactComponent as IconRemove } from './images/icon-remove.svg'

export default function Filters({ activeSkills, handleRemoveSkill, handleClearSkills }) {

  const renderedSkills = activeSkills.map(skill =>
    <li key={skill} className='filter flex'>
      <span className='filter__title text-cyan'>{skill}</span>
      <button className='filter__btn-remove' onClick={() => handleRemoveSkill(skill)}><IconRemove /></button>
    </li>)

  if (activeSkills.length > 0) {


  }

  return (
    <div className={classNames(
      'filters-container',
      'flex', {
      'd-none': activeSkills.length === 0,
    })}>
      <ul className='flex'>
        {renderedSkills}
      </ul>
      <button className='btn-clear text-muted' onClick={() => handleClearSkills()}>clear</button>
    </div >
  )
}

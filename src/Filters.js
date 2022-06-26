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
      'filters-container', {
      'd-none': activeSkills.length === 0,
    })}>
      <div className='filters flex'>
        <ul className='filters__list flex'>
          {renderedSkills}
        </ul>
        <button className='filters__btn-clear text-muted' onClick={() => handleClearSkills()}>clear</button>
      </div>
    </div>
  )
}

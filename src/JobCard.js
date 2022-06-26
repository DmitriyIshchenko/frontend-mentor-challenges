import React from 'react';
import classNames from 'classnames';

export default function JobCard({ job, handleAddSkill }) {

  const {
    id,
    isFeatured,
    isNew,
    company,
    position,
    skills,
    postedAt,
    contract,
    location,
    logo
  } = job;

  const renderedSkills = skills.map(skill =>
    <li key={id + skill}>
      <button
        className='skill text-cyan'
        onClick={() => handleAddSkill(skill)}>
        {skill}
      </button>
    </li>
  )

  return (
    <li className='card'>

      <div className={classNames(
        'card__featured', {
        'd-none': !isFeatured,
      })}></div>

      <picture className='logo'>
        <img src={require(`${logo}`)} alt="" />
      </picture>

      <header className='card__header flex'>
        <p className='text-cyan'>{company}</p>
        <span className={classNames(
          'new flex', {
          'd-none': !isNew,
        })}>new!</span>

        <span className={classNames(
          'featured flex', {
          'd-none': !isFeatured,
        })}>featured</span>

      </header>

      <div className='job flow'>
        <h1 className='job__position text-dark'>{position}</h1>

        <ul className='job__conditions text-muted'>
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>

        <ul className='job__skills flex'>
          {renderedSkills}
        </ul>
      </div>
    </li>
  )
}

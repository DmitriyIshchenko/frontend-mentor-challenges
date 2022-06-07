import React from 'react';
import classNames from 'classnames';
//import logo from "./images/account.svg";

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
    <button
      className='skill'
      key={id + skill}
      onClick={() => handleAddSkill(skill)}
    >
      {skill}
    </button>)

  return (
    <li className='card flex'>
      <picture>
        <img src={require(`${logo}`)} alt="" />
      </picture>

      <div className='card__info flow'>
        <header className='flex'>
          <p>{company}</p>

          <span className={classNames({
            'd-none': !isNew,
          })}>new!</span>

          <span className={classNames({
            'd-none': !isFeatured,
          })}>featured</span>
        </header>

        <div className='card__info-main flex'>
          <h2>{position}</h2>
          <div className='flex'>
            {renderedSkills}
          </div>
        </div>

        <div className='card__info-meta flex'>
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
    </li>
  )
}

import React from 'react'
import JobCard from "./JobCard"

export default function JobsList({ jobs, activeSkills, handleAddSkill }) {

  const content = activeSkills.length === 0 ? jobs : jobs.filter(job => activeSkills.every(skill => job.skills.includes(skill)));
  const renderedContent = content.map(job => <JobCard key={job.id} job={job} handleAddSkill={handleAddSkill} />)

  return (
    <ul className='grid-container flow'>
      {renderedContent}
    </ul>
  )
}

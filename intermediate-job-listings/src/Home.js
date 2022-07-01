import React, { useState } from 'react'
import Filters from "./Filters"
import JobList from './JobsList'

import data from "./data.json"

export default function Home() {

  const jobs = data.map(item => ({ ...item, skills: [item.role, item.level, ...item.languages, ...item.tools] }));

  const getSkills = () => {
    let set = new Set();
    jobs.forEach(item => {
      set = new Set([...set, ...item.skills])
    })
    const skills = {};
    set.forEach(item => skills[item] = false);
    return skills;
  }

  const [skills, setSkills] = useState(getSkills());
  const handleAddSkill = (skill) => {
    setSkills({ ...skills, [skill]: true });
  };

  const handleRemoveSkill = (skill) => {
    setSkills({ ...skills, [skill]: false });
  };

  const handleClearSkills = () => {
    const clearedSkills = { ...skills };
    Object.keys(clearedSkills).forEach(skill => clearedSkills[skill] = false);
    setSkills(clearedSkills);
  }

  const activeSkills = Object.keys(skills).filter(item => skills[item]);

  return (
    <>
      <Filters
        activeSkills={activeSkills}
        handleRemoveSkill={handleRemoveSkill}
        handleClearSkills={handleClearSkills} />
      <JobList
        jobs={jobs}
        activeSkills={activeSkills}
        handleAddSkill={handleAddSkill} />
    </>
  )
}

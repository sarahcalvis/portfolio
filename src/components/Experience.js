import React from 'react';

let jobs = [
  {
    title: 'Junior Application Support Developer',
    company: 'Quadax, Inc.',
    duration: 'Beginning June 2020',
    location: 'Middleburg Heights, Ohio',
    description: 'I am very excited to begin work at Quadax after I graduate in May 2020!',
    skills: [
      'C#',
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Grant Street Group',
    duration: 'May 2019 - August 2019',
    location: 'Pittsburgh, Pennsylvania',
    description: ' As a developer intern at Grant Street Group, ' +
      'I independently prototyped a mobile app that interacts with company software ' +
      'to provide a better user experience. ' +
      'I collected client feedback on the mobile app at the company’s user group meeting and ' +
      'solicited information from many different parts of the company, ' +
      'and synthesized feedback from many different perspectives to ' +
      'create a product that met the needs of our clients. ' +
      'The most challenging and rewarding part was learning Vue Native, ' +
      'a new platform with few reference materials available.',
    skills: [
      'Jira',
      'Git',
      'Vue Native',
      'JavaScript',
      'Amazon Web Services',
      'Go'
    ]
  }
]

const getSkills = (skills) => {
  return skills.map((skill) => { 
    return <button>{skill}</button>
  })
}

let experience = jobs.map((job) => {
  return <div>
    <h4>{job.title}</h4>
    <h5>{job.company} - {job.location} - {job.duration}</h5>
    <p>{job.description}</p>
    {getSkills(job.skills)}
  </div>
})

export default function Experience() {
  return (
    <div id='section' >
      <div id='vertical-center' >
        <h2>Experience</h2>
        {experience}
      </div>
    </div>
  )
}
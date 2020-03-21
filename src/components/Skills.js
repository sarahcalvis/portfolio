import React from 'react';

let skills = [
  'Parallel Programming',
  'C#',
  'React',
  'Vue Native',
  'Java',
  'JavaScript',
  'C/C++',
  'Python',
  'HTML/CSS',
  'Kotlin',
  'Swift',
  'SQL',
  'REST APIs',
  'Firebase',
  'Web',
  'iOS',
  'Android',
  'Agile',
  'Scrum',
  'Git',
  'Jira',
  'Machine Learning',
  'AI',
  'Linux'
]
export default function Skills() {
  let skillsString = '';

  for (let skill in skills) {
    skillsString += skills[skill]
    skillsString += parseFloat(skill) === parseFloat(skills.length - 1) ? '.' : ', '
  }

  return (
    <div id='section' >
      <div id='vertical-center' >
        <h2>Skills</h2>
        <p>{skillsString}</p>
      </div>
    </div>
  )
}
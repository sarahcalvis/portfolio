import React from 'react';

import Tags from './Tags.js';

import GitHub from '../icons/github.svg'
import Link from '../icons/link.svg'

let projectsList = [
  {
    name: 'Giving Tree',
    link: 'https://givingtree-cfs.firebaseapp.com/',
    github: 'https://github.com/sarahcalvis/giving-tree',
    description: 'A website to provide public access to charitable giving opportunities through community foundations',
    skills: [
      'React',
      'Firebase',
      'Google Cloud',
      'Stripe Integration',
      'Jest',
      'Enzyme'
    ]
  },
  {
    name: 'WSAJ',
    link: 'https://wsaj-7626d.firebaseapp.com/',
    github: 'https://github.com/sarahcalvis/wsaj',
    description: 'A prototype website for the 91.1 WSAJ radio station at Grove City College',
    skills: [
      'React',
      'Firebase'
    ]
  },
  {
    name: 'Puppr',
    github: 'https://github.com/ShaunJorstad/Puppr',
    description: 'An Android app for animal shelters that pairs future dog owners with the perfect dog.',
    skills: [
      'Android',
      'Kotlin',
      'Firebase'
    ]
  },
  {
    name: 'Shortest Path Finder',
    github: 'https://github.com/sarahcalvis/a-star-IDA-star',
    description: 'An implementation of A* and Iterative Deepening A* for finding the shortest path between two nodes in a connected graph;',
    skills: [
      'Java',
      'Artificial Intelligence'
    ]
  },
  {
    name: 'Intelligenz',
    github: 'https://github.com/sarahcalvis/ap-java-tutor',
    description: 'An intelligent Java tutor designed to prepare students for the AP Computer Science test.',
    skills: [
      'JavaFx',
      'JUnit'
    ]
  },
  {
    name: 'Naive Bayes Classifier',
    github: 'https://github.com/sarahcalvis/bach-to-the-future',
    description: 'Naive Bayes Classifier for Bach Chorales that predicts what chord is playing based on the notes in that chord.',
    skills: [
      'Java',
      'Machine Learning'
    ]
  }
]

let projects = projectsList.map((project) => {
  return <div id='padding-div'>
    <div id='horizontal'>
      <div id='col-padding'>
        <h4>{project.name}</h4>
      </div>
      <div id='col-padding'>
        {project.link ? <a href={project.link} target='_blank' rel='noopener noreferrer'>
          <img alt="Link" src={Link} />
        </a> : ''}
      </div>
      <div id='col-padding'>
        <a href={project.github} target='_blank' rel='noopener noreferrer'>
          <img alt="Github" src={GitHub} />
        </a>
      </div>
    </div>
    <p>{project.description}</p>
    <Tags skills={project.skills} />
  </div>
})

export default function Projects() {
  return (
    <div id='section' >
      {/* <div id='vertical-center' > */}
        <h2>Projects</h2>
        {projects}
      {/* </div> */}
    </div>
  )
}
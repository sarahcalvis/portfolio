import React from 'react';

import Email from '../icons/email.svg'
import LinkedIn from '../icons/linkedin.svg'
import GitHub from '../icons/github.svg'

export default function Introduction() {
  return (
    <div id='section' >
      <div id='vertical-center' >
        <h2>Hey, thanks for stopping by!</h2>
        <p>I'm Sarah Calvis, a software developer in Cleveland, Ohio.</p>
        <div id='horizontal'>
          <div id='col-padding'>
            <a href='mailto:sarahcalvis@gmail.com'>
              <img alt="Email" src={Email} />
            </a>
          </div>
          <div id='col-padding'>
            <a href='https://www.github.com/sarahcalvis' target='_blank' rel='noopener noreferrer'>
              <img alt="GitHub" src={GitHub} />
            </a>
          </div>
          <div id='col-padding'>
            <a href='https://www.linkedin.com/in/sarah-calvis-6aba91150' target='_blank' rel='noopener noreferrer'>
              <img alt="LinkedIn" src={LinkedIn} />
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}
import React from 'react';

import Email from '../icons/email.svg';
import LinkedIn from '../icons/linkedin.svg';
import GitHub from '../icons/github.svg';

export default function Footer() {
  return (
    <div id='footer'>
      <p>Sarah Calvis</p>
      <div id='horizontal'>
        <div id='col-padding'>
          <a href='mailto:sarahcalvis@gmail.com'>
            <img alt="Email" src={Email} id='cover-icon' />
          </a>
        </div>
        <div id='col-padding'>
          <a href='https://www.github.com/sarahcalvis' target='_blank' rel='noopener noreferrer'>
            <img alt="GitHub" src={GitHub} id='cover-icon' />
          </a>
        </div>
        <div id='col-padding'>
          <a href='https://www.linkedin.com/in/sarah-calvis-6aba91150' target='_blank' rel='noopener noreferrer'>
            <img alt="LinkedIn" src={LinkedIn} id='cover-icon' />
          </a>
        </div>
      </div>
    </div>
  )
}
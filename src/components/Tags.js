import React from 'react';
export default function Tags(props) {
  return props.skills.map((skill) => {
    return <button>{skill}</button>
  })
}
import React from 'react'

function Experience({icon, title, about}) {
  return (
    <div className="exp">
        <i>{icon}</i>
        <h1>{title}</h1>
        <h2>{about}</h2>
    </div>
)
}

export default Experience
import React from 'react'

const FunctionalComponent = ({name}) => {
  return (
    <div style={{
        backgroundColor:"yellow"
    }}>
    <div>FunctionalComponent</div>
    <h4>I am Rendering Out name: {name}</h4>
    </div>
  )
}

export default FunctionalComponent
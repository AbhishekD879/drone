import React from 'react'

const Child1 = ({ChildComp}) => {
  return (
    <div style={{
        backgroundColor:"red",
        padding:"5rem",
        color:"white"
    }}>
        <h1>Hi fom Child 1</h1>
        {ChildComp}
    </div>
  )
}

export default Child1
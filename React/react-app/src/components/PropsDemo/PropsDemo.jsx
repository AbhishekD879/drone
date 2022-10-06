import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const PropsDemo = () => {
  return (
    <div>
        <Child1 ChildComp={<Child2/>} />
    </div>
  )
}

export default PropsDemo
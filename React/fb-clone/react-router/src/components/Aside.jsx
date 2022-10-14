import React from 'react'
import AsideCircle from './AsideCircle'

const Aside = ({data}) => {
    data=data.slice(0,5)
  return (
    <aside className="aside">
    <div className="aside__header">
        <div className="asider__header__left__container">
            <div className="aside__Profile__imgContainer">
                <img src="https://images.unsplash.com/photo-1642425149819-af1b803b2b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
            <div className="aside__left">
                <div className="aside__profile">abhishekdiwate2k</div>
                <div className="aside__Name__Id">Abhishek Diwate</div>
            </div>
        </div>
        <div className="aside__right">
            <p>Switch</p>
        </div>
    </div>

    <div className="aside__main">
        <div className="suggestion__box">
            <h2>Suggestions For You</h2>
            <p>See All</p>
        </div>

    {data.map((data)=>(<AsideCircle data={data}/>))}
    </div>
</aside>
  )
}

export default Aside
import React from 'react'

const AsideCircle = ({data}) => {
  return (

        <div className="suggested__profile__list">
            <div className="suggested__profile__list__Each__profile">
                <div className="suggested__profile__Each__profile__left">
                    <div className="suggested__profile__ImageContainer">
                        <img src={data.owner?.picture} />
                    </div>
                    <div className="suggested__Each__profile__Name-Status__Conatiner">
                        <h4>{data.owner?.firstName}</h4>
                        <p>New to Instagram</p>
                    </div>
                </div>
                <div className="suggested__Each__Profile__followBtn">
                    follow
                </div>
            </div>
         </div>   
    
  )
}

export default AsideCircle
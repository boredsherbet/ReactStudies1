import React from 'react'
import katiezaferes from '../assets/katiezaferes.png'
import wedding from '../assets/wedding.png'
import bike from '../assets/bike.png'
import star from '../assets/star.png'
export default function Card(props){
    let badgeText;
    if (props.openspots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            <img className="person" src={props.coverImg} alt="" />
            <div className="cardInfo">
                <img src={star} alt="" className="star" />
                <p className="cardRating">{props.rating}</p>
                <p className="cardReviewCount">({props.stats.reviewCount})</p>
                <p className="cardLocation">{props.location}</p>
            </div>
            <p className='carddescription'>{props.title}</p>
            <p className="cardprice"><strong>${props.price}</strong> / person</p>
            {badgeText && <p className='soldOutTag'>{badgeText}</p>}
        </div>
    )
}
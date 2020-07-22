import React from 'react'
import './partnercard.scss'

export default function PartnerCard(props) {
    return (
        <div className="flex-column pd-1 width-20">
            <div className="partner_logo"><img src={props.logo} alt={props.title} width="100%"/></div>
            <p className="font-black font-medium upper">{props.title}</p>
        </div>
    )
}

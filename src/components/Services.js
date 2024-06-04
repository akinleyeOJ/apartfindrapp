import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail />,
                title:"What we stand for",
                info: "We have created a free, simpler, convenient and effective way for apartment hunters to find their next property"

            },
            {
                icon:<FaHiking />,
                title:"Perks",
                info: "Up-to-date property information, available for free, accessible 24 hours a day to anyone with internet access and far more complete in terms of number of properties and depth of detail on each property than through other traditional advertising media."

            },
            {
                icon:<FaShuttleVan />,
                title:"Direct Contact With Seller",
                info: "We do not collect any agent fee. Do not pay in advance. Try to meet at a safe, public location. Check the apartment out. Pay only after sactisfied."

            },
           
        ]
    };
    render() {
        return (
           <section className="services">
                <Title title="What We Offer" />
             <div className="services-center">
                 {this.state.services.map((item,index) => {
                     return ( 
                     <article key={index} className="service">
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                         <p>{item.info}</p>
                     </article>
                 );
                 })}

             </div>
            </section>
        );
    }
}

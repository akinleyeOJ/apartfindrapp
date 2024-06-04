import React, { Component } from "react";
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context' ;
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    // componentDidMount() {

    // }
static contextType = RoomContext;

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
             return ( <div className="error">
                 <h3>No room of such</h3>
                 <Link to="/rooms" className="btn-primary">
                     back to rooms
                 </Link>
             </div>
             );
        }
        const {
            name, 
            description,
            location,
            price,
            extras,
            images
        } = room;
const [mainImg,...defaultImg] = images;
        return (
            <>
           <StyledHero img={mainImg || this.state.defaultBcg}>
              <Banner title={`${name} Apartment`}>
                  <Link to="/rooms" className="btn-primary">
                      back to rooms
                  </Link>
              </Banner>
           </StyledHero>
           <section className="single-room">
             <div className="single-room-images">
                 {defaultImg.map((item, index) => (
                   <img key={index} src={item} alt= {name} />
                 ))}
             </div>
             <div className="single-room-info">
             <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price : ₦{price}</h6>  
                    <h6>
                        location : {""}
                        {location > 1 ? `${location}` :
                          `${location}, Nigeria`}
                    </h6> 
                     
                </article>
             </div>
           </section>
           <section className="room-extras">
               <h6>Contact</h6>
               <ul className="extras">
                   {extras.map((item, index) => {
                       return <li key={index}>- {item}</li>;
                   })}
               </ul>
           </section>
           </>
        );
    }
}

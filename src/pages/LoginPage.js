import React from "react";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Login from "../components/Login";
import Footer from '../components/Footer'


export default function LoginPage() {
    return ( 
        <>
        <Login />
        <Hero >
            <Banner title="Find Apartments" subtitle="rooms starting at ₦40,000">
                <Link to="/rooms" className="btn-primary">Apartments
                </Link>
            </Banner>
        </Hero>
        
        <Footer />
        </>
    );
}
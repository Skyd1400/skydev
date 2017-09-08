import React from 'react';
import SkyHead from "../components/Head";
import Nav from "../components/Nav";
import Hero from "../components/home/Hero";
import AboutMe from "../components/home/AboutMe";
import Services from "../components/home/Services";
import Footer from "../components/Footer";

class Index extends React.Component {
    render() {
        return (
            <div>
                <SkyHead />
                <Nav />
                <Hero />
                <AboutMe />
                <Services/>
                <Footer />
            </div>
        )
    }
}

export default Index;
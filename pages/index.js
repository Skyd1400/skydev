import React from 'react';
import SkyHead from "../components/Head";
import Nav from "../components/Nav";
import Hero from "../components/home/Hero";

class Index extends React.Component {
    render() {
        return (
            <div>
                <SkyHead />
                <Nav />
                <Hero />
            </div>
        )
    }
}

export default Index;
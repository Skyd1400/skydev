import React from 'react';
import SkyHead from '../components/Head';
import Nav from '../components/Nav';
import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import Footer from '../components/Footer';

import { Service } from '../config';

class Index extends React.Component {

    static async getInitialProps({req}) {
        let works = await Service.getWorks(req);
        return { works };
    }

    render() {
        return (
            <div>
                <SkyHead />
                <Nav />
                <Hero />
                <AboutMe />
                <Services/>
                <Portfolio works={this.props.works} />
                <Footer />
            </div>
        );
    }
}

export default Index;
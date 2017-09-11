import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import SkyHead from '../components/Head';
import Nav from '../components/Nav';
import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import Footer from '../components/Footer';

import i18n from '../i18n';

import { Service } from '../config';

class Index extends React.Component {

    static propTypes = {
        works: PropTypes.array
    }

    static async getInitialProps({req}) {
        let works = await Service.getWorks(req);
        let props = { works };
        if (req && !process.browser) Object.assign(props, i18n.getInitialProps(req, ['home', 'common']));
        return props;
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



export default translate(['common', 'home'], {i18n, wait: process.browser})(Index);
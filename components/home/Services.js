import React from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

const Services = ({ t }) => (
    <section className="root">
        <div className="container">
            <h1 className="section-title">{ t('service-title') }</h1>
            <ul>
                <li>{ t('service-ui') }</li>
                <li>{ t('service-ux') } </li>
                <li> { t('service-web') } </li>
                <li> { t('service-mobile') } </li>
            </ul>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            .root {
                color: white;
                background-color: #3c999c;
            }
            h1 {
                text-align: center;
                margin-bottom: 5rem;
            }

            ul {
                list-style: none;
                text-align: center;
                margin-bottom: 0;
                font-size: 1.8rem;
            }

            ul li:not(:last-child) {
                margin-bottom: 4rem;
            }

            p {
                text-align: center;
            }
        `}</style>
    </section>
);

Services.propTypes = {
    t: PropTypes.func
};

const Extended = translate(['home'], {i18n})(Services);

export default Extended;
import React from 'react';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

const Hero = ({ t }) => (
    <section className="hero">
        <div className="container">
            <div className="avatar">
                <img src="./static/img/profile.jpg"/>
            </div>
            <h1 className="brand-name">Skydev</h1>
            <h3 className="brand-motto">{ t('motto') }</h3>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            .hero {
                background-color: #3c999c;
                background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.21' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
            }

            .avatar {
                display: block;
                margin: 0 auto;
                width: 190px;
                border-radius: 50%;
                margin-bottom: 4rem;
            }

            .avatar img {
                width: 100%;
                height: auto;
                border-radius: 50%;
                border: 4px solid #fff;
            }

            .brand-name {
                color: #fff;
                font-weight: 600;
                text-align: center;
                margin-bottom: .2rem;
                text-transform: uppercase;
            }

            .brand-motto {
                font-size: 18px;
                color: #fff;
                font-weight: normal;
                text-align: center;
                margin:0;
            }
        `}</style>
    </section>
);

const Extended = translate('home', {i18n})(Hero);

export default Extended;
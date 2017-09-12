import React from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import { FacebookUrl, GithubUrl} from "../config";

const Footer = ({ t }) => (
    <footer>
        <div className="container">
            <h5>{ t('lets-connect') }</h5>
            <ul className="social-links">
                <li><a href={ FacebookUrl } className="mdi mdi-facebook-box"></a></li>
                <li><a href={ GithubUrl } className="mdi mdi-github-box"></a></li>
            </ul>
            <p>{ t('copyright') }</p>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            footer {
                background-color: #444;
                color: white;
                padding: 50px 0 20px;
            }

            a {
                color: white;
            }

            h5 {
                text-align: center;
                font-weight: 700;
            }
            .social-links {
                list-style: none;
                padding: 0;
                text-align: center;
            }

            .social-links a {
                font-size: 5.6rem;
            }

            @media (min-width: 550px) {
                .social-links {
                }

                .social-links li {
                    display: inline-block;

                }

                .social-links a {
                    padding: 0 1rem;
                }
            }

            p {
                text-align: center;
                margin-bottom:0;
            }
        `}</style>
    </footer>
);

Footer.propTypes = {
    t: PropTypes.func
};


const Extended = translate('common', {i18n})(Footer);

export default Extended;
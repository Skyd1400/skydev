import React from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';
import i18n from '../../i18n';


const Portfolio = ({ works, t}) => (
    <section className="root">
        <div className="container">
            <h1 className="section-title">{ t('work-title') }</h1>
            <div className="row portfolio-grid">
                { works.map(work => (
                    <div key={ work.workId } className="four columns">
                        <div className="pf-card">
                            <img src={work.thumbnail} />
                            <div className="overlay">
                                <div className="details"><i className="mdi mdi-information-outline"></i> Details</div>
                            </div>
                        </div>
                    </div>  
                ))}
            </div>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            h1.section-title {
                text-align: center;
                margin-bottom: 4rem;
            }

            p {
                text-align: center;
            }

            .portfolio-grid {
            }
            .pf-card {
                position: relative;
                margin-bottom: 20px;
            }

            .pf-card .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #3c999c80;
                opacity: 0;
                transition: opacity .25s ease-out;
            }

            .pf-card .overlay:hover {
                opacity: 1;
            }

            .pf-card .overlay .details {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                font-weight: 400;
                padding: 5px 10px;
                border: 1px solid #fff;
                border-radius: 3px;
                transition: all .1s ease-in-out;
            }

            .pf-card .overlay .details:hover {
                color: #3c999c;
                background-color: #fff;
                border: none;
            }
            .pf-card img {
                width: 100%;
                height: auto;
                vertical-align: bottom;
            }

            @media (min-width: 550px) {
                .four.columns {
                    width: 48%;
                }

                .four.columns:nth-child(2n+1) {
                    margin-left: 0;
                }
            }

            @media (min-width: 750px) {
                .four.columns {
                    width: 30.6666666667%;
                }
                .four.columns:nth-child(2n+1) {
                    margin-left: 4%;
                }
                .four.columns:nth-child(3n + 1) {
                    margin-left: 0;
                }
            }
        `}</style>
    </section>
);

Portfolio.propTypes = {
    works: PropTypes.array,
    t: PropTypes.func
};

const Extended =  translate('home', {i18n})(Portfolio);

export default Extended;
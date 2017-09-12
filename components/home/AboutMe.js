import React from 'react';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

const AboutMe = ({ t }) => (
    <section className="root">
        <div className="container">
            <h1 className="section-title">{ t('about-title') }</h1>
            <p dangerouslySetInnerHTML= {{ __html : t('about-text') }}></p>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            h1 {
                text-align: center;
            }

            p {
                text-align: center;
            }
        `}</style>
    </section>
);

const Extended = translate('home', {i18n})(AboutMe);

export default Extended;
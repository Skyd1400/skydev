import React from 'react';
import Link from 'next/link';
import {translate} from 'react-i18next';
import i18n from '../i18n';

import { FacebookUrl, GithubUrl} from "../config";

const navHeight = 56;

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isVisible: false};
    }

    showMenu() {
        this.setState({isVisible: true});
    }

    hideMenu() {
        this.setState({isVisible: false});
    }

    render() {
        let t = this.props.t;
        return (
            <nav>
                <div className="container">
                    <a className="menu mdi mdi-menu mdi-24 dn-m" onClick={this.showMenu.bind(this)}></a>
                    <div className="logo">
                        <Link href="/"><a><img src="/static/img/logo.png"/></a></Link>
                    </div>
                    <div className={ 'overlay' + (this.state.isVisible ? ' visible' : '')} onClick={this.hideMenu.bind(this)}></div>
                    <ul className={ 'nav' + (this.state.isVisible ? ' visible' : '')}>
                        <li><Link href="/"><a>{t('home')}</a></Link></li>
                        <li><Link href="/blog"><a>{t('blog')}</a></Link></li>
                        <li>
                            <ul className="social-links">
                                <li><a href={ FacebookUrl } className="mdi mdi-facebook"></a></li>
                                <li><a href={ GithubUrl } className="mdi mdi-github-circle"></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/*language=CSS*/}
                <style jsx>{`
                    .container {
                        position: static!important;
                    }
                  nav {
                    height: ${navHeight}px;
                    border-bottom: 4px solid #4dc9cc;
                  }

                  .menu {
                    float:left;
                    height: ${navHeight}px;
                    font-size: 3rem;
                    line-height: ${navHeight}px;
                    color: #3c999c;
                  }

                  .logo {
                  position: absolute;
                  top: 8px;
                  left: 50%;
                    width: auto;
                    margin: 0 auto;
                    margin-left: -17.94165px;
                    text-align: center;
                  }

                  .logo img {
                    width: auto;
                    height: ${navHeight - 16}px;
                  }

                  .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.82);
                    z-index: -8;
                    opacity: 0;
                    transition: opacity .25s ease-out;
                  }

                  .overlay.visible {
                    z-index: 8;
                    opacity: 1;
                  }


                  .nav {
                    box-sizing: border-box;
                    list-style: none;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    max-width: 280px;
                    margin: 0;
                    padding: 20px;
                    background-color: #fff;
                    z-index: 16;
                    overflow-y: scroll;
                    transform: translate(-100%, 0);
                    transition: transform .25s ease-out;
                  }

                  .nav.visible {
                    transform: none;
                  }

                  .nav li a {
                    display: block;
                    color:#3c999c;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    height: ${navHeight}px;
                    line-height: ${navHeight}px;
                  }

                  .nav > li > a {
                    font-weight: 700;
                  }

                  @media (min-width: 750px) {
                      .nav {
                        position: static;
                        display: block;
                        float: right;
                        background: none;
                        margin: 0;
                        padding: 0;
                        overflow-y: hidden;
                        width: auto;
                        transform: none;
                      }

                      .menu {
                        display: none;
                      }

                      .logo {
                        position:static;
                        float:left;
                        margin-top: 8px;
                      }

                      .overlay {
                        display: none;
                      }

                      .nav li {
                        display: inline-block;
                        margin: 0;
                        vertical-align: middle;
                      }
                      .nav li a {
                        text-align: left;
                      }

                      .nav > li > a {
                      vertical-align: middle;
                        padding: 0 1.2rem;
                      }
                  }

                  .social-links {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                  }

                  .social-links a {
                    font-size: 24px;
                    padding: 0 .8rem;
                  }

                `}</style>
            </nav>
        );
    }
}

const Extended = translate('common', {i18n})(Nav);

export default Extended;
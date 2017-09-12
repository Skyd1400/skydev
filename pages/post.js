import React from 'react';
import SkyHead from '../components/Head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ReactDisqusThread from 'react-disqus-thread';
import { ShareButtons, generateShareIcon } from 'react-share';
import { Service } from '../config';

const { FacebookShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');

import { translate } from 'react-i18next';
import i18n from '../i18n';


class Post extends React.Component {
    
    static async getInitialProps({req, query}) {
        let post = await Service.getPost(req, query.id);
        let props = { post };
        if (req && !process.browser) Object.assign(props, i18n.getInitialProps(req, ['home', 'common']));
        return props;
    }
    
    render() {
        return (
            <div>
                <SkyHead />
                <Nav />
                <div className="page-title">                    
                    <h1 className="title">{ this.props.post.title }</h1>
                    <h3 className="subtitle"> {this.props.post.subtitle}</h3>
                </div>
                <div id="page-content">
                    <div className="container">
                        <img className="thumbnail" src={this.props.post.thumbnail} />
                        <div className="post-content" 
                            dangerouslySetInnerHTML={{__html: this.props.post.content}}>
                        </div>
                        <ul className="post-tags">
                            { (this.props.post.tags || []).map((tag, index) => (
                                <li key={index}>{ tag }</li>
                            ))}
                        </ul>   
                        <hr/>
                        <FacebookShareButton url={this.props.url.pathname+'?id='+this.props.url.query.id} quote={this.props.post.title} 
                            picture={this.props.post.thumbnail}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <hr />
                        {/*<ReactDisqusThread shortname="skydev-1" 
                                        identifier={ this.props.post.id } />*/}
                    </div>
                </div>
                <Footer />
                {/*language=CSS*/}
                <style jsx>{`
                    .container {
                        max-width: 750px;
                    }
                    .thumbnail {
                        width: 100%;
                        height: auto;
                        margin-bottom: 2rem;
                    }
                    
                    .page-title {
                        text-align:center;
                        background-color: #3c999c;
                        color: #fff;
                        background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.21' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
                        padding: 50px 0;
                    }
                    
                    .title {
                        color: #fff;
                        text-align: center;
                    }
                    
                    .subtitle {
                        font-weight: 400;
                        font-size: 2.4rem;
                    }
                    
                    .post-content {
                        font-weight: 400;
                        font-size: 2.1rem;
                        line-height: 2;
                        font-family: Georgia,Cambria,"Times New Roman",Times,serif;
                    }
                    
                    .post-content ul, .post-content ol {
                        padding: 0 4rem;
                    }
                    
                    .post-content blockquote {
                        font-style: italic;
                    }l
                    
                    .post-tags {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    
                    .post-tags li {
                        display: inline-block;
                        margin: 0;
                        margin-right: 1rem;
                        padding: .4rem 1rem;
                        background-color: #eee;
                        border-radius: .3rem;
                        font-size: 1.3rem;
                        color: #444;
                    }
                    
                    .share-buttons {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    
                    .share-buttons li {
                        display: inline-block;
                        margin: 0;
                        margin-right: 1rem;
                    }
                    
                    .share-buttons button {
                        font-size: 2.4rem;
                        font-weight: normal;
                    }
                `}</style>
            </div>
        );
    }
}

export default translate(['common'], {i18n})(Post);
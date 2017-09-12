import React from 'react';
import SkyHead from '../components/Head';
import Nav from '../components/Nav';
import PostCard from '../components/blog/PostCard';
import Footer from '../components/Footer';

import { Service } from '../config';

import { translate } from 'react-i18next';
import i18n from '../i18n';


class Blog extends React.Component {
    
    static async getInitialProps({ req }) {
        let posts = await Service.getPosts(req);
        let props =  {posts};
        if (req && !process.browser) Object.assign(props, i18n.getInitialProps(req, ['common']));
        return props;
    }
    
    renderBlogList() {
        let posts = this.props.posts || [];
        return posts.map(post => (
            <PostCard key={post.postId} {...post}/>
        ));
    }
    
    render() {
        return (
            <div>
                <SkyHead/>
                <Nav/>
                <header className="header">
                    <h1 className="title">Blog</h1>
                </header>
                <div id="page-content">
                    <div className="container">
                        {this.renderBlogList()}
                    </div>
                </div>
                <Footer />
                {/*language=CSS*/}
                <style jsx>{`
                    .container {
                        max-width: 750px;
                    }
                    header {
                        background-color: #3c999c;
                        background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.21' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
                        padding: 50px;
                    }
                    
                    .title {
                        color: #fff;
                        text-align: center;
                        margin: 0;
                    }
                `}</style>
            </div>
        );
    }
}

export default translate(['common'], {i18n, wait: process.browser})(Blog);
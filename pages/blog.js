import React from 'react';
import SkyHead from "../components/Head";
import Nav from "../components/Nav";
import PostCard from "../components/blog/PostCard";
import Footer from "../components/Footer";

class Blog extends React.Component {

    static async getInitialProps() {
        return {
            posts: [{}, {}, {}]
        };
    }

    renderBlogList() {
        let posts = this.props.posts || [];
        return posts.map(post => (
            <PostCard/>
        ))
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
                    header {
                        background-color: #eee;
                        padding: 50px;
                    }

                    .title {
                        text-align: center;
                        margin: 0;
                    }
                `}</style>
            </div>
        )
    }
}

export default Blog;
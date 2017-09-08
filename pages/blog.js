import React from 'react';
import SkyHead from "../components/Head";
import Nav from "../components/Nav";

class Blog extends React.Component {
    render() {
        return (
            <div>
                <SkyHead />
                <Nav />
                <header className="header">
                    <h1 className="title">Blog</h1>
                </header>
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
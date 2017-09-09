import React from 'react';
import SkyHead from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class Post extends React.Component {
    render() {
        return (
            <div>
                <SkyHead />
                <Nav />
                <div className="page-title">                    
                    <h1 className="title">Nextjs : Yon gid pou demare</h1>
                </div>
                <div id="page-content">
                    <div className="container">
                        <img className="thumbnail" src="./static/img/blog1.jpg" />
                        <div className="post-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet nulla sed venenatis vulputate. Nulla venenatis mi sed fermentum laoreet. Aenean consequat eros nec sem ultrices tempus. In fringilla porttitor lectus in aliquet. Aliquam elit ipsum, accumsan vitae sagittis eget, ultricies at purus. Pellentesque neque libero, dapibus et rhoncus sed, vestibulum et dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <br/><br/>In sed pellentesque leo. Nunc non ipsum ex. Sed mattis sem sit amet orci dapibus, eget feugiat urna porttitor. Etiam tincidunt at ex quis iaculis. Maecenas consectetur porttitor est et mollis. Sed in vehicula ligula. In interdum ut orci dapibus semper. Quisque tristique risus ut augue rutrum, vitae faucibus felis interdum. Mauris sagittis sem vel dignissim porta. Nullam sit amet risus ut purus eleifend tempor quis in sem. Morbi ac hendrerit purus. Vivamus venenatis consequat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt urna ut lobortis tristique. Nunc in urna non leo vehicula rhoncus ac in sapien.</p>
                            <h4>Step 1 :  Embrace yourself, winter is coming</h4>
                            <ol>
                                <li>Sed in vehicula ligula. In interdum ut orci dapibus semper. Quisque tristique risus ut augue rutrum, vitae faucibus felis interdum. </li>
                                <li>Sed in vehicula ligula. In interdum ut orci dapibus semper. Quisque tristique risus ut augue rutrum, vitae faucibus felis interdum. </li>
                                <li>Sed in vehicula ligula. In interdum ut orci dapibus semper. Quisque tristique risus ut augue rutrum, vitae faucibus felis interdum. </li>
                            </ol>
                            <h4>Step 2 :  This is a joke, don’t read</h4>
                            <ul>
                                <li>Mauris sagittis sem vel dignissim porta Curabitur tincidunt urna ut lobortis tristique. Nunc in urna non leo vehicula rhoncus ac in sapien.</li>
                                <li>Nullam sit amet risus ut purus eleifend tempor quis in sem. Morbi ac hendrerit purus. Vivamus venenatis consequat viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet nulla sed venenatis vulputate. Nulla venenatis mi sed fermentum laoreet. Aenean consequat eros nec sem ultrices tempus. In fringilla porttitor lectus in aliquet. Aliquam elit ipsum, accumsan vitae sagittis eget, ultricies at purus. Pellentesque neque libero, dapibus et rhoncus sed, vestibulum et dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                            <blockquote>
                                <p>"In fringilla porttitor lectus in aliquet. Aliquam elit ipsum, accumsan vitae sagittis eget, ultricies at purus. Pellentesque neque libero, dapibus et rhoncus sed, vestibulum et dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."</p>
                                <cite>Robet Smith</cite>
                            </blockquote>
                        </div>
                        <ul className="post-tags">
                            <li>JavaScript</li>
                            <li>Nextjs</li>
                            <li>Reactjs</li>
                        </ul>   
                        <hr/>
                        <h5>Share</h5>
                        <ul className="share-buttons">
                            <li><button><i className="mdi mdi-facebook"></i></button></li>
                            <li><button><i className="mdi mdi-twitter"></i></button></li>
                        </ul>
                    </div>
                </div>
                <Footer/>
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
                        background-color: #3c999c;
                        background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.21' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
                        padding: 50px 0;
                    }

                    .title {
                        color: #fff;
                        text-align: center;
                        margin: 0;
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
        )
    }
}

export default Post;
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
                <img className="thumbnail" src="./static/img/blog1.jpg"/>
                <div id="page-content">
                    <div className="container">
                        <h1 className="title">Nextjs : Yon gid pou demare</h1>
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
                    </div>
                </div>
                <Footer/>
                {/*language=CSS*/}
                <style jsx>{`
                    .thumbnail {
                        width: 100%;
                        height: auto;
                    }

                    .title {
                        margin-bottom: 4rem;
                    }
                `}</style>
            </div>
        )
    }
}

export default Post;
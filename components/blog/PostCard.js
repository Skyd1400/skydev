import Link from 'next/link';

const PostCard = (props) => (
    <article className="root clearfix">
        <div className="media">
            <img src={props.thumbnail} />
        </div>
        <div className="info">
            <p className="date"><i className="mdi mdi-calendar"></i> { props.pubDate }</p>
            <h3 className="title"><Link href={'/blog/p/'+ props.postId+ '/' +props.slug }><a>{props.title}</a></Link></h3>
            <h5 className="author">{ props.author }</h5>
            <Link href={'/post?id='+ props.postId }><a className="read-more button">Read More...</a></Link>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            .root {
                border: 1px solid #eee;
                margin-bottom: 50px;
                box-shadow: 0 8px 10px 0px #0003;
            }

            /*.media {
                background-position: center top;
                background-size: cover;
                height: 100%;
            }
            */

            .media img {
                width: 100%;
                height: auto;
                vertical-align: bottom;
            }

            .info {
                padding: 20px;
            }

            .date {
                margin-bottom: 1.3rem;
            }

            .title {
                margin-bottom: .3rem;
            }

            .title a {
                text-decoration: none;
                color: #222;
            }
            .author {
                font-size: 1.8rem;
                font-weight: 600;
                color: #3c999c;
                margin-bottom: 3.5;
            }

            .read-more {
                margin: 0;
            }

            @media (min-width: 750px) {
                /*.media {
                    float: left;
                    width: 38.2716%;
                }*/
                .info {
                    padding: 40px;
                    box-sizing: border-box;
                }
            }
        `}</style>
    </article>
);

export default PostCard;
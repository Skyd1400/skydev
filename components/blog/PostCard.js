import Link from 'next/link';

const PostCard = () => (
    <article className="root">
        <div className="media">
            <img src="./static/img/blog1.jpg"/>
        </div>
        <div className="info">
            <p className="date"><i className="mdi mdi-calendar"></i> 20 January 2016</p>
            <h3 className="title">Nextjs : Yon gid pou demare</h3>
            <h5 className="author">Skydev</h5>
            <p className="except">Voluptate illum dolore ita ipsum, quid deserunt singulis, labore admodum ita multos
                malis ea nam nam tamen fore amet. Vidisse quid incurreret ut ut possumus transferrem si ita labore dolor
                si appellat...</p>
            <Link href="/post"><a className="button">Read More...</a></Link>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            .root {
                border: 1px solid #eee;
                margin-bottom: 50px;
                box-shadow: 0 8px 10px 0px #0003;
            }

            .media img {
                width: 100%;
                height: auto;
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

            .author {
                font-size: 1.8rem;
                font-weight: 600;
                color: #3c999c;
                margin-bottom: 3.5;
            }

            @media (min-width: 750px) {
                .info {
                    padding: 40px;
                }
            }
        `}</style>
    </article>
);

export default PostCard;
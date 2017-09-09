import Head from 'next/head';

const SkyHead = () => (
    <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Skydev</title>
        <link href="./static/css/normalize.css" rel="stylesheet"/>
        <link href="./static/css/skeleton.css" rel="stylesheet"/>
        <link href="./static/css/materialdesignicons.css" rel="stylesheet"/>
        {/*language=CSS*/}
        <style>{`
            section {
                padding: 100px 0;
            }

            .clearfix {
                zoom: 1;
            }

            .clearfix:before, .clearfix:after {
                content: "\\0020";
                display: block;
                overflow: hidden;
                visibility: hidden;
                width: 0;
                height: 0;
                clear: both;
            }

            #page-content {
                padding: 40px 0;
            }

            @media (min-width: 550px) {
                #page-content {
                padding: 80px 0;
                }
            }

            @media (min-width: 1000px) {
                #page-content {
                padding: 100px 0;
                }
            }
        `}</style>
    </Head>
);


export default SkyHead;

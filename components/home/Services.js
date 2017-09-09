const Services = () => (
    <section className="root">
        <div className="container">
            <h1 className="section-title">What can I do for you ?</h1>
            <ul>
                <li>UI Design</li>
                <li>UX Design</li>
                <li>Web Development</li>
                <li>Mobile Development</li>
            </ul>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            .root {
                color: white;
                background-color: #3c999c;
            }
            h1 {
                text-align: center;
                margin-bottom: 5rem;
            }

            ul {
                list-style: none;
                text-align: center;
                margin-bottom: 0;
                font-size: 1.8rem;
            }

            ul li:not(:last-child) {
                margin-bottom: 4rem;
            }

            p {
                text-align: center;
            }
        `}</style>
    </section>
);

export default Services;
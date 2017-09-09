const AboutMe = () => (
    <section className="root">
        <div className="container">
            <h1 className="section-title">Who am I ?</h1>
            <p>Hello, my name is <strong>Holy-Elie Scaïde</strong> and I'm your Website/App Designer and Developer</p>
        </div>
        {/*language=CSS*/}
        <style jsx>{`
            h1 {
                text-align: center;
            }

            p {
                text-align: center;
            }
        `}</style>
    </section>
);

export default AboutMe;
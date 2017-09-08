import Link from 'next/link';

const navHeight = '56px';

const Nav = () => (
    <nav className="cf">
        <div className="container">
            <a className="menu mdi mdi-menu mdi-24 dn-m"></a>
            <div className="logo"></div>
            <ul className="nav">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li>
                    <ul className="social-links">
                        <li><a href="#" className="mdi mdi-facebook"></a></li>
                        <li><a href="#" className="mdi mdi-github-circle"></a></li>
                    </ul>
                </li>
            </ul>
        </div>
        {/*language=SCSS*/}
        <style jsx>{`
          nav {
            height: ${navHeight};
            border-bottom: 4px solid #3c999c;
          }

          .menu {
            height: ${navHeight};
            line-height: ${navHeight};
          }

          .logo {
            position: absolute;
          }


          .nav {
            display: none;
          }

          @media (min-width: 750px) {
              .nav {
                display: block;
                float: right;
                list-style: none;
                margin: 0;
                padding: 0;
              }

              .menu {
                display: none;
              }

              .nav li {
                display: inline-block;
                margin: 0;
                vertical-align: middle;
              }
              .nav li a {
                display: block;
                color:#3c999c;
                height: ${navHeight};
                line-height: ${navHeight};
                text-decoration: none;
                text-transform: uppercase;
              }

              .nav > li > a {
              vertical-align: middle;
                padding: 0 1.2rem;
                font-weight: 700;
              }
          }

          .social-links {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          
          .social-links a {
            font-size: 24px;
            padding: 0 .8rem;
          }

        `}</style>
    </nav>
);

export default Nav;
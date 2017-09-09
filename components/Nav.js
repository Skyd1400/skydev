import Link from 'next/link';

const navHeight = 56;

const Nav = () => (
    <nav className="cf">
        <div className="container">
            <a className="menu mdi mdi-menu mdi-24 dn-m"></a>
            <div className="logo">
                <Link href="/"><a><img src="./static/img/logo.png"/></a></Link>
            </div>
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
            height: ${navHeight}px;
            border-bottom: 4px solid #4dc9cc;
          }

          .menu {
            float:left;
            height: ${navHeight}px;
            font-size: 3rem;
            line-height: ${navHeight}px;
          }

          .logo {
          position: absolute;
          top: 8px;
          left: 50%;
            width: auto;
            margin: 0 auto;
            margin-left: -17.94165px;
            text-align: center;
          }

          .logo img {
            width: auto;
            height: ${navHeight - 16}px;
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

              .logo {
                position:static;
                float:left;
                margin-top: 8px;
              }

              .nav li {
                display: inline-block;
                margin: 0;
                vertical-align: middle;
              }
              .nav li a {
                display: block;
                color:#3c999c;
                height: ${navHeight}px;
                line-height: ${navHeight}px;
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
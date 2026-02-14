import { FC } from 'react';
import { useNavbarScroll } from '@/hooks';
import './header.css';

const Header: FC = () => {
  const { isScrolled } = useNavbarScroll(100);

  return (
    <header id="home">
      <nav
        className={`navbar navbar-expand-md fixed-top navbar-dark ${isScrolled ? 'scrolling' : ''}`}
        style={{ backgroundColor: isScrolled ? 'black' : 'transparent' }}
      >
        <div className="container-sm">
          <a className="navbar-brand" href="#home">
            HOME
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#aboutme"
                >
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  EXPERIENCE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  EDUCATION
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-intro">
        <h1>Federico G. López</h1>
        <div className="header-intro-roles">
          <p>Senior Frontend Developer</p>
        </div>
        <div className="wrapper">
          <ul>
            <li className="github">
              <a
                href="https://github.com/fedelopez89"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true">
                  {' '}
                </i>
              </a>
            </li>
            <li className="linkedin">
              <a
                href="https://www.linkedin.com/in/federicoglopez/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin fa-2x" aria-hidden="true">
                  {' '}
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

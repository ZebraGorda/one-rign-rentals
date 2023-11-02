"use client";
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
 

  return (
   
    <header id="header">
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li><Link href="/"><i className="fa fa-sign-in"></i> Login</Link></li>
                <li><Link href="/"><i className="fa fa-pencil-square-o"></i> Register</Link></li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span><i className="fa fa-globe"></i> English</span>
                    <ul>
                      <li><Link href="#">Deutsch</Link></li>
                      <li><Link href="#">Español</Link></li>
                      <li><Link href="#">Français</Link></li>
                      <li><Link href="#">Português</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="nav-section">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <Link href="/" className="nav-logo">
        <Image src="/assests/images/logo.png" alt="Logo" width={256} height={256} />
</Link>
        {/* BEGIN SEARCH */}
        <div id="sb-search" className="sb-search">
          <form>
            <input className="sb-search-input" placeholder="Search..." type="text" name="search" id="search" />
            <input className="sb-search-submit" type="submit" />
            <i className="fa fa-search sb-icon-search"></i>
          </form>
        </div>
        {/* END SEARCH */}
        {/* BEGIN MAIN MENU */}
        <nav className="navbar">
          <button id="nav-mobile-btn"><i className="fa fa-bars"></i></button>
          <ul className="nav navbar-nav">
            <li><Link href="/Find-a-Rental">Find a Rental</Link></li>
            <li><Link href="/List-your-Rental">List your rental</Link></li>
            <li><Link href="/Regions">Regions</Link></li>
            <li><Link href="/Travel-Guides">Travel Guides</Link></li>
            <li><Link href="/About-Us">About Us</Link></li>
            <li><Link href="/Regions">Regions</Link></li>
          </ul>
        </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;

    
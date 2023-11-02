const TopBar = () => {
  return (
   
    <div id="top-bar">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <ul id="top-buttons">
            <li>
              <Link href="/login">
                <a><i className="fa fa-sign-in"></i> Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a><i className="fa fa-pencil-square-o"></i> Register</a>
              </Link>
            </li>
            <li className="divider"></li>
            <li>
              <div className="language-switcher">
                <span><i className="fa fa-globe"></i> English</span>
                <ul>
                  <li><a href="#">Deutsch</a></li>
                  <li><a href="#">Español</a></li>
                  <li><a href="#">Français</a></li>
                  <li><a href="#">Português</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

);
  }
export default TopBar;

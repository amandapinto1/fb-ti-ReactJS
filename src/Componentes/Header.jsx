import Logo from   '../imagens/logo-colorida-timeti9.png'
function Header() {
    return (
      <>
      <div className="logo-container">
      <a href="#" target="_blank">
        <img className="logo" src={Logo} alt="Logo Farias Brito" />
      </a>
    </div>
    <div className="ontop" id="myHeader">
      <div className="progress-bar"></div>
    </div>
      </>
    );
  }
  
  export default Header;
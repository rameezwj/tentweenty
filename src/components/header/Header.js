import logo from './logo.svg';
import mode_icon_black from './mode_icon_black.svg';
import mode_icon_white from './mode_icon_white.svg';

function Header(props) {
  // console.log();
  const stylesHeader = {
  };
  
  return (
    <div className="header_wrapper relative widthb90 pt2 pb3 mx-auto df fdc aic">
      <div className="absolute leftb df lft">
        <a href="javascript: void(0)" className="hover-this icon_hamburg mt1 df aic">
          <div>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <span className="fs1-2 bold ttu ml1"> Menu </span>
        </a>
        <a href="javascript: void(0)" className="hover-this icon_mode mt1 ml2 df aic" onClick={()=>props.changeTheme()}>
          <img src={mode_icon_black} className="mode_icon_black" />
          <img src={mode_icon_white} className="mode_icon_white" />
        </a>
      </div>
      
      <img src={logo} className="widthb15" />

      <div className="header_navs mt3 df jcc">
        <a className="hover-this"> News </a>
        <a className="hover-this"> Opinion </a>
        <a className="hover-this"> Life </a>
        <a className="hover-this"> Business </a>
        <a className="hover-this"> Megazine </a>
        <a className="hover-this"> Newsletter </a>
      </div>
    </div>
  );
}

export default Header;
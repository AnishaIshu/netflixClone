import "./StyleSheet.css"
import { BsGlobe2 } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
  return(
    <nav className="navBar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
          
          
          <div className="navBtn">
          <button className="btnOne"><BsGlobe2 className="iconG" />English <IoMdArrowDropdown className="iconD" /></button>
             <button className="btnTwo">Sign in</button>
          </div>
    </nav>
  )
}

export default Header;
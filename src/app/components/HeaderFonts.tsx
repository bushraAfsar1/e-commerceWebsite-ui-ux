import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser , faHeart, faBars} from '@fortawesome/free-solid-svg-icons';


const HeaderIcons = () => (
  <div className="fontSec">
    <FontAwesomeIcon className='font' icon={faSearch} size="lg" />
    <FontAwesomeIcon className='font' icon={faUser} size="lg" />
    <FontAwesomeIcon className='font' icon={faShoppingCart} size="lg" />
    <FontAwesomeIcon className='font' icon={faHeart} size="lg" />

  </div>
);

export default HeaderIcons;
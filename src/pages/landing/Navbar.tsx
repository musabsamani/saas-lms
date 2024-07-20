import { Link } from "react-router-dom";
import Button from "../../components/common/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className={`w-full text-white relative z-10`}>
      <div className="h-full container flex items-center justify-between mx-auto">
        <div className="logo w-1/3 relative">
          <span className="text-[#49BBBD]"></span>
          <span className="bold text-3xl tracking-widest">TOTC</span>
        </div>
        <span className="block lg:hidden text-4xl">
          <FontAwesomeIcon icon={faBars} />
        </span>
        <ul className="hidden lg:flex capitalize w-2/3 list-none items-center text-center h-full">
          <li className="flex-auto">
            <Link to="/">Home</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">About</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">courses</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">carreers</Link>
          </li>
          <li className="flex-auto">
            <Link to="/">blog</Link>
          </li>
          <li className="flex-auto font-medium">
            <Button type="primary1">login</Button>
          </li>
          <li className="flex-auto font-medium">
            <Button type="primary2">sign up</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

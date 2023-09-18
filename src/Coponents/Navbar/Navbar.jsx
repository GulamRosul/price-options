import { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/Fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/contact", name: "Contact", id: 3 },
    { path: "/products", name: "Products", id: 5 },
  ];

  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <AiOutlineClose></AiOutlineClose> : <FiMenu></FiMenu>}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

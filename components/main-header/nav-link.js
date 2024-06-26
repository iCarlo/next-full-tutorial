"use client";

import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      className={`${classes.link} ${path.startsWith(href) && classes.active}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;

import React from "react";
// import Image from "next/image";
import Link from "next/link";
import Logo from "../../components/logo/Logo";

const Navbar = () => {
  return (
    <div>
      <div >
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div>
        <Link href="/about">About</Link>
      </div>

      <div>
        <Link href="/contact">Contact</Link>
      </div>

      <div>
        <Link href="/gallery">Gallery</Link>
      </div>
    </div>
  );
};

export default Navbar;

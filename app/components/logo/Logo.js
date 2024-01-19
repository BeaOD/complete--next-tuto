import React from 'react'
import Image from "next/image";
// import Link from "next/link";
import LogoMain from "../../../public/images/bwoman.jpg";

const Logo = () => {
  return (
    <div>
      <div className="w-[70px] h-[70px]">
      
          <Image src={LogoMain} alt="logo" />
      
      </div>
    </div>
  );
}

export default Logo

import Link from 'next/link';
import React from 'react'
import Image from "next/image";
import LogoMain from "../public/images/bwoman.jpg";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-row ">
        <h5 className="text-[60px]">Page Not Found </h5>
        <div className="w-[450px] h-[200px] rounded-md ">
          <Link href="/">
            <Image src={LogoMain} alt="404" />
          </Link>
        </div>
        <p>Click to go to Homepage</p>
      </div>
    </div>
  );
}

export default NotFound 

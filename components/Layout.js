import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {children}

      <div className="font-bold text-center text-sm md:text-lg  ">
        <h1>Create by Muhammad Fajri</h1>
        <p>
          <a
            href={"https://github.com/FajriSiiv"}
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            Github : FajriSiiv
          </a>
        </p>
      </div>
    </>
  );
};

export default Layout;

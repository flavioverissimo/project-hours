import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-mainColor">
      <div className="container mx-auto md:flex md:justify-between">
        <Link href="/" className="mb-6 md:mb-0">
          <a>
            <img src="logo.png" className="mr-3 h-16" alt="Project Hours" />
          </a>
        </Link>

        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-mainColorLight">
              Follow us
            </h2>
            <ul className="text-mainColorMedium">
              <li className="mb-4">
                <Link href="">
                  <a>Linkedin</a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#">
                  <a>Github</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-mainColorLight">
              Legal
            </h2>
            <ul className="text-mainColorMedium">
              <li className="mb-4">
                <Link href="#">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Terms &amp; Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="container mx-auto my-6 border-mainColorMedium sm:mx-auto lg:my-8" />

      <div className="container mx-auto text-center">
        <p className="text-sm text-mainColorLight">
          © 2022 Project Hours. All Rights Reserved.
        </p>
        <p className="pt-4 text-sm text-mainColorMedium">
          Desenvolvido por: Flavio Veríssimo Lima
        </p>
      </div>
    </footer>
  );
};

export default Footer;

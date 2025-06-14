import React from "react";
import whatsAppImg from "../assets/whatsapp-img.svg";
import messengerImg from "../assets/messenger-img.svg";
import facebookImg from "../assets/facebook-img.svg";
import linkdlnImg from "../assets/linkdln-img.svg";
import twitterImg from "../assets/twitter-img.svg";
import instagramImg from "../assets/instagram-img.svg";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] py-12 pt-85  relative px-6">
      <NewsLetter />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png"
                alt="Naxa Logo"
                width={120}
              />
            </div>

            <div className="space-y-2 text-gray-400 text-xs">
              <p className="font-semibold text-sm text-black">Naxa Pvt. Ltd.</p>
              <p>Omkareshwor Mandir Road,</p>
              <p>Shantinagar, Kathmandu, Nepal</p>

              <div className="pt-2 space-y-1">
                <p>+014-516543, +977-980237266,</p>
                <p>+977-9802955093</p>
                <p className="mt-4">info@naxa.com.np</p>
                <p className="mt-4">business@naxa.com.np</p>
              </div>
            </div>

            <div className="pt-4 w-full flex flex-col items-center md:items-start">
              <p className="font-md text-gray-800 mb-3">Chat With Us Now!</p>
              <div className="flex space-x-3 justify-center md:justify-start">
                <div className="w-12 h-12 bg-[#117F4B] rounded-full flex items-center justify-center cursor-pointer hover:bg-green-800 transition-colors">
                  <img src={whatsAppImg} alt="WhatsApp" width={25} />
                </div>
                <div className="w-12 h-12 bg-[#0160CC] rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                  <img src={messengerImg} alt="Messenger" width={25} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="text-sm">
              <h3 className="font-medium text-sm mb-3">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <p className="text-black font-medium">Portfolio</p>
                </li>
                <li>
                  <p className="hover:text-[#FFDC1B] transition-colors font-extralight cursor-pointer">
                    General
                  </p>
                </li>
                <li>
                  <p className="hover:text-[#FFDC1B] transition-colors font-extralight cursor-pointer">
                    International
                  </p>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              {" "}
              <div>
                <h3 className="font-medium text-sm mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-gray-400  transition-colors  font-extralight">
                  <li>
                    <p className="hover:text-[#FFDC1B] transition-colors cursor-pointer">
                      About us
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-[#FFDC1B] transition-colors cursor-pointer">
                      Team
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-[#FFDC1B] transition-colors cursor-pointer">
                      Work with us
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-[#FFDC1B] transition-colors cursor-pointer">
                      Awards & Achievements
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-[#FFDC1B] transition-colors cursor-pointer">
                      Media Kit
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sm mb-4">Events & Media</h3>
                <ul className="space-y-2 text-sm text-gray-400  transition-colors  font-extralight">
                  <li>
                    <p className="hover:text-[#FFDC1B] transition-colors">
                      Events
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-[#FFDC1B] transition-colors">
                      Media
                    </p>
                  </li>
                  <li>
                    <p className="hover:text-gray-800 transition-colors">
                      Publications
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-6">
                  <h3 className="font-medium text-sm mb-4">Blog</h3>
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-4">Contact</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between  gap-4">
          <div className="flex gap-4 justify-center">
            <img
              src={facebookImg}
              alt="Facebook"
              width={8}
              className="cursor-pointer"
            />
            <img
              src={linkdlnImg}
              alt="LinkedIn"
              width={13}
              className="cursor-pointer"
            />
            <img
              src={twitterImg}
              alt="Twitter"
              width={13}
              className="cursor-pointer"
            />
            <img
              src={instagramImg}
              alt="Instagram"
              width={13}
              className="cursor-pointer"
            />
          </div>
          <p className="text-gray-400 text-xs text-center md:text-right font-extralight">
            © NAXA 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

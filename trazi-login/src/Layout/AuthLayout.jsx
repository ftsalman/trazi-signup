import React from "react";
import { Button } from "../components/ui/button/Button";
import { FaBullhorn } from "react-icons/fa";

import { List } from "../components/ui/List";
import {
  IconEmail,
  IconLightningBolt,
  IconLockClosed,
  IconMeta,
} from "../assets/icons/InterfaceIcons";

const AuthLayout = ({ children }) => {
  const features = [
    {
      title: "Automated Workflows",
      desc: "Instant replies, order handling, and appointment booking fully automated on WhatsApp.",
      icon: "⚡ ",
    },
    {
      title: "Team Collaboration",
      desc: "Manage all chats from one number with multiple agents using Team Inbox.",
      icon: "👥  ",
    },
    {
      title: "Secure & Reliable",
      desc: "Enterprise-grade security keeps your customer data and conversations safe.",
      icon: "🔐",
    },
    {
      title: " WhatsApp Commerce",
      desc: "List products, browse categories, add to cart, and place orders without leaving WhatsApp",
      icon: "🛒",
    },
    {
      title: "Bulk Messaging",
      desc: "Send thousands of messages safely with smart, compliant broadcast tools.",
      icon: " 📢 ",
    },
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50">
      {/* Left Section - Animated Background */}
      <div
        className="hidden relative md:flex flex-col overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/imgs/auth-2.jpeg')" }}
      >
        {/* Logo */}
        {/* <div className="absolute top-6 left-6 z-20">
          <img
            src="/imgs/trazi-logo.png"
            alt="Trazi Logo"
            className="h-16 w-auto"
          />
        </div> */}

        {/* Gradient Overlay (optional) */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-50/10 via-gray-200/0 to-gray-300/40 z-0"></div> */}

        {/* Dotted Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30 z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="white" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Animated SVG Circles */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25 z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="0%"
            cy="2%"
            r="250"
            stroke="#FACC15"
            strokeWidth="0.5"
            fill="none"
            className="circle-animation-1"
          />
          <circle
            cx="50%"
            cy="50%"
            r="250"
            stroke="#60A5FA"
            strokeWidth="0.5"
            fill="none"
            className="circle-animation-2"
          />
          <circle
            cx="50%"
            cy="50%"
            r="150"
            stroke="#FFDE21"
            strokeWidth="0.5"
            fill="none"
            className="circle-animation-3"
          />
          <circle
            cx="110%"
            cy="20%"
            r="250"
            stroke="#FACC15"
            strokeWidth="0.5"
            fill="none"
            className="circle-animation-4"
          />
        </svg>

        {/* Floating Circles + Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-7 left-7 w-32 h-32 bg-white rounded-full opacity-80 circle-animation-1"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full opacity-30 circle-animation-2"></div>
          <div className="absolute bottom-10 left-20 w-8 h-8 bg-yellow-300 rounded-full opacity-50 animate-bubble-1"></div>
          <div className="absolute top-10 right-20 w-8 h-8 bg-yellow-300 rounded-full opacity-50 animate-bubble-1"></div>
          <div className="absolute top-20 right-40 w-6 h-6 bg-yellow-100 rounded-full opacity-40 animate-bubble-2"></div>
          <div className="absolute bottom-20 left-40 w-6 h-6 bg-yellow-100 rounded-full opacity-40 animate-bubble-2"></div>
        </div>

        {/* Content on Left */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-black p-10 flex-grow">
          <div className="max-w-md mt-[-5rem]">
            <div className=" flex items-center  mb-2 justify-center">
              <img
                src="/imgs/trazi-logo-secondary.png"
                alt="Trazi Logo"
                className="h-20 w-auto"
              />
            </div>
            {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Trazi
            </h1> */}

            <p className="text-sm mb-5 text-gray-900 opacity-90">
              Simplify your business with WhatsApp automation fast, secure and
              easy to use.
            </p>

            {/* Feature List */}
            <List
              className="flex flex-col gap-3 items-start"
              uniqueKey="title"
              data={features}
              render={(item) => (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-300 hover:scale-105 cursor-pointer transition-all rounded-full flex items-center justify-center shadow-md text-lg">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h2 className="text-gray-950 text-md font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-[12px] text-gray-700">{item.desc}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* Partner with section (BOTTOM FIXED) */}
        <div className="absolute bottom-[1rem] left-0 right-0 px-2 flex items-center  justify-between gap-2 z-10">
          <div className=" relative flex items-center justify-center gap-1 px-4">
            <span className=" mt-4.5 text-black text-md font-semibold">Partner with</span>
            <img
              src="/imgs/logo_flowbee.png"
              alt="Flowbee Logo"
              className="h-[2.9rem] w-auto object-contain"
            />
          </div>
          <Button
            variant=" tertiary"
            className="   border-none shadow-none  mt-1 "
          >
            <IconMeta size="26" color="#0000FF" />
            MetaTechProvider
          </Button>
        </div>
      </div>

      {/* Right Section - Form Content */}
      <div className="flex flex-col  justify-between bg-gray-100  py-2 px-6 md:px-4 relative">
        {/* Main Content */}
        <div className="flex-grow flex items-center mt-2 justify-center">
          <div className="w-full max-w-md">{children}</div>
        </div>

        {/* Footer */}
        <div className="py-4 flex items-center justify-between text-sm text-gray-600 ">
          <a
            href="#"
            className="hover:underline hover:text-gray-800 transition-colors"
          >
            Terms & Conditions
          </a>
          <div className="flex items-center">
            <span>© 2024. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

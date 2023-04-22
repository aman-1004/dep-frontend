import React from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../LoginContext";
import { useContext } from "react";
import ProfileAvatar from "./ProfileAvatar";
import NotificationBar from "./NotificationBar";

export default function Navbar() {
  const user = useContext(LoginContext);

  return (
    <div className="bg-gray-200 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Name + Logo */}
        <div className="flex">
          <img className="h-8 mr-3" src="http://www.iitrpr.ac.in/sites/default/files/image.jpg" alt="IIT Ropar Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">LTC Portal</span>
        </div>


        {/* Small Screen */}
        <div className="flex items-center lg:order-2">
          <NotificationBar />
          <ProfileAvatar />
        </div>

        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
          <div className="flex flex-col font-medium p-4 lg:p-0 mt-4 rounded-lg bg-gray-200 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-gray-200">
            {user.isApplicant ? (
              <>
                <Link to={"/applicant/new"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">New LTC Application </Link>
                <Link to={"/applicant/live"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Live LTC Application </Link>
                <Link to={"/applicant/newTa"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">New TA Application </Link>
                <Link to={"/applicant/liveTa"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Live TA Application </Link>
              </>
            ) : (
              <>
                <Link to={"/pending"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Pending LTC Application </Link>
                <Link to={"/pendingTa"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">Pending TA Application </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

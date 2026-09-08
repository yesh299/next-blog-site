import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <div className="flex items-stretch min-h-screen w-full">
      
      <ToastContainer theme="dark" />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 min-h-screen">

        {/* Admin Header */}
        <div className="h-[54px] shrink-0 flex items-center justify-between w-full px-4 sm:px-8 lg:px-12 border-b border-black">
          <h3 className="font-medium">
            Admin Panel
          </h3>

          <Image
            src={assets.profile_icon}
            width={40}
            height={40}
            alt="Profile"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>

        {/* Page Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>

      </div>
    </div>
  );
}
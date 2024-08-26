import React from "react";
import Sidebar from "@/Components/Sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-full flex flex-row gap-0">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;

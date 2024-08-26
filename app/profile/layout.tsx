import React from "react";
import ProfileSidebar from "@/Components/Profilesidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-row gap-0 h-full">
      <ProfileSidebar />
      {children}
    </div>
  );
};

export default Layout;

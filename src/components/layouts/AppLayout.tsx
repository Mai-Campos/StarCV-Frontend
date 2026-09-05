import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-(--color-background) text-(--color-text)">
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />

      <div className="min-h-screen md:ml-64">
        <Header setIsSideBarOpen={setIsSideBarOpen} />

        <main className="px-4 py-6 sm:px-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;

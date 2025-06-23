import React, { useState } from 'react';

const MinimalResponsiveLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className={`hidden lg:block fixed top-0 left-0 h-full w-52 bg-white shadow transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="p-4 space-y-3">
          <a href="#" className="block text-sm hover:text-green-500">Dashboard</a>
          <a href="#" className="block text-sm hover:text-green-500">Users</a>
          <a href="#" className="block text-sm hover:text-green-500">Settings</a>
        </nav>
      </aside>

      <div className="flex-1 lg:ml-0">
        <header className="flex justify-between items-center px-4 py-3 bg-white shadow relative">
          <button onClick={() => setShowSidebar(!showSidebar)} className="hidden lg:block text-gray-600">
            ☰
          </button>

          <h1 className="text-lg font-semibold text-green-600">My App</h1>

          <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="lg:hidden text-gray-600">
            ☰
          </button>

          {showMobileMenu && (
            <div className="absolute right-4 top-12 bg-white shadow rounded-md w-40 py-2 z-50">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Dashboard</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Users</a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Settings</a>
            </div>
          )}
        </header>

        <main className="p-4 mt-4">
          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="text-sm text-gray-600">This is a clean responsive layout with compact navigation behavior.</p>
        </main>
      </div>
    </div>
  );
};

export default MinimalResponsiveLayout;

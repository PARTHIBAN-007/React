import React, { useState } from "react";

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-600 hover:text-indigo-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "✕" : "☰"}
          </button>
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <div className="space-x-4">
          <button className="text-sm font-medium text-gray-600 hover:text-indigo-600">Profile</button>
          <button className="text-sm font-medium text-gray-600 hover:text-indigo-600">Logout</button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-white shadow-md p-6 w-64 md:block fixed md:static inset-y-0 left-0 transform md:translate-x-0 transition-transform duration-200 ease-in-out z-20 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Menu</h2>
          <nav className="space-y-3">
            <a href="#" className="block hover:text-indigo-600">Dashboard</a>
            <a href="#" className="block hover:text-indigo-600">Users</a>
            <a href="#" className="block hover:text-indigo-600">Settings</a>
            <a href="#" className="block hover:text-indigo-600">Reports</a>
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-30 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 container  space-y-8 mx-4">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-600">Users</h3>
                <p className="text-2xl font-bold text-gray-900">1,250</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
                <p className="text-2xl font-bold text-gray-900">$34,000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-600">Sessions</h3>
                <p className="text-2xl font-bold text-gray-900">8,192</p>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Record</h2>
            <form className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500">
                  <option>User</option>
                  <option>Admin</option>
                  <option>Editor</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
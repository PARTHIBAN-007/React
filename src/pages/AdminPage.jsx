import React from 'react';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <nav className="space-x-4">
            <a href="#" className="px-4 py-2 hover:bg-green-400 transition rounded-2xl">Profile</a>
            <a href="#" className="px-4 py-2 hover:bg-green-400 transition rounded-2xl">Logout</a>
          </nav>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white shadow-lg min-h-screen px-6 py-8 space-y-4">
          <a className="block text-gray-700 hover:text-green-500">Dashboard</a>
          <a className="block text-gray-700 hover:text-green-500">Users</a>
          <a className="block text-gray-700 hover:text-green-500">Settings</a>
          <a className="block text-gray-700 hover:text-green-500">Support</a>
        </aside>

        <main className="flex-1 p-10 space-y-10">
          <h2 className="text-2xl font-bold">Statistics</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Users', value: '1234' },
              { label: 'Revenue', value: '$2234' },
              { label: 'Sessions', value: '124' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white shadow-md px-6 py-6 rounded-lg ">
                <h3 className="text-gray-700">{stat.label}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <form className="bg-white rounded-2xl shadow-md space-y-6 p-6 w-full max-w-xl">
              <h2 className="text-2xl font-bold text-center">Add Data</h2>

              {['Product', 'Price', 'Quantity'].map((field) => (
                <div key={field}>
                  <label className="block text-sm text-gray-600 mb-1">{field}</label>
                  <input
                    type="text"
                    placeholder={field}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              ))}

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;

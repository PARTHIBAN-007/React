import React from "react";

const Portfolio = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p className="text-sm text-gray-600">Frontend Developer</p>
      </header>

      {/* About Section */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-2">About Me</h2>
        <p>
          I’m a passionate frontend developer with experience in React, Tailwind
          CSS, and building responsive websites. I love transforming ideas into
          pixel-perfect interfaces.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-6 bg-white shadow">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-lg">Portfolio Website</h3>
            <p>A personal portfolio to showcase my work and skills.</p>
          </div>
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="font-bold text-lg">Weather App</h3>
            <p>A React app that fetches and displays real-time weather data.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>Email: johndoe@example.com</p>
        <p>LinkedIn: linkedin.com/in/johndoe</p>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-500">
        © 2025 John Doe. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;

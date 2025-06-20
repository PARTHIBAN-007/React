import React from "react";

export default function StyledPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-800 p-6 text-white">
      <header className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to the Styled Page</h1>
        <p className="text-xl text-indigo-100">
          This is a beautiful React + Tailwind CSS page with styled components and responsive layout.
        </p>
      </header>

      <main className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <section className="bg-white text-gray-900 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Feature One</h2>
          <p>
            Tailwind CSS makes it quick and easy to build attractive UIs with utility-first styling.
          </p>
        </section>

        <section className="bg-white text-gray-900 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Feature Two</h2>
          <p>
            React provides the building blocks to develop dynamic and interactive interfaces.
          </p>
        </section>

        <section className="bg-white text-gray-900 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Feature Three</h2>
          <p>
            Combine both tools to deliver sleek and responsive web applications quickly.
          </p>
        </section>

        <section className="bg-white text-gray-900 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Feature Four</h2>
          <p>
            Fully customizable components with consistent spacing, colors, and typography.
          </p>
        </section>
      </main>

      <footer className="max-w-4xl mx-auto text-center mt-12 text-indigo-200">
        <p>© 2025 Styled Page. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

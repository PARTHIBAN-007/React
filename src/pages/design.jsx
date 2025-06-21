import React from "react";

export default function DesignPage() {
  return (
    <div className=" h-screen bg-green-400">
      <header className=" max-w-4xl mx-auto py-12 ">
        <h1 className="text-5xl font-extrabold mb-4">Header Class</h1>
        <p className="text-xl text-black-400">Desciption about the Header class</p>

      </header>
      <main className="max-w-4xl mx-auto grid grid-cols-2 gap-6">
        <section className="bg-white text-gray-600 rounded-2xl shadow-lg m-6  p-6">
            <h2 className="text-2xl font-bold mb-2">
                Slide 1
            </h2>
            <p>
                Descripiton about slide 1
            </p>
        </section>
        <section className="bg-white text-gray-600 rounded-2xl shadow-lg m-6 p-6">
            <h2 className="text-2xl font-bold mb-2">
                Slide 2
            </h2>
            <p>
                Descripiton about slide 2
            </p>
        </section>
        <section className="bg-white text-gray-600 rounded-2xl shadow-lg m-6 p-6">
            <h2 className="text-2xl font-bold mb-2">
                Slide 3
            </h2>
            <p>
                Descripiton about slide 3
            </p>
        </section>
        <section className="bg-white text-gray-600 rounded-2xl shadow-lg m-6 p-6">
            <h2 className="text-2xl font-bold mb-2">
                Slide 4
            </h2>
            <p>
                Descripiton about slide 4
            </p>
        </section>
        
      </main>
      <footer className="max-w-4xl mx-auto mt-10 text-black-200">
        <p>2025 Styled Page.Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

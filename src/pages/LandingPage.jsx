import React from 'react'

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-white text-gray-800'>
        <header className=' bg-white shadow-md p-6 '>
            <div className='flex justify-between mx-auto items-center'>
                <h1 className='text-2xl font-bold'>Title Content</h1>
                <nav className='space-x-4'>
                    <a hrfet = "#" className='hover:bg-green-300 rounded-2xl px-4 py-2 transition' >Home</a>
                    <a hrfet = "#" className='hover:bg-green-300 rounded-2xl px-4 py-2 transition'>Dashboard</a>
                    <a hrfet = "#" className='hover:bg-green-300 rounded-2xl px-4 py-2 transition'>Blog</a>
                    <a hrfet = "#" className='hover:bg-green-300 rounded-2xl px-4 py-2 transition'>portfolio</a>
                </nav>
            </div>
        </header>
        <section className='py-20 bg-green-300 text-white '>
            <div className='container mx-auto  text-center '>
                <h2 className='text-4xl font-bold mb-4'>Master Content</h2>
                <p className='mb-8 max-w-xl mx-auto'>Description about the content</p>
                <button className='bg-white text-green-400 rounded-full shadow-md px-6 py-2 hover:shadow-xl bg-green-200'>Get Started</button>
            </div>
        </section>

        <section className='py-20'>
            <div className='container mx-auto'>
                <h3 className='text-3xl font-bold mb-8 text-center'>Explore Page Template</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {[
              { title: "Landing Page", desc: "Beautiful hero sections and CTAs." },
              { title: "Login Page", desc: "Styled forms and validation UX." },
              { title: "Dashboard", desc: "Cards, charts, and navigation menus." },
              { title: "Product Page", desc: "E-commerce layouts and image galleries." },
              { title: "Blog Post", desc: "Typography and article formatting." },
              { title: "Portfolio", desc: "Grid displays with hover effects." },
            ].map((page,i)=> (
                <div key = {i} className='rounded-2xl shadow-md p-6 hover:shadow-2xl transition'>
                    <h4 className='text-xl font-semibold mb-2'>{page.title}</h4>
                    <p className=' text-sm text-gray-600'>{page.desc}</p>
                </div>
            ))}
                </div>
            </div>
        </section>
        <footer className='border-t border-green-400 mt-8 py-6 text-center text-sm text-gray-500'>
            @2025 Footer Section.ALl Rights Reserved
        </footer>
    </div>
  )
}

export default LandingPage
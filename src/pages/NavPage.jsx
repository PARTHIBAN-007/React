import React,{useState} from 'react'

const NavPage = () => {
    const [shownavbar,setShownavbar] = useState(false);
    const [showmobilemenu,setMobilemenu] = useState(false);

  return (
<div className="min-h-screen"> 
       

        <aside className={`hidden lg:block fixed top-0 left-0 z-50 mt-30 h-full w-52 bg-white shadow transition-transform duration-300 ${shownavbar? 'translate-x-0':'-translate-x-full'}`}>
            <nav className='p-4 space-y-3'>
                <a href='#' className='block text-sm hover:text-green-500'>Dashboard</a>
                <a href='#' className='block text-sm hover:text-green-500'>Users</a>
                <a href='#' className='block text-sm hover:text-green-500'>Settings</a>
            </nav>
        </aside>

        <div className='m-0'>
            <header className='flex justify-between items-center px-4 py-3 bg-white shadow relative'>
                <button onClick={()=>setShownavbar(!shownavbar)} className='hidden lg:block text-gray-600'>
                    ☰
                </button>
                <h1 className='text-lg font-semibold text-green-600'>My App</h1>
                <button onClick={() => setMobilemenu(!showmobilemenu)} className="lg:hidden text-gray-600">
                    ☰
                </button>

                {showmobilemenu && (
                    <div className='absolute right-4 top-12 bg-white shadow-xl rounded-2xl w-40 py-2 z-50 transition-transform duration-300'>
                        <a href ="#" className='block px-4 py-2 text-sm hover:bg-gray-100'>DashBoard</a>
                        <a href ="#" className='block px-4 py-2 text-sm hover:bg-gray-100'>Users</a>
                        <a href ="#" className='block px-4 py-2 text-sm hover:bg-gray-100'>Settings</a>
                    </div>
                )}
            </header>

            <main className='p-4 mt-4'>
                <h2 className='text-xl font-semibold mb-2'>Welcome</h2>
                <p className='text-sm text-gray-600'>THis is a clean responsive content</p>
            </main>
        </div>
    </div> 

  )
}

export default NavPage
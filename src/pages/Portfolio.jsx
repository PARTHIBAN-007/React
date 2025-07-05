import React from 'react'

const PortfolioPage = () => {
  return (
    <div className='min-h0screen bg-white text-black'>
      <nav className='fixed top-0 w-full bg-white.20 backdrop-blur-md-2 border-b border-black-300'>
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-4'> 
            <div className='text-2xl font-bold bg-black bg-clip-text text-transparent'>Portfolio</div>
            <div className=' md:flex- space-x-2'>
              <a href ="#" className=' px-4  py-2 rounded-lg hover:bg-green-400 transition-colors'> Home</a>
              <a href ="#" className=' px-4  py-2 rounded-lg hover:bg-green-400 transition-colors'> About</a>
              <a href ="#" className=' px-4  py-2 rounded-lg hover:bg-green-400 transition-colors'> Skills</a>
              <a href ="#" className=' px-4  py-2 rounded-lg hover:bg-green-400 transition-colors'> Projects</a>
              <a href ="#" className=' px-4  py-2 rounded-lg hover:bg-green-400 transition-colors'> Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <section className='pt-24 pb-10 px-4 '>
        <div className='w-full mx-auto text-center'>
          <div className='mb-8'>
            <div className='w-32 h-32 mb-4 mx-auto flex rounded-full items-center justify-center text-4xl font-bold shadow-2xl transition-all hover:scale-110'>
              JD
            </div>
            <h1 className='text-5xl txt-grey-300 mb-4 bg-clip-text text-transparent bg-indigo-400'>
              John Doe
            </h1>
            <p className='text-xl text-grey-300 mb-4'>
              AI/ML
            </p>
            <div className='flex justify-center space-x-6'>
              <a className='p-3 bg-white rounded-full hover:bg-indigo-400 transition-all hover:scale-110'>Github</a>
              <a className='p-3 bg-white rounded-full hover:bg-indigo-400 transition-all hover:scale-110'>LinkedIn</a>
              <a className='p-3 bg-white rounded-full hover:bg-indigo-400 transition-all hover:scale-110'>Mail</a>
            </div>
          </div>
        </div>
      </section>


      <section className='py-16 px-4 '>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold bg-indigo-400  text-center bg-clip-text text-transparent mb-12 '>About Me</h2>
          <div className=' bg-white backdrop-blur-md rounded-2xl border border-black'>
            <p className="mt-6 text-lg text-black-300 leading-relaxed mb-6">I'm a Passionate Ml Engineer</p>
            <p className="text-lg text-black-300 leading-relaxed mb-6">Coding Expertise</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PortfolioPage
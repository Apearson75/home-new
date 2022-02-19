import React from 'react';

export default function Nav(){
    return(
        <div>
          <nav className='flex items-center bg-slate-300 dark:bg-slate-600 dark:text-white p-3 flex-wrap'>
             <a href='#' className='p-2 mr-4 inline-flex items-center'>
                <span className='text-xl font-bold tracking-wide'>Phoneguytech</span>
             </a>
             <div>
                <div>
                    <a href='#' className='button-seperate'>
                      <span>Home</span>  
                    </a>
                    <a href='#about' className='button-seperate'>
                      <span>About</span>  
                    </a>
                </div>
             </div> 
          </nav>  
        </div>
    )
}
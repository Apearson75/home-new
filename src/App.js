import Nav from "./components/Nav";

function App() {
  //useDarkMode();
  return (
    <div className='scroll-smooth'>
      <Nav/>
      <header>
        <div className='flex flex-col min-h-screen text-9xl text-center justify-center items-center font-bold bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-blue-800 dark:to-purple-800 text-white'>
          <h1 className='my-10 text-3xl md:text-6xl lg:text-9xl'>Hello World!! 👋</h1>
          <p className='text-base md:text-lg lg:text-xl font-normal'>Welcome to my website 👍</p>
        </div>
      </header>
      <section id="about">
        <div className='flex flex-col text-center justify-center items-center bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-700 dark:to-red-700 text-white text-3xl font-bold'>
          <h1 className='my-10 underline'>
            About:
          </h1>
          <div className='text-black'>
            <div className='backdrop-blur-sm bg-white/20 dark:bg-white/30 w-idk h-40 rounded-2xl my-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300'>
              <a href="https://github.com/Phoneguytech75/PhoneguyBot"><img src="https://cdn.discordapp.com/avatars/852619132138160148/3279a298c890dd33d900a1cd2bbcc7e7.webp?size=1024" width={128} height={128} className='
              rounded-xl float-left mx-5 my-4            
              '/></a>
              <h2 className='underline text-left'>
                PhoneguyBot: 
              </h2>  
              <p className='text-lg text-left my-4 break-words'>
                A Discord bot made with discord.py. It is capable of multiple things. It has <span className='bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-700 dark:to-orange-700 text-transparent'>30</span> different commands. 
              </p>          
            </div>
            
            <div className='backdrop-blur-sm bg-white/20 dark:bg-white/30 w-idk h-40 rounded-2xl my-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300'>
              <a href="https://github.com/Phoneguytech75/PhCode-2"><img src="https://github.com/Phoneguytech75/PhCode-2/blob/master/images/PhCode-Logo.png?raw=true" width={128} height={128} className='
              rounded-xl float-left mx-5 my-4
              '/></a>
              <h2 className='underline text-left'>
                PhCode: 
              </h2>
              <p className='text-lg text-left my-4 break-words'>
                A <span className='bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-700 dark:to-orange-700 text-transparent'>terrible</span> programming language made by me. Don't even try to use it. 
              </p> 
            </div> 
            
            <div className='backdrop-blur-sm bg-white/20 dark:bg-white/30 w-idk h-40 rounded-2xl my-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300'>
              
            </div>  
          </div>  
        </div>    
      </section>
    </div>
  );
}

export default App;

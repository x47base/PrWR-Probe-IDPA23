import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <nav className="fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 pl-4 pr-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a href="/" target="_self" className="text-2xl font-extrabold">Römische Wirtschaft</a>
          <div className="grid grid-cols-[auto,auto,auto] gap-4 justify-center items-center">
            <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-base">Home</a>
            <a href="/innenhandel" target="_self" className="opacity-70 hover:opacity-100 text-base">Innenhandel</a>
            <a href="/aussenhandel" target="_self" className="opacity-70 hover:opacity-100 text-base">Aussenhandel</a>
          </div>
        </nav>
      </header>

      <h1>Website zur Römischen Wirtschaft</h1>

      <section id="home-timeline" className=""> 
        <ol className="relative border-s border-gray-700 dark:border-gray-200">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-100 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                <p className="mb-4 text-base font-normal text-gray-400 dark:text-gray-500">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-900 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-600 dark:border-gray-400 dark:hover:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-200">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg></a>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-100 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                <p className="mb-4 text-base font-normal text-gray-400 dark:text-gray-500">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -start-1.5 border border-gray-900 dark:border-gray-100 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                <p className="mb-4 text-base font-normal text-gray-400 dark:text-gray-500">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            </li>
        </ol>
      </section>

      <footer className="flex flex-col justify-center items-center p-2">
        <div className="flex flex-wrap gap-3 font-normal justify-center items-center">
          <a href="/datenschutz">Datenschutz</a>
          <a href="/impressum">Impressum</a>
        </div>
        <span className="font-bold">&copy; I2a 2023</span>
      </footer>
    </main>
  )
}

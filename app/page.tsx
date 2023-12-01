import Image from 'next/image'
import "next"

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

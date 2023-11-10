import './header.css';

export default function Header({ }) {
    return (
        <header>
            <nav className="flex flex-row justify-between w-full p-2 pl-4 pr-4 bg-brand">
                <span id="navBrand" className="font-extrabold text-2xl text-white dark:text-black">Römische Wirtschaft</span>
                <div className="grid grid-cols-[auto,auto,auto] gap-4 justify-center items-center text-white font-semibold">
                    <a href="/" target="_self">Home</a>
                    <a href="#" target="_self">Lorem</a>
                    <a href="#" target="_self">Ipsum</a>
                    
                </div>
            </nav>
        </header>
    )
}
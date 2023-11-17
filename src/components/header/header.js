import './header.css';

export default function Header() {
    return (
        <header>
            <nav className="flex flex-row justify-between w-full p-2 pl-4 pr-4 bg-header dark:bg-dark-header">
                <span id="navBrand" className="font-extrabold text-2xl text-white dark:text-black">Römische Wirtschaft</span>
                <div className="grid grid-cols-[auto,auto,auto] gap-4 justify-center items-center text-white font-semibold">
                    <a href="/" target="_self" className="text-white font-semibold">Home</a>
                    <a href="/" target="_self" className="text-white font-semibold">Lorem</a>
                    <a href="/" target="_self" className="text-white font-semibold">
                        <span className="text-white font-semibold">Ipsum</span>
                        <div className="dropDownContainer">

                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
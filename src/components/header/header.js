import './header.css';

export default function Header() {
    return (
        <header>
            <nav className="flex flex-row justify-between w-full p-2 pl-4 pr-4 bg-header dark:bg-dark-header">
                <span id="navBrand" className="font-extrabold text-2xl text-textHeader dark:text-textDark">Römische Wirtschaft</span>
                <div className="grid grid-cols-[auto,auto,auto] gap-4 justify-center items-center text-textHeader dark:text-textDark font-semibold">
                    <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-textHeader dark:text-textDark font-semibold">Home</a>
                    <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-textHeader dark:text-textDark font-semibold">Lorem</a>
                    <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-textHeader dark:text-textDark font-semibold">Ipsum</a>
                </div>
            </nav>
        </header>
    )
}
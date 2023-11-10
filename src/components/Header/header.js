import './header.css';

export default function Header({ }) {
    return (
        <header>
            <nav className="flex flex-row justify-between w-full p-2 pl-4 pr-4 bg-brand">
                <span id="navBrand" className="font-extrabold text-2xl text-white dark:text-black">Römische Wirtschaft</span>
            </nav>
        </header>
    )
}
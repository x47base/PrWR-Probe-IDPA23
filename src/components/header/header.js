import './header.css';

/* React Components */
import { useState, useEffect } from "react";

/* Other Components */
import BuildIcon from '../icon/icon';

/* Icons */
import { BsFillSunFill } from "react-icons/bs";


export default function Header() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme])
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <header>
            <nav className="flex flex-row justify-between w-full p-2 pl-4 pr-4 bg-header dark:bg-dark-header">
                <a href="/" target="_self" id="navBrand" className="font-extrabold text-2xl text-textHeader dark:text-textDark">Römische Wirtschaft</a>
                <button
                onClick={handleThemeSwitch}
                >
                    <div className="min-h-fit">
                    <BuildIcon icon={<BsFillSunFill size="28"/>} classes="w-8 text-text-textDark dark:text-textLight"/>
                    </div>
                </button>
                <div className="grid grid-cols-[auto,auto,auto] gap-4 justify-center items-center text-textHeader dark:text-textDark font-semibold">
                    <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-textHeader dark:text-textDark font-semibold">Home</a>
                    <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-textHeader dark:text-textDark font-semibold">Lorem</a>
                    <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-textHeader dark:text-textDark font-semibold">Ipsum</a>
                </div>
            </nav>
        </header>
    )
}
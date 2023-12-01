export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <nav className="fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 pl-4 pr-4 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <span className="text-2xl font-extrabold">Römische Wirtschaft</span>
                    <div className="grid grid-cols-[auto,auto,auto] gap-4 justify-center items-center">
                        <a href="/" target="_self" className="opacity-70 hover:opacity-100 text-base">Home</a>
                        <a href="/innenhandel" target="_self" className="opacity-70 hover:opacity-100 text-base">Innenhandel</a>
                        <a href="/aussenhandel" target="_self" className="opacity-70 hover:opacity-100 text-base">Aussenhandel</a>
                    </div>
                </nav>
            </header>


            <div className="container p-6 px-6 mx-auto ">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                        Website
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Impressum
                    </p>
                </div>
                <div className="flex flex-wrap my-12 dark:text-white">
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Leandro Barmettler, Leontine Gioia Tschannen, Samuel Spink
                        </p>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Minervastrasse 14, 8090 Zürich
                        </p>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            samuel.spink@student.ksh.ch
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Haftungsausschluss
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Die auf dieser Website präsentierten Informationen dienen ausschließlich dem Zweck, einen Überblick über unsere Gruppenarbeit zum Thema "Römische Wirtschaft" zu geben. Wir übernehmen keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
                        </p>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Unsere Gruppenarbeit basiert auf Recherchen und Quellen, die zum Zeitpunkt der Erstellung als verlässlich erachtet wurden. Es kann jedoch keine Garantie für die Korrektheit und Aktualität dieser Informationen übernommen werden. Wir behalten uns das Recht vor, ohne vorherige Ankündigung Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Urheberrecht
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Die Inhalte dieser Website, insbesondere Texte, Bilder und Grafiken, sind urheberrechtlich geschützt. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen unserer schriftlichen Zustimmung.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Externe Links
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine Haftung für die Inhalte externer Links wird von uns ausdrücklich ausgeschlossen.
                        </p>
                    </div>
                </div>
            </div>

            <footer className="flex flex-col justify-center items-center p-2">
                <div className="flex flex-wrap gap-3 font-normal justify-center items-center">
                    <a href="/datenschutz">Datenschutz</a>
                    <a href="/impressum">Impressum</a>
                </div>
                <span className="font-bold">&copy; I2a 2023</span>
            </footer>
        </main>
    );
}
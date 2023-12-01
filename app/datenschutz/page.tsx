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

            <div className="container p-6 px-6 mx-auto ">
                <div className="mb-16 text-center">
                    <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                        Website
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Datenschutz
                    </p>
                </div>
                <div className="flex flex-wrap my-12 dark:text-white">
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Datenerhebung und -verwendung
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Wir erheben keinerlei personenbezogene Daten im Rahmen dieser Gruppenarbeit. Es werden weder Namen, E-Mail-Adressen noch andere persönliche Informationen erfasst.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Kommunikation
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Jegliche Kommunikation im Zusammenhang mit der Gruppenarbeit erfolgt über sichere und datenschutzfreundliche Kanäle. Vermeiden Sie bitte die Veröffentlichung persönlicher Informationen in den gemeinsam genutzten Dokumenten oder Kommunikationsplattformen.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Dokumentenaustausch
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Falls die Gruppenarbeit den Austausch von Dokumenten erfordert, stellen Sie sicher, dass keine sensiblen oder persönlichen Informationen in den Dateien enthalten sind. Nutzen Sie bevorzugt Plattformen, die eine verschlüsselte Übertragung ermöglichen.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Externe Ressourcen
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Falls externe Ressourcen oder Links genutzt werden, überprüfen Sie bitte deren Datenschutzrichtlinien. Wir übernehmen keine Verantwortung für Datenschutzpraktiken außerhalb unseres direkten Einflussbereichs.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
                        <div className="flex items-center mb-6">
                            <div className="text-xl">
                                Fragen und Kontakt
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Bei Fragen zum Datenschutz oder anderen Anliegen können Sie sich jederzeit an uns wenden. Nutzen Sie hierfür die Kommunikationsmittel, die während der Gruppenarbeit vereinbart wurden.
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
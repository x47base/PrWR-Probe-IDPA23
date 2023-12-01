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
                        Handel
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Aussenhandel
                    </p>
                </div>
                <div className="flex flex-wrap my-12 dark:text-white">
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Allgemein
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Der Handel spielte gegenüber der Landwirtschaft bis zum 3. Jahrhundert v. Chr. in der Wirtschaft Mittelitaliens eine deutlich untergeordnete Rolle. Erst die im 3. Jahrhundert v. Chr. einsetzende Münzprägung und die zunehmenden Kontakte haben einen grundlegenden Wandel der rückständigen Wirtschaftsstruktur Roms bewirkt.
                            Roms Handelsbilanz war passiv: Es wurde mehr importiert als exportiert, schon in der Frühzeit aus griechischen Kolonien. Rom konnte einen blühenden Handel und eine gute Wirtschaft verzeichnen, wahrscheinlich aus diesem Grunde gab es sogar schon Ansätze für bargeldlosen Zahlungsverkehr.
                            Über den Umfang des Handels sind jedoch nur grobe Schätzungen möglich. Bei einer geschätzten Überlieferung zwischen einem Prozent und einem Promille einst vorhandener Stücke erlauben die dokumentierten Mengen importierter römischer Metall- und Glasgefäße jedoch den Rückschluss auf erhebliche Zahlen.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                In der Stadt Rom
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Rund um das römische Forum waren große Markthallen, die Kaiserfora, um das alte Einkaufs- und Verwaltungszentrum angelegt, sie dienten auch als Gerichtshallen. Die Trajansmärkte, eine Art römisches Warenhaus, boten für die damalige Zeit alles in reichlicher Vielfalt. So waren in der Saepta Iulia, einem 400 m langen und 60 m breiten Gebäude, alle Geschäfte ähnlich einem heutigen Kaufhaus untergebracht.

                            Der Lebensstandard stieg allgemein, vor allem in den größer werdenden Städten. Die Handwerker stellten sich darauf ein und Händler belieferten die Verbraucher mit einer Vielzahl von Produkten. Die Lebensgewohnheiten der Menschen, die Ausstattung ihrer Wohnungen und die Gebrauchsgegenstände glichen einander im ganzen Imperium: Bei allen sozialen Unterschieden gab es eine einheitliche Lebensweise.
                            Die Versorgung von Rom wurde durch die CURA ANNONAE organisiert, wobei Getreide von den Provinzen Afrika und Ägypten, Öl, Wein und garum von spanischen Provinzen geliefert wurden. Daneben bestand aber ein freier Getreidemarkt in Rom.
                            Eine der Grundlagen des Wirtschaftslebens während der späten Republik und des Kaiserreiches war die kostenlose Getreideversorgung. Lediglich ein geringer Teil wurde an Bäcker verkauft, das meiste verteilte man an Bürger aller Schichten.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Sklavenhandel
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Der Sklavenhandel besaß während des 2. und 1. Jh. v. Chr. große wirtschaftliche Bedeutung: Vor allem Gallier verkauften Kriegsgefangene oder Schuldsklaven in großer Zahl nach Italien und aus dem östlichen Mittelmeerraum gelangten viele Menschen   teilweise als Opfer der Piraterie   auf den Sklavenmarkt.
                            Sklaven sahen die Römer als Sachen an, mit denen man nach Belieben umgehen konnte und die der Gewalt ihres Besitzers völlig unterworfen waren.
                            Deswegen war es üblich, dass man sie auf Sklavenmärkten handelte: Es gab Sklavenhändler, die ihre „Ware“ zum Verkauf anboten oder gute Sklaven ankauften. Lediglich am Gewinn ihres Herrn beteiligte Sklaven konnten später ihre Freiheit erkaufen.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Seehandel
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Seit ältesten Zeiten gab es im Mittelmeerraum einen regen Handelsverkehr. Er verband über weite Distanzen die nordwestlichen Provinzen mit dem Vorderen Orient und hatte einen erheblichen Umfang, was allein an der Ladekapazität der Schiffe ablesbar ist. Schiffe waren im Altertum das leistungsfähigste und billigste Transportmittel.

                            Der Seehandel an den Küsten des Arabischen Meeres2, des Indischen Ozeans und des Nordpazifiks war sehr bedeutend. In der Zeit des 1. und 2. Punischen Krieges wurde Rom zur Seemacht, römische Händler folgten den Legionen sogar nach Afrika, um von der Beute zu profitieren. Spätestens seit der LEX CLAUDIA DE NAVE SENATORUM (218 v. Chr.)   einem Gesetz, das Senatoren den Besitz von Schiffen mit einer Ladekapazität von mehr als 300 Amphoren untersagte   betrieb man mit erheblichen finanziellen Mitteln Handel. In großen Hafenstädten wie Ostia, dem Hafen Roms an der Tibermündung, wurden fortlaufend Schiffe be- und entladen und stachen in See. Es gab sogar eine Hafenpolizei, die das rege Treiben überwachte und gegen Schmuggler vorging.
                            Das Risiko für die Kaufleute war offensichtlich immer groß: Nur selten waren die Transportwege zu Lande und zu Wasser sicher. Eine besondere Plage stellte die Seeräuberei dar. Im 1. Jahrhundert v. Chr. gelang es den Piraten zeitweilig, das gesamte Mittelmeer unter ihre Kontrolle zu bringen und Handelsfahrten nahezu unmöglich zu machen. Der römische Staat griff ein. Es wurden regelrechte Kriege geführt, um das Piratenunwesen zu beseitigen. 1300 Piratenschiffe wurden damals verbrannt, 300 im Kampf erobert.
                        </p>
                    </div>
                    <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Handelsrouten
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Seit dem Beginn der Kaiserzeit hatte sich das Fernhandelsnetz beständig erweitert. Es umspannte nicht nur das gesamte Römische Reich, sondern erstreckte sich in vereinzelten Routen bis an die Ostsee und über das Schwarze Meer hinaus bis nach Rußland. Von Petra und Palmyra im Osten des Reiches führten Karawanenstraßen durch das Zweistromland (Mesopotamien) an den Persischen Golf und gewannen hier Anschluss an den Fernhandel mit China, Südindien und Ceylon.
                            Eine der bekanntesten frühen Fernhandelsrouten ist die Seidenstraße zwischen China und dem kaiserlichen Rom. Sie entstand etwa um 100 v. Chr., als die Han-Dynastie einen großen Teil Zentralasiens für den Karawanenverkehr sicher machte. Auf der 6 000 Kilometer langen Strecke beförderte man die bei den Römern sehr begehrte chinesische Seide, römische Wolle und wertvolle Metalle sowie viele andere hochwertige Luxusgüter über Zwischenstationen in Indien und Arabien.

                            „...minimaque conputatione miliens centena milia sestertium annis omnibus India et Seres et paeninsula illa (scil. Arabia) imperio nostro adimunt: tanti nobis deliciae et feminae constant!“ (Plinius, naturalis historia)
                            „Nach den niedrigsten Schätzungen entziehen Indien, die Serer und die Halbinsel Arabien unserem Staate alle Jahre 100 Millionen Sesterzen: Soviel kosten uns Luxus und Frauen!“

                            Mit diesen Worten beklagte Plinius der ältere die Verschwendungssucht seiner Zeitgenossen, die damals Luxusgüter vom ganzen (damals bekannten) Erdkreis begehrten   dabei zahlten sie immense Preise, die sich gelegentlich verhundertfachten!
                        </p>
                    </div>
                    <div className="w-full p-8 md:w-1/2 lg:w-1/3">
                        <div className="flex items-center mb-6">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl">
                                Binnenhandel zwischen Provinzen
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            In der Kaiserzeit nahmen die zum Römischen Reich gehörenden Gebiete einen großen wirtschaftlichen Aufschwung. Die PAX ROMANA förderte ungestörte Handelsbeziehungen im ganzen Imperium Romanum.
                            Die aufstrebenden Provinzen trieben nicht mehr nur mit dem zentralen Italien Handel, sondern auch untereinander. Das Imperium Romanum entwickelte sich im 1. und 2. Jahrhundert n. Chr. zu einem geschlossenen und sich selbst versorgenden Wirtschaftsgebiet.
                            Nordafrika oder Ägypten exportierten Getreide, Metalle kamen von der Iberischen Halbinsel, Luxusartikel aus Italien, Griechenland oder dem Orient, Töpferwaren und Glas aus Gallien und dem Rheinland, exotische Tiere aus Afrika oder Asien, Leder und Pelze vom Nordrand des Reiches; die Randgebiete des Imperiums lieferten auch Sklaven.
                            Träger des römischen Handels nach Germanien waren in der Regel römische Kaufleute, mercatores, die sich meist zu Vereinigungen zusammenschlossen.
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
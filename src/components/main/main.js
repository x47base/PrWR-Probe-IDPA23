import './main.css';

/* Icons */
import { BsFillSunFill } from "react-icons/bs";

/* Other Components */
import BuildIcon from '../icon/icon';

const information = [
    {
        title: "",
        content: [
            {
                type: "p",
                text: ""
            }
        ]
    }
]

export default function Main(){
    return (
        <main className="w-full p-0 min-h-screen bg-background">
            <section>
                <div>
                    <div class="mainSection">
                        <div class="sticky w-screen top-0 p-2
                            text-textHeader dark:text-textDark bg-sticky dark:bg-dark-sticky
                            font-extrabold"
                        >Allgemein</div>
                        <div>
                            <p className="p-2 text-left">
                                Der Handel spielte gegenüber der Landwirtschaft bis zum 3. Jahrhundert v. Chr. in der Wirtschaft Mittelitaliens eine deutlich untergeordnete Rolle. Erst die im 3. Jahrhundert v. Chr. einsetzende Münzprägung und die zunehmenden Kontakte haben einen grundlegenden Wandel 
                                der rückständigen Wirtschaftsstruktur Roms bewirkt. Roms Handelsbilanz war passiv: Es wurde mehr importiert als exportiert, schon in der Frühzeit aus griechischen Kolonien. Rom konnte einen blühenden Handel und eine gute Wirtschaft verzeichnen, wahrscheinlich aus diesem 
                                Grunde gab es sogar schon Ansätze für bargeldlosen Zahlungsverkehr. Über den Umfang des Handels sind jedoch nur grobe Schätzungen möglich. Bei einer geschätzten Überlieferung zwischen einem Prozent und einem Promille einst vorhandener Stücke erlauben die dokumentierten 
                                Mengen importierter römischer Metall- und Glasgefäße jedoch den Rückschluss auf erhebliche Zahlen.
                            </p>
                        </div>
                    </div>
                    <div class="mainSection">
                        <div class="sticky w-screen top-0 p-2
                            text-textHeader dark:text-textDark bg-sticky dark:bg-dark-sticky
                            font-extrabold"
                        >In der Stadt Rom</div>
                        <div>
                            <p className="p-2 text-left">
                                Rund um das römische Forum waren große Markthallen, die Kaiserfora, um das alte Einkaufs- und Verwaltungszentrum angelegt, sie dienten auch als Gerichtshallen. Die Trajansmärkte, eine Art römisches Warenhaus, boten für die damalige Zeit alles in reichlicher Vielfalt. So waren 
                                in der Saepta Iulia, einem 400 m langen und 60 m breiten Gebäude, alle Geschäfte ähnlich einem heutigen Kaufhaus untergebracht.
                            </p>
                            <p className="p-2 text-left">
                                Der Lebensstandard stieg allgemein, vor allem in den größer werdenden Städten. Die Handwerker stellten sich darauf ein und Händler belieferten die Verbraucher mit einer Vielzahl von Produkten. Die Lebensgewohnheiten der Menschen, die Ausstattung ihrer Wohnungen und die 
                                Gebrauchsgegenstände glichen einander im ganzen Imperium: Bei allen sozialen Unterschieden gab es eine einheitliche Lebensweise. Die Versorgung von Rom wurde durch die CURA ANNONAE organisiert, wobei Getreide von den Provinzen Afrika und Ägypten, Öl, Wein und garum von spanischen 
                                Provinzen geliefert wurden. Daneben bestand aber ein freier Getreidemarkt in Rom. Eine der Grundlagen des Wirtschaftslebens während der späten Republik und des Kaiserreiches war die kostenlose Getreideversorgung. Lediglich ein geringer Teil wurde an Bäcker verkauft, das meiste 
                                verteilte man an Bürger aller Schichten.
                            </p>
                        </div>
                    </div>
                    <div class="mainSection">
                        <div class="sticky w-screen top-0 p-2
                            text-textHeader dark:text-textDark bg-sticky dark:bg-dark-sticky
                            font-extrabold"
                        >Sklavenhandel</div>
                        <div>
                            <p className="p-2 text-left">
                                Der Sklavenhandel besaß während des 2. und 1. Jh. v. Chr. große wirtschaftliche Bedeutung: Vor allem Gallier verkauften Kriegsgefangene oder Schuldsklaven in großer Zahl nach Italien und aus dem östlichen Mittelmeerraum gelangten viele Menschen   teilweise als Opfer der Piraterie 
                                auf den Sklavenmarkt. Sklaven sahen die Römer als Sachen an, mit denen man nach Belieben umgehen konnte und die der Gewalt ihres Besitzers völlig unterworfen waren. Deswegen war es üblich, dass man sie auf Sklavenmärkten handelte: Es gab Sklavenhändler, die ihre „Ware“ zum Verkauf 
                                anboten oder gute Sklaven ankauften. Lediglich am Gewinn ihres Herrn beteiligte Sklaven konnten später ihre Freiheit erkaufen.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
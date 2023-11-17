import './main.css';

/* Icons */
import { BsFillSunFill } from "react-icons/bs";

/* Other Components */
import BuildIcon from '../icon/icon';

/* Schema
    {
        title: "",
        content: [
            {
                text: ""
            }
        ]
    },
*/

const information = [
    {
        title: "Allgemein",
        content: [
            {
                text: "Der Handel spielte gegenüber der Landwirtschaft bis zum 3. Jahrhundert v. Chr. in der Wirtschaft Mittelitaliens eine deutlich untergeordnete Rolle. Erst die im 3. Jahrhundert v. Chr. einsetzende Münzprägung und die zunehmenden Kontakte haben einen grundlegenden Wandel der rückständigen Wirtschaftsstruktur Roms bewirkt."
            },
            {
                text: "Roms Handelsbilanz war passiv: Es wurde mehr importiert als exportiert, schon in der Frühzeit aus griechischen Kolonien. Rom konnte einen blühenden Handel und eine gute Wirtschaft verzeichnen, wahrscheinlich aus diesem Grunde gab es sogar schon Ansätze für bargeldlosen Zahlungsverkehr."
            },
            {
                text: "Über den Umfang des Handels sind jedoch nur grobe Schätzungen möglich. Bei einer geschätzten Überlieferung zwischen einem Prozent und einem Promille einst vorhandener Stücke erlauben die dokumentierten Mengen importierter römischer Metall- und Glasgefäße jedoch den Rückschluss auf erhebliche Zahlen."
            }
        ]
    },
    {
        title: "In der Stadt Rom",
        content: [
            {
                text: "Rund um das römische Forum waren große Markthallen, die Kaiserfora, um das alte Einkaufs- und Verwaltungszentrum angelegt, sie dienten auch als Gerichtshallen. Die Trajansmärkte, eine Art römisches Warenhaus, boten für die damalige Zeit alles in reichlicher Vielfalt. So waren in der Saepta Iulia, einem 400 m langen und 60 m breiten Gebäude, alle Geschäfte ähnlich einem heutigen Kaufhaus untergebracht."
            },
            {
                text: "Der Lebensstandard stieg allgemein, vor allem in den größer werdenden Städten. Die Handwerker stellten sich darauf ein und Händler belieferten die Verbraucher mit einer Vielzahl von Produkten. Die Lebensgewohnheiten der Menschen, die Ausstattung ihrer Wohnungen und die Gebrauchsgegenstände glichen einander im ganzen Imperium: Bei allen sozialen Unterschieden gab es eine einheitliche Lebensweise."
            },
            {
                text: "Die Versorgung von Rom wurde durch die CURA ANNONAE organisiert, wobei Getreide von den Provinzen Afrika und Ägypten, Öl, Wein und garum von spanischen Provinzen geliefert wurden. Daneben bestand aber ein freier Getreidemarkt in Rom."
            },
            {
                text: "Eine der Grundlagen des Wirtschaftslebens während der späten Republik und des Kaiserreiches war die kostenlose Getreideversorgung. Lediglich ein geringer Teil wurde an Bäcker verkauft, das meiste verteilte man an Bürger aller Schichten."
            }
        ]
    },
    {
        title: "Sklavenhandel",
        content: [
            {
                text: "Der Sklavenhandel besaß während des 2. und 1. Jh. v. Chr. große wirtschaftliche Bedeutung: Vor allem Gallier verkauften Kriegsgefangene oder Schuldsklaven in großer Zahl nach Italien und aus dem östlichen Mittelmeerraum gelangten viele Menschen   teilweise als Opfer der Piraterie   auf den Sklavenmarkt."
            },
            {
                text: "Sklaven sahen die Römer als Sachen an, mit denen man nach Belieben umgehen konnte und die der Gewalt ihres Besitzers völlig unterworfen waren."
            },
            {
                text: "Deswegen war es üblich, dass man sie auf Sklavenmärkten handelte: Es gab Sklavenhändler, die ihre „Ware“ zum Verkauf anboten oder gute Sklaven ankauften. Lediglich am Gewinn ihres Herrn beteiligte Sklaven konnten später ihre Freiheit erkaufen."
            }
        ]
    },
    {
        title: "Seehandel",
        content: [
            {
                text: "Seit ältesten Zeiten gab es im Mittelmeerraum einen regen Handelsverkehr. Er verband über weite Distanzen die nordwestlichen Provinzen mit dem Vorderen Orient und hatte einen erheblichen Umfang, was allein an der Ladekapazität der Schiffe ablesbar ist. Schiffe waren im Altertum das leistungsfähigste und billigste Transportmittel."
            },
            {
                text: "Der Seehandel an den Küsten des Arabischen Meeres2, des Indischen Ozeans und des Nordpazifiks war sehr bedeutend. In der Zeit des 1. und 2. Punischen Krieges wurde Rom zur Seemacht, römische Händler folgten den Legionen sogar nach Afrika, um von der Beute zu profitieren. Spätestens seit der LEX CLAUDIA DE NAVE SENATORUM (218 v. Chr.)   einem Gesetz, das Senatoren den Besitz von Schiffen mit einer Ladekapazität von mehr als 300 Amphoren untersagte   betrieb man mit erheblichen finanziellen Mitteln Handel. In großen Hafenstädten wie Ostia, dem Hafen Roms an der Tibermündung, wurden fortlaufend Schiffe be- und entladen und stachen in See. Es gab sogar eine Hafenpolizei, die das rege Treiben überwachte und gegen Schmuggler vorging."
            },
            {
                text: "Das Risiko für die Kaufleute war offensichtlich immer groß: Nur selten waren die Transportwege zu Lande und zu Wasser sicher. Eine besondere Plage stellte die Seeräuberei dar. Im 1. Jahrhundert v. Chr. gelang es den Piraten zeitweilig, das gesamte Mittelmeer unter ihre Kontrolle zu bringen und Handelsfahrten nahezu unmöglich zu machen. Der römische Staat griff ein. Es wurden regelrechte Kriege geführt, um das Piratenunwesen zu beseitigen. 1300 Piratenschiffe wurden damals verbrannt, 300 im Kampf erobert."
            }
        ]
    },
    {
        title: "Handelsrouten",
        content: [
            {
                text: "Seit dem Beginn der Kaiserzeit hatte sich das Fernhandelsnetz beständig erweitert. Es umspannte nicht nur das gesamte Römische Reich, sondern erstreckte sich in vereinzelten Routen bis an die Ostsee und über das Schwarze Meer hinaus bis nach Rußland. Von Petra und Palmyra im Osten des Reiches führten Karawanenstraßen durch das Zweistromland (Mesopotamien) an den Persischen Golf und gewannen hier Anschluss an den Fernhandel mit China, Südindien und Ceylon."
            },
            {
                text: "Eine der bekanntesten frühen Fernhandelsrouten ist die Seidenstraße zwischen China und dem kaiserlichen Rom. Sie entstand etwa um 100 v. Chr., als die Han-Dynastie einen großen Teil Zentralasiens für den Karawanenverkehr sicher machte. Auf der 6 000 Kilometer langen Strecke beförderte man die bei den Römern sehr begehrte chinesische Seide, römische Wolle und wertvolle Metalle sowie viele andere hochwertige Luxusgüter über Zwischenstationen in Indien und Arabien."
            },
            {
                text: "„...minimaque conputatione miliens centena milia sestertium annis omnibus India et Seres et paeninsula illa (scil. Arabia) imperio nostro adimunt: tanti nobis deliciae et feminae constant!“ (Plinius, naturalis historia)"
            },
            {
                text: "„Nach den niedrigsten Schätzungen entziehen Indien, die Serer und die Halbinsel Arabien unserem Staate alle Jahre 100 Millionen Sesterzen: Soviel kosten uns Luxus und Frauen!“"
            },
            {
                text: "Mit diesen Worten beklagte Plinius der ältere die Verschwendungssucht seiner Zeitgenossen, die damals Luxusgüter vom ganzen (damals bekannten) Erdkreis begehrten   dabei zahlten sie immense Preise, die sich gelegentlich verhundertfachten!"
            }
        ]
    },
    {
        title: "Binnenhandel zwischen Provinzen",
        content: [
            {
                text: "In der Kaiserzeit nahmen die zum Römischen Reich gehörenden Gebiete einen großen wirtschaftlichen Aufschwung. Die PAX ROMANA förderte ungestörte Handelsbeziehungen im ganzen Imperium Romanum."
            },
            {
                text: "Die aufstrebenden Provinzen trieben nicht mehr nur mit dem zentralen Italien Handel, sondern auch untereinander. Das Imperium Romanum entwickelte sich im 1. und 2. Jahrhundert n. Chr. zu einem geschlossenen und sich selbst versorgenden Wirtschaftsgebiet."
            },
            {
                text: "Nordafrika oder Ägypten exportierten Getreide, Metalle kamen von der Iberischen Halbinsel, Luxusartikel aus Italien, Griechenland oder dem Orient, Töpferwaren und Glas aus Gallien und dem Rheinland, exotische Tiere aus Afrika oder Asien, Leder und Pelze vom Nordrand des Reiches; die Randgebiete des Imperiums lieferten auch Sklaven."
            },
            {
                text: "Träger des römischen Handels nach Germanien waren in der Regel römische Kaufleute, mercatores, die sich meist zu Vereinigungen zusammenschlossen."
            }
        ]
    },

]

export default function Main(){
    return (
        <main className="w-full p-0 min-h-screen bg-background">
            <section id="Intro">
                <h1 className="font-extrabold text-2xl text-textHeader dark:text-textDark">Die Wirtschaft im römischen Reich</h1>
            </section>
            <section id="Infos">
                {information.map((mainItem, main_index) => {
                    return (
                        <div class="stickySection">
                            <div class="sticky w-screen top-0 p-2
                                text-textHeader dark:text-textDark bg-sticky dark:bg-dark-sticky
                                font-extrabold"
                            >{mainItem.title}</div>
                            <div>
                                {
                                    mainItem.content.map((item, index) => {
                                        return (
                                            <p className="p-2 text-left">
                                                {item.text}
                                            </p>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}
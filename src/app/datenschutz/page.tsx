import React from 'react'
import styles from './page.module.css'
import NiceButton from '@/components/NiceButton/NiceButton'
import ContentImage from '@/components/ContentImage/ContentImage'
import signImage from '../../static/images/the_sign.jpg'
import Textblock from '@/components/Textblock/Textblock'

export default function Page() {
    return <>
        <h1 className={'text--headline-main text--headline-main-accent'}>Datenschutz für Ihr Unternehmen</h1>
        <Textblock>
            Wer ein Unternehmen führt, Produkte oder Dienstleistungen verkaufen und
            Kundenkontakte pflegen möchte, kommt um das Thema Datenschutz heutzutage nicht mehr
            herum. Damit Sie Zeit und Ressourcen für das haben, was Sie am besten machen, gibt es
            uns. Unser Team von GSP-Solutions besteht aus Expertinnen und Experten, die Sie bei der
            Einhaltung der Datenschutzverordnungen unterstützen. Angefangen bei der Beratung, über
            Schulungen, bis dahin, dass wir als Ihr extern bestellter Datenschutzbeauftragter (DSB)
            agieren.
        </Textblock>
        <Textblock>
            Um Ihnen einen tieferen Einblick in das Thema Datenschutz und unsere Dienstleistungen zu
            geben, haben wir auf dieser Seite die wichtigsten Themen für Sie gesammelt. Sollten Fragen
            offen bleiben, kontaktieren Sie uns gerne.{/* ToDo Link to contact */}
        </Textblock>

        <h2 className={'text--headline-main'}>
            Datenschutz und die DSGVO im Unternehmen
        </h2>
        <Textblock>
            Die Datenschutzgrundverordnung (DSGVO), die seit dem 25.
            Mai 2018 gilt, ist ein EU-weites
            Datenschutzgesetz, das den Umgang mit personenbezogenen Daten regelt und hohe
            Standards für den Datenschutz in der EU setzt. Sie hat zum Ziel, den Schutz
            personenbezogener Daten zu stärken und einheitliche Regelungen für den Datenschutz
            innerhalb der EU zu schaffen.
        </Textblock>
        <Textblock>
            Datenschutz im Unternehmenskontext bedeutet also, dass Sie
            sicherstellen müssen, dass die
            von Ihnen gesammelten personenbezogenen Daten sicher und rechtmäßig verwendet
            werden. Dafür gilt es, geeignete Maßnahmen zum Schutz der Daten zu ergreifen und
            Transparenz- und Informationspflichten einzuhalten.
        </Textblock>
        <Textblock>
            <>
                Dazu gehören unter anderem:
                <ul>
                    <li>die Anforderungen an die Einwilligung in die Verarbeitung von Daten</li>
                    <li>die Pflicht zur Benennung eines Datenschutzbeauftragten{/* ToDo Link to Offers/Services*/}</li>
                    <li>die Verpflichtung zur Meldung von Datenpannen</li>
                </ul>
            </>
        </Textblock>


        <h2 className={'text--headline-main'}>Was sind personenbezogene Daten?</h2>
        <Textblock><>
            <p className={'text--cursive text--offset'}>Alle Informationen, die auf eine identifizierte oder
                identifizierbare natürliche Person bezogen
                werden können, gelten als personenbezogene Daten.</p>
            Das bedeutet, dass alle Daten, die einer
            Person zugeordnet werden können und die sie „erkennbar“ machen, laut DSGVO zu den
            personenbezogenen Daten gehören. Diese müssen bei der Verarbeitung und Speicherung
            besonders geschützt werden.
        </>
        </Textblock>
        <Textblock>
            <>
                <span className={'text--bold'}>Konkrete Beispiele für personenbezogene Daten sind:&nbsp;</span>
                Geschlecht, Alter, Haarfarbe,
                Arbeitgeber, Adresse, Geburtsdatum, E-Mail-Adresse, IP-Adresse, Telefonnummer,
                Staatsangehörigkeit oder auch finanzielle Informationen wie Bankdaten oder
                Kreditkartennummern. Aber auch Informationen, die für gewöhnlich nur bei geschäftlichen
                Kontakten gesammelt werden, fallen unter die personenbezogenen Daten.
                <span className={'text--bold'}>&nbsp;Verwenden auch Sie ein CRM?&nbsp;</span>
                Dann sammeln Sie zur Vertriebsoptimierung sicher Daten wie den Jobtitel, die
                Geschäftsadresse, Kontakthistorie, die produktbezogenen Interessen Ihrer (potenziellen)
                Kunden oder weisen diesen eine Kundennummer zu. Auch hierbei handelt es sich um
                personenbezogene und somit schützenswerte Daten.
            </>
        </Textblock>
        <Textblock>
            <>
            <span className={'text--bold'}>
                Sind Sie im Gesundheitswesen, im Bereich Finanzdienstleistungen, Versicherungen
                oder in einer Regierungseinrichtung tätig? </span>
                Dann verarbeiten Sie mit Sicherheit sogenannte
                <span className={'text--bold'}>&nbsp;&quot;Sensible Daten&quot;.&nbsp;</span>
                Dies sind personenbezogene Daten, die den strengsten Schutzregularien
                unterliegen. Dies betrifft vor allem Gesundheitsdaten, Daten zum Sexualleben, ethnischer
                Herkunft oder politischen Meinungen. Die Verarbeitung solcher Daten ist nur unter
                bestimmten Voraussetzungen überhaupt erlaubt und erfordert angemessene technische
                und organisatorische Maßnahmen zum Schutz der Daten gemäß DSGVO.
            </>
        </Textblock>

        <h2 className={'text--headline-main'}>Der Datenschutzbeauftragte</h2>
        <h3 className={'text--headline-secondary'}>Braucht Ihr Unternehmen einen
            Datenschutzbeauftragten und wenn ja, in welchem
            Rahmen?</h3>
        <Textblock>
            Ob Ihr Unternehmen einen Datenschutzbeauftragten (DSB) benötigt, hängt nicht nur von der
            Mitarbeiterzahl ab, sondern auch davon, wie viele und welche Daten verarbeitet werden.
            Häufig wird davon ausgegangen, dass erst Unternehmen ab einer Mitarbeiterzahl von 20
            Personen einen Datenschutzbeauftragten benötigen; so einfach ist es allerdings nicht.
        </Textblock>
        <Textblock>
            Gerne beraten wir Sie zu Ihrem individuellen Fall und zeigen Ihnen die entsprechenden
            rechtlichen Regelungen auf. Unser kostenloses Erstgespräch buchen Sie hier.
            {
                /**
                 * ToDo
                 *  Hinweis: Dies
                 *  sollte ein Link zur Buchungsmaske sein. Wenn möglich, eine Buchungsmaske aufbauen,
                 *  idealerweise mit Kalender im Hintergrund, sodass Interessenten sich die Termine direkt
                 *  online buchen können. Niedrige Schwelle = mehr Erstkontakte! Calendly ist hier ein
                 *  bekannter Anbieter.)
                 *  H2:
                 **/
            }
        </Textblock>

        <h2 className={'text--headline-main'}>
            Einmal mit Profis &#8211; Unsere Dienstleitungen und Versprechen für Sie
        </h2>
        <h3 className={'text--headline-secondary'}>
            Unsere Mission
        </h3>
        <Textblock>
            Unser Ziel ist es, dass die Einhaltung der DSGVO für Sie einfach umsetzbar und alltäglich
            wird. Datenschutz muss kein Schreckgespenst sein, das unnötig Zeit und Energie frisst.
            Darum beraten wir Sie ganzheitlich mit Blick auf Ihre Prozessoptimierung und
            Aufbauorganisation, um Ihrem Team etwas Leichtigkeit und vor allem Klarheit in
            Datenschutz-Themen mit auf den Weg zu geben.
        </Textblock>

        <h3 className={'text--headline-secondary'}>
            Ihre Vorteile in der Zusammenarbeit mit uns
        </h3>
        <Textblock>
            <ul className={'text--list'}>
                <li>Nachvollziehbare Stundensätze und Kosten</li>
                <li>Wir handeln bewusst, bedacht und sparsam: Statt vorgefertigter Pakete bekommen
                    und bezahlen Sie bei uns nur das, was Sie wirklich brauchen
                </li>
                <li>Geschultes Team & ein fester Ansprechpartner: Bei uns sind Sie keine gesichtslose
                    Nummer
                </li>
                <li>Monatspauschale mit inkludierten Servicestunden buchbar:
                    <ul className={'text--list'}>
                        <li>Bereitschaft für Rückfragen aller Art</li>
                        <li>Umsetzung von akuten Aufgaben, wie bspw. Formulare
                            erstellen/prüfen
                        </li>
                    </ul>
                </li>
                <li>kostenloses Erstgespräch online, telefonisch oder bei Ihnen vor Ort:
                    Sie haben die Möglichkeit, Ihre Fragen zu stellen und wir geben Ihnen hier bereits die
                    ersten Impulse
                </li>
            </ul>
        </Textblock>

        <div>
            <ContentImage srcFile={signImage} altText={'Ein Zeichen'}></ContentImage>
        </div>

        {/** ToDo **/}
        <NiceButton label={'Jetzt kostenloses Erstgespräch buchen'} onClick={() => {
            console.log('click')
        }} type={'button'}></NiceButton>


        <h2 className={'text--headline-main'}>
            Unsere Dienstleistungen im Überblick
        </h2>
        <h3 className={'text--headline-secondary'}>
            Website Datenschutzcheck
        </h3>
        <Textblock>
            Wir prüfen Ihre Website auf Datenschutzkonformität: Cookie-Banner korrekt gesetzt?
            Welche Daten werden verarbeitet und wie lang werden diese gespeichert?
        </Textblock>

        <h3 className={'text--headline-secondary'}>
            Datenschutz + Organisationsmaßnahmen (sparen Sie sich den Unternehmensberater)
        </h3>
        <Textblock>
            Beratung bei organisatorischen Themen, wie beispielsweise Anlage der
            Personalakten, Sicherheitskonzept, Zuständigkeiten und Kommunikationsstrukturen
            optimieren, Ordnerstrukturen und Zugriffsrechte, Wissensmanagement
        </Textblock>

        <h3 className={'text--headline-secondary'}>
            Seminare, z.B. „sparsamer Umgang mit Daten“
        </h3>
        <Textblock>
            Wir schulen Sie und Ihr Team, welche Daten Sie sammeln und wie Sie diese
            verwenden dürfen. Wie verschicken Sie Werbung datenschutzkonform? Wie gehe ich
            mit gesammelten Adressen um? Wie gehe ich mit gekauften Adressen um? Darf ich
            Haushalte einfach anschreiben? Und vieles mehr.
        </Textblock>


        <h3 className={'text--headline-secondary'}>
            ToDo
        </h3>
        <Textblock>Hier mehr Text einfügen</Textblock>


        {/*
        <h2 className={'text--headline-main'}></h2>
        <h3 className={'text--headline-secondary'}></h3>
        <Textblock></Textblock>
        */}
    </>
}

import styles from './DSGVO.module.css'

export default function DSGVO() {

    return (<div className={styles.container}>
        <h1 className={'text--headline-main ' + styles.headline}>Datenschutz für Ihr Unternehmen</h1>
        <div className={'text--default ' + styles.textblock}>
            Wer ein Unternehmen führt, Produkte oder Dienstleistungen verkaufen und
            Kundenkontakte pflegen möchte, kommt um das Thema Datenschutz heutzutage nicht mehr
            herum. Damit Sie Zeit und Ressourcen für das haben, was Sie am besten machen, gibt es
            uns. Unser Team von GSP-Solutions besteht aus Expertinnen und Experten, die Sie bei der
            Einhaltung der Datenschutzverordnungen unterstützen. Angefangen bei der Beratung, über
            Schulungen, bis dahin, dass wir als Ihr extern bestellter Datenschutzbeauftragter (DSB)
            agieren.
        </div>
        <div className={'text--default ' + styles.textblock}>
            Um Ihnen einen tieferen Einblick in das Thema Datenschutz und unsere Dienstleistungen zu
            geben, haben wir auf dieser Seite die wichtigsten Themen für Sie gesammelt. Sollten Fragen
            offen bleiben, kontaktieren Sie uns gerne.{/* ToDo Link to contact */}
        </div>
        <h2 className={'text--headline-main ' + styles.headline}>
            Datenschutz und die DSGVO im Unternehmen
        </h2>
        <div className={'text--default ' + styles.textblock}>Die Datenschutzgrundverordnung (DSGVO), die seit dem 25.
            Mai 2018 gilt, ist ein EU-weites
            Datenschutzgesetz, das den Umgang mit personenbezogenen Daten regelt und hohe
            Standards für den Datenschutz in der EU setzt. Sie hat zum Ziel, den Schutz
            personenbezogener Daten zu stärken und einheitliche Regelungen für den Datenschutz
            innerhalb der EU zu schaffen.
        </div>
        <div className={'text--default ' + styles.textblock}>Datenschutz im Unternehmenskontext bedeutet also, dass Sie
            sicherstellen müssen, dass die
            von Ihnen gesammelten personenbezogenen Daten sicher und rechtmäßig verwendet
            werden. Dafür gilt es, geeignete Maßnahmen zum Schutz der Daten zu ergreifen und
            Transparenz- und Informationspflichten einzuhalten.
        </div>
        <div className={'text--default ' + styles.textblock}>Dazu gehören unter anderem:
            <ul>
                <li>die Anforderungen an die Einwilligung in die Verarbeitung von Daten</li>
                <li>die Pflicht zur Benennung eines Datenschutzbeauftragten{/* ToDo Link to Offers/Services*/}</li>
                <li>die Verpflichtung zur Meldung von Datenpannen</li>
            </ul>
        </div>


        <h2 className={'text--headline-main ' + styles.headline}></h2>
        <div className={'text--default ' + styles.textblock}></div>
    </div>)
}

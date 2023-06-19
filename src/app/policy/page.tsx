import Textblock from '@/components/Textblock/Textblock'

export default function Page() {
    return <>
        <h1 className={'text--headline-main text--headline-main-accent'}>Datenschutzerklärung</h1>
        <h2 className={'text--headline-main'}>Datenschutzerklärung</h2>

        <h3 className={'text--headline-secondary'}>1. Verantwortlicher und allgemeiner Hinweis</h3>
        <Textblock>
            Verantwortliche Stelle ist::<br/>
            GSP-Solutions UG (haftungsbeschränkt)<br/>
            Germany<br/>
            Stolzmühle 33<br/>
            90599 Dietenhofen<br/>
            <br/>
            Telefon: 09824/ 48 44 240<br/>
            Fax: 09824/ 48 44 239<br/>
            E-Mail: stephan@gspsolutions.de<br/>
            <br/>


            Diese Stelle ist Diensteanbieter im Sinne des Telemediengesetzes (TMG) und Verantwortlicher im Sinne der
            {/* eslint-disable-next-line */}
            Datenschutz-Grundverordnung (DSGVO). Diese Stelle ist auch gemeint, wenn Formulierungen wie "wir" oder "uns"
            benutzt werden.
        </Textblock>

        <h3 className={'text--headline-secondary'}>2. Was sind personenbezogene Daten:</h3>
        <Textblock>
            Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
            natürliche Person beziehen (betroffene Person). Mit personenbezogenen Daten kann eine betroffene Person
            identifiziert werden. Hierzu zählt beispielsweise der Name, die Anschrift, die E-Mail-Adresse, die
            Telefonnummer oder eine Ihnen von Ihrem Internetprovider zugewiesene IP-Adresse. Keine personenbezogenen
            Daten sind solche Informationen, mit deren Hilfe Sie nicht identifizierbar sind (anonyme Daten).
        </Textblock>

        <h3 className={'text--headline-secondary'}>3. Ort der Verarbeitung:</h3>
        <Textblock>
            Wir selbst übertragen Ihre personenbezogenen Daten nicht in Länder außerhalb des Europäischen
            Wirtschaftsraumes („EWR“), außer in Fällen, in denen es nach der DSGVO zulässig ist. Um den Schutz Ihrer
            Persönlichkeitsrechte auch im Rahmen dieser Datenübertragungen zu gewährleisten, bedienen wir uns bei der
            Ausgestaltung der Vertragsverhältnisse mit den Empfängern in Drittländern der Standardvertragsklauseln der
            EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO. Diese sind unter <a
            href={'https://eur-lex.europa.eu/'}>https://eur-lex.europa.eu/</a> jederzeit abrufbar.
        </Textblock>

        <h3 className={'text--headline-secondary'}>4. Dauer die Ihre Daten bei uns gespeichert werden:</h3>
        <Textblock>
            Wir verarbeiten und speichern Ihre personenbezogenen Daten, solange es für die Erfüllung unserer
            vertraglichen und gesetzlichen Pflichten erforderlich ist. Sofern unsere Geschäftsbeziehung mit Ihnen
            fortdauert (z.B. im Falle einer Registrierung), werden Ihre Daten nicht eigenständig durch uns gelöscht.
            Werden Ihre Daten für die Erfüllung vertraglicher oder gesetzlicher Pflichten nicht mehr benötigt, werden
            sie gelöscht, es sei denn, deren weitere Speicherung ist für die Erfüllung handels- und steuerrechtlicher
            Aufbewahrungspflichten erforderlich.<br/>
            Sofern Ihre Daten im Rahmen der Vertragsdurchführung an Dritte übermittelt werden, sind diese für die
            Aufbewahrung und Löschung dieser Daten verantwortlich.
        </Textblock>

        <h3 className={'text--headline-secondary'}>5. Automatisiert erhobene Daten:</h3>
        <Textblock>
            Beim Besuch jeder Internetseite werden Informationen über IP-Adresse, verweisende URL, Datum, Uhrzeit,
            Browserversion und verwendetes Betriebssystem in den Server eigenen Logdateien gespeichert. Diese Daten
            werden benötigt, um eine Internetseite zu übermitteln. Sie werden keiner individuellen Person
            zugeordnet.<br/>
            Diese Informationen werden von uns ausschließlich zu Zwecken der technischen Administration unserer Website
            und zur Abwehr von rechtswidrigen Handlungen im Zusammengang mit unserer Website genutzt. Wir behalten uns
            vor, diese Protokolldaten nachträglich zu prüfen, wenn aufgrund konkreter Anhaltspunkte der berechtigte
            Verdacht einer rechtswidrigen Handlung besteht. Soweit hierbei personenbezogene Daten verarbeitet werden,
            tun wir dies ausschließlich zur Wahrung unseres berechtigten Interesses zur Abwehr von rechtswidrigen
            Handlungen im Zusammenhang mit unserer Website.<br/>
            Rechtsgrundlage hierfür ist Art. 6 Abs. 1 f) DSGVO. Personenbezogene Daten werden dabei für eine Dauer von
            höchstens 40 Tage gespeichert, wenn keine Anhaltspunkte für eine rechtswidrige Nutzung vorliegen. Die
            berechtigten Interessen bestehen im Schutz der zur Verfügung gestellten Dienstleistung und in der
            Funktionalität der Unternehmensabläufe. Sie haben das Recht, dieser Datenverarbeitung aus Gründen, die sich
            aus ihrer besonderen Situation ergeben, jederzeit zu widersprechen. In diesem Fall werden wir die Daten nur
            noch verarbeiten, wenn unsere zwingenden schutzwürdigen Gründe ihre Gründe überwiegen oder die Verarbeitung
            der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient.<br/>
        </Textblock>

        <h3 className={'text--headline-secondary'}>5.1. Hetzner Online GmbH:</h3>
        <Textblock>
            Unsere Webseite wird betrieben auf Servern der Hetzner Online GmbH.
            Industriestraße 25, 91710 Gunzenhausen, <a
            href={'https://www.hetzner.com/de/'}>https://www.hetzner.com/de/</a>.<br/>
            Der Zugriff auf die Daten beruht auf einem Vertrag zur Auftragsverarbeitung.<br/>
            Wir verwenden eine SSL-Verschlüsselung, sodass Ihre über unsere Homepage erhobenen Daten an uns
            verschlüsselt übertragen werden. Wir weisen jedoch darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per Email) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht möglich.<br/>
        </Textblock>

        <h3 className={'text--headline-secondary'}>5.2. Strato:</h3>
        <Textblock>
            Wir nutzen für unsere Website STRATO, unter anderem ein Webhosting-Anbieter. Dienstanbieter ist das
            deutsche Unternehmen STRATO AG, Otto-Ostrowski-Straße 7, 10249 Berlin, Deutschland.<br/>
            Mehr über die Daten, die durch die Verwendung von STRATO verarbeitet werden, erfahren Sie in der
            Datenschutzerklärung auf<br/>
            <a href={'https://www.strato.de/datenschutz/'}>https://www.strato.de/datenschutz/</a>
        </Textblock>

        <h3 className={'text--headline-secondary'}>6. Ihre Rechte im Rahmen der DSGVO:</h3>

        <Textblock>
            Als betroffene Person haben Sie das Recht, jederzeit uns gegenüber Ihre Betroffenenrechte geltend zu machen.
            Dabei haben Sie insbesondere folgende Rechte:<br/>
            Sie haben das Recht, Auskunft darüber zu verlangen, ob und gegebenenfalls in welchem Umfang wir
            personenbezogene Daten zu Ihrer Person verarbeiten oder nicht. Im Fall einer Verarbeitung personenbezogener
            Daten zu Ihrer Person haben Sie ein Auskunftsrecht über insbesondere folgende Informationen: zu Ihrer Person
            gespeicherte Daten, Verarbeitungszweck(e), Datenkategorien, Empfänger, gegenüber denen wir Daten offenlegen,
            Dauer der Speicherung.<br/>
            <ul>
                <li>Sie haben das Recht, von uns unverzüglich die Berichtigung Ihrer Daten zu verlangen, sofern diese
                    unrichtig und/oder unvollständig sein sollten.
                </li>
                <li>Sie haben das Recht, von uns unverzüglich die Löschung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>Sie haben das Recht, eine uns gegenüber erteilte Einwilligung in die Verarbeitung Ihrer Daten
                    jederzeit zu widerrufen.
                </li>
                <li>Sie haben das Recht, die Verarbeitung Ihrer personenbezogenen Daten einschränken zu lassen.</li>
                <li>Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben,
                    in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und diese Daten einem
                    anderen Verantwortlichen zu übermitteln.
                </li>
            </ul>
            Auf Wunsch erhalten Sie unentgeltlich Auskunft über alle personenbezogenen Daten, die wir über Sie
            gespeichert haben. Selbstverständlich haben Sie die Möglichkeit, etwaige Fehler zu berichtigen, zeitlich
            überholte Informationen auf den neuesten Stand zu bringen oder die gespeicherten Daten löschen zu
            lassen.<br/>
            Sie haben das Recht, nach Maßgabe des Art. 21 Absatz 1 und Absatz 5 DSGVO aus Gründen, die sich aus Ihrer
            besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die
            aufgrund von Art. 6 Absatz 1 Buchstaben e) oder f) DSGVO erfolgt, mit Wirkung für die Zukunft Widerspruch
            einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.<br/>
            Für Beschwerden können Sie sich jederzeit an eine Datenschutz-Aufsichtsbehörde der EU oder der
            EU-Mitgliedstaaten wenden.<br/>
            <br/>
            GSP-Solutions UG (haftungsbeschränkt)<br/>
            Germany<br/>
            Stolzmühle 33<br/>
            90599 Dietenhofen<br/>
            <br/>
            Telefon: 09824/ 48 44 240<br/>
            Fax: 09824/ 48 44 239<br/>
            E-Mail: stephan@gspsolutions.de<br/>
            <br/>
            Stand 19. Juni 2023
        </Textblock>
    </>
}

import Textblock from '@/components/Textblock/Textblock'

export default function Page() {

    return <>
        <h1 className={'text--headline-main text--headline-main-accent'}>Impressum</h1>
        <h2 className={'text--headline-main'}>Angaben gemäß § 5 TMG:</h2>
        <h3 className={'text--headline-secondary'}>Verantwortlich für den Inhalt:</h3>
        <Textblock>
            GSP-Solutions UG (haftungsbeschränkt)<br/>
            Stolzmühle 33<br/>
            90599 Dietenhofen<br/>
            Germany<br/>
        </Textblock>
        <h3 className={'text--headline-secondary'}>Vertreten durch:</h3>
        <Textblock>
            Stephan Mederski, Geschäftsführer
        </Textblock>
        <h3 className={'text--headline-secondary'}> Kontakt: </h3>
        <Textblock>
            Telefon: 09824/ 48 44 240<br/>
            Fax: 09824/ 48 44 239<br/>
            E-Mail: stephan@gspsolutions.de<br/>
        </Textblock>
        <h3 className={'text--headline-secondary'}>Registereintrag:</h3>
        <Textblock>
            Eintragung im Handelsregister.<br/>
            Registergericht: AG Fürth<br/>
            Registernummer: HR B 16292
        </Textblock>
        <h3 className={'text--headline-secondary'}>Umsatzsteuer:</h3>
        <Textblock>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
            DE 306 528 263
        </Textblock>
        <h3 className={'text--headline-secondary'}>Streitschlichtung</h3>
        <Textblock>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href={'https://ec.europa.eu/consumers/odr'}>https://ec.europa.eu/consumers/odr</a>.<br/>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.<br/>
            Quelle: Impressum-Generator von anwalt.de
        </Textblock>
    </>
}

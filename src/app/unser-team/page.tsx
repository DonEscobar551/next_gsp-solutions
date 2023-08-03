import React from 'react'
import Textblock from '@/components/Textblock/Textblock'
import MailToButton from '@/components/NiceButton/MailToButton'

export default function Page() {
    return <>
        <h1 className={'text--headline-main text--headline-main-accent'}>
            Unser Team
        </h1>
        <h2 className={'text--headline-main'}>
            GSP-Solutions: Ihr Ansprechpartner rund um Datenschutz, Mitarbeiter-Schulungen und Organisationsaufbau und
            das Hinweisgeberschutzgesetz/Whistle Blower Protection Law
        </h2>
        <Textblock>
            Mein Name ist Stephan Mederski, ich bin Inhaber von GSP Solutions, zertifizierter Datenschutzbeauftragter,
            Dozent und Coach. In meiner Laufbahn habe ich vieles gesehen und gelernt, was funktioniert und was nicht.
            Mein Ziel ist es Unternehmen gesamtheitlich voranzubringen, Abläufe zu optimieren und alles unter der
            Berücksichtigung des Themas Datenschutz. An meiner Seite habe ich ein Team aus fachlich kompetenten
            Mitarbeiterinnen und Mitarbeitern, die jeweils ihre Spezialisierungen haben. In rechtlichen Themen können
            wir bei GSP Solutions außerdem auf ein breites Netzwerk an Anwälten und Richtern zurückgreifen, was
            besonders im Bereich Datenschutz und als Ihre Meldestelle im Sinne des Hinweisgeberschutzgesetzes von großem Wert
            ist.
        </Textblock>
        <Textblock>
            Aktuell betreuen wir rund 75 Arztpraxen im Verbund, über 50 Franchises sowie zahlreiche
            Unternehmen in den Bereichen Datenschutz, Mitarbeiter-Schulungen und
            Organisationsaufbau. Als extern bestellter Datenschutzbeauftragter sind wir im Stande, all
            Ihre Datenschutz-Themen zu verwalten und nach individuellem Bedürfnis zu bearbeiten. Bei
            uns bekommen Sie einen festen Ansprechpartner, der jederzeit mit Rat und Tat an Ihrer
            Seite steht und Ihr Unternehmen fast so gut kennt, als wäre er Teil Ihres Teams.
        </Textblock>
        <Textblock>
            Als Dozent liegt mir außerdem das Thema Wissenstransfer sehr am Herzen, weswegen wir
            bei GSP-Solutions bei Datenschutz-Themen auch immer auf Mitarbeiterschulungen setzen.
            Nur wer weiß, wo die Grenzen verlaufen und wie etwas funktioniert, kann sicher, effektiv und korrekt
            handeln. Mit Inkrafttreten des Hinweisgeberschutzgesetzes sind wir bereits für einen Teil unserer Kunden die
            interne (externe) Meldestelle. Die Kombination aus externer Datenschutzbeauftragter und Meldestelle bietet
            sich hervorragend an.
        </Textblock>
        <Textblock>
            Falls Sie unsicher sind, ob Sie einen Datenschutzbeauftragten bestellen müssen, ob Ihre Website
            datenschutzkonform ist, ob Sie eine grundsätzliche Prüfung benötigen oder ob das Hinweisgeberschutzgesetz
            auf Sie zutrifft:
        </Textblock>
        <MailToButton label={'Buchen Sie ein unverbindliches, kostenloses Erstgespräch'}></MailToButton>


        {/*    <h2 className={'text--headline-main'}></h2>*/}
        {/*<h3 className={'text--headline-secondary'}></h3>*/}
        {/*<Textblock></Textblock>*/}
    </>
}

import React from 'react'
import styles from './page.module.css'
import Textblock from '@/components/Textblock/Textblock'
import MailToButton from '@/components/NiceButton/MailToButton'

export default function Page() {
    return <>
        <h1 className={'text--headline-main text--headline-main-accent'}>
            Über uns
        </h1>
        <h2 className={'text--headline-main'}>
            GSP-Solutions: Ihr Ansprechpartner rund um Datenschutz, Mitarbeiter-Schulungen und Organisationsaufbau
        </h2>
        <Textblock>
            Mein Name ist Stephan Mederski, ich bin Inhaber von GSP-Solutions, zertifizierter
            Datenschutzbeauftragter, Dozent und Coach. Mit 50 wollte ich aus der Industrie raus sein
            und habe dafür meine Selbstständigkeit ausgebaut. In meiner Laufbahn habe ich vieles
            gesehen und gelernt, was funktioniert und was nicht. Heute ist es mein Ziel, Unternehmen
            gesamtheitlich voranzubringen, Abläufe zu optimieren und das alles ausgehend vom Thema
            Datenschutz. An meiner Seite habe ich ein Team aus fachlich kompetenten Mitarbeiterinnen
            und Mitarbeitern, die jeweils ihre Spezialisierungen haben. In rechtlichen Themen können
            wir bei GSP-Solutions außerdem auf ein breites Netzwerk an Anwälten und Richtern
            zurückgreifen, was besonders im Bereich Datenschutz von großem Wert ist.
        </Textblock>
        <Textblock>
            Aktuell betreuen wir rund 45 Arztpraxen, über 50 Franchise-Nehmer sowie zahlreiche
            Unternehmen in den Bereichen Datenschutz, Mitarbeiter-Schulungen und
            Organisationsaufbau. Als extern bestellter Datenschutzbeauftragter sind wir im Stande, all
            Ihre Datenschutz-Themen zu verwalten und nach individuellem Bedürfnis zu bearbeiten. Bei
            uns bekommen Sie einen festen Ansprechpartner, der jederzeit mit Rat und Tat an Ihrer
            Seite steht und Ihr Unternehmen fast so gut kennt, als wäre er Teil Ihres Teams.
        </Textblock>
        <Textblock>
            Als Dozent liegt mir außerdem das Thema Wissenstransfer sehr am Herzen, weswegen wir
            bei GSP-Solutions bei Datenschutz-Themen auch immer auf Mitarbeiterschulungen setzen.
            Nur wer weiß, wo die Grenzen verlaufen und wie etwas funktioniert, kann sicher, effektiv
            und korrekt handeln.
        </Textblock>
        <Textblock>
            Falls Sie unsicher sind, ob Sie einen Datenschutzbeauftragten bestellen müssen, ob Ihre
            Website datenschutzkonform ist oder Sie eine grundsätzliche Prüfung benötigen
        </Textblock>
        <MailToButton label={'Buchen Sie ein unverbindliches, kostenloses Erstgespräch'}></MailToButton>




        {/*    <h2 className={'text--headline-main'}></h2>*/}
        {/*<h3 className={'text--headline-secondary'}></h3>*/}
        {/*<Textblock></Textblock>*/}
    </>
}

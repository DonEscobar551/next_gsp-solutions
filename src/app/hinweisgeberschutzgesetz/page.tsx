import React from 'react'
import Textblock from '@/components/Textblock/Textblock'
import MailToButton from '@/components/NiceButton/MailToButton'

export default function Page() {
    return <>
        <h1 className={'text--headline-main text--headline-main-accent'}>Hinweisgeberschutzgesetz – Whistle Blower
            Protection Law</h1>
        <Textblock>
            Nach vielen Diskussionen – das Gesetz ging z.B. nicht durch den Bundesrat in erster Version – ist das auf
            Europäischer Ebene genannte Whistleblower Protection Law, seit Juli 2023 in Kraft.
        </Textblock>
        <Textblock>In Kürze:</Textblock>
        <Textblock>
            Mitarbeitende müssen sich an eine unabhängige Meldestelle des Unternehmens wenden können, um über Missstände
            zu kommunizieren. Diese Meldestelle unterliegt Vorgaben und Formalien, welche von dem Arbeitgeber
            eingehalten werden müssen. Unternehmen mit mindestens 250 Beschäftigten müssen die Vorgaben innerhalb von
            einem Monat nach Verkündigung des Gesetzes, also spätestens bis zum 2. Juli 2023 umgesetzt haben, wobei für
            den Fall, dass ein interner Meldekanal noch nicht eingerichtet oder betrieben wird, erst ab dem 1. Dezember
            2023 Sanktionen in Form von Bußgeldern drohen. Diese Bußgelder sollen, aller Voraussicht nach, bei 50.000 €
            für Einzelverstöße erhoben werden. Unternehmen mit 50 bis 249 Beschäftigten haben noch bis zum 17.
            Dezember 2023 Zeit, sollten aber schon Vorbereitungen treffen, damit dann die erforderlichen
            Hinweisgebersysteme schnell funktionsfähig sein werden.
        </Textblock>
        <Textblock>
            Gerne beraten wir Sie hierzu und bieten auch unseren entsprechenden Service – als Meldestelle Ihres
            Unternehmens – an.
            Im Übrigen bietet sich eine Art Kombination Datenschutzbeauftragter und Meldestelle für Sie an.
            Auch hier möchten wir mit Klarheit überzeugen und beraten Sie gerne über die Möglichkeiten für Ihren Betrieb
            bezüglich der optimalen Umsetzung.
        </Textblock>
        <MailToButton label={'Jetzt kostenloses Erstgespräch buchen'}></MailToButton>
    </>
}

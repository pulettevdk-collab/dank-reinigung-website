import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-[#5aec8b] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 mb-8">
          Impressum und Datenschutz
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Informationen über den Diensteanbieter.
            </p>
            <p className="text-gray-700 dark:text-slate-300">
              <strong>Ahileas-Kostas Vlahos und Alina Vlahos</strong>
              <br />
              D.A.N.K. Reinigung GbR
            </p>
            <p className="text-gray-700 dark:text-slate-300 mt-4">
              Steuernummer: 065/152/04642
            </p>
            <p className="text-gray-700 dark:text-slate-300 mt-4">
              Joachimsthaler Str. 5B,
              <br />
              16230 Chorin OT Golzow,
              <br />
              Deutschland
            </p>
            <p className="text-gray-700 dark:text-slate-300 mt-4">
              Tel.: 015111072738
              <br />
              E-Mail: info@dank-reinigung.de
            </p>
            <p className="text-gray-700 dark:text-slate-300 mt-4">
              Berufsbezeichnung: Gebäudereinigung
              <br />
              Verleihungsstaat: Deutschland
              <br />
              Link zur Webseite der Kammer:{" "}
              <a
                href="https://www.kh-barnim.de/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5aec8b] hover:underline"
              >
                https://www.kh-barnim.de/index.php
              </a>
            </p>
            <p className="text-gray-700 dark:text-slate-300 mt-4">
              <strong>Name und Anschrift</strong>
              <br />
              Kreishandwerkerschaft Barnim
              <br />
              -Körperschaft des öffentlichen Rechts-
              <br />
              Eberswalder Str. 33
              <br />
              16227 Eberswalde
            </p>
            <p className="text-gray-700 dark:text-slate-300 mt-4">
              Vertreten durch die Gesellschafter: Kerstin Rehfeldt
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
              Universalschlichtungsstelle
            </h2>
            <p className="text-gray-700 dark:text-slate-300">
              An einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle nehmen wir teil. Die zuständige
              Stelle ist die Universalschlichtungsstelle des Bundes, Zentrums
              für Schlichtung e.V., ansässig in der Straßburger Straße 8, 77694
              Kehl am Rhein (
              <a
                href="https://www.verbraucher-schlichter.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5aec8b] hover:underline"
              >
                https://www.verbraucher-schlichter.de
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
              EU-Streitschlichtung
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Gemäß Verordnung über Online-Streitbeilegung in
              Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über
              die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
              Verbraucher haben die Möglichkeit, Beschwerden an die Online
              Streitbeilegungsplattform der Europäischen Kommission unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5aec8b] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>{" "}
              zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb
              in unserem Impressum.
            </p>
            <p className="text-gray-700 dark:text-slate-300">
              Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit
              oder verpflichtet sind, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
              Haftung für Inhalte dieser Website
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Wir entwickeln die Inhalte dieser Website ständig weiter und
              bemühen uns korrekte und aktuelle Informationen bereitzustellen.
              Leider können wir keine Haftung für die Korrektheit aller Inhalte
              auf dieser Website übernehmen, speziell für jene, die seitens
              Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht
              verpflichtet, die von Ihnen übermittelten oder gespeicherten
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Unsere Verpflichtungen zur Entfernung von Informationen oder zur
              Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen
              bleiben auch im Falle unserer Nichtverantwortlichkeit davon
              unberührt.
            </p>
            <p className="text-gray-700 dark:text-slate-300">
              Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
              bitte wir Sie uns umgehend zu kontaktieren, damit wir die
              rechtswidrigen Inhalte entfernen können. Sie finden die
              Kontaktdaten im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
              Haftung für Links auf dieser Website
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Unsere Website enthält Links zu anderen Websites für deren Inhalt
              wir nicht verantwortlich sind. Haftung für verlinkte Websites
              besteht für uns nicht, da wir keine Kenntnis rechtswidriger
              Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch
              bisher nicht aufgefallen sind und wir Links sofort entfernen
              würden, wenn uns Rechtswidrigkeiten bekannt werden.
            </p>
            <p className="text-gray-700 dark:text-slate-300">
              Wenn Ihnen rechtswidrige Links auf unserer Website auffallen,
              bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im
              Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
              Urheberrechtshinweis
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
              unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die
              Inhalte dieser Website verbreiten, vervielfältigen oder verwerten
              wie zum Beispiel auf anderen Websites erneut veröffentlichen.
              Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der
              Inhalte unserer Seite rechtlich verfolgen.
            </p>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Sollten Sie auf dieser Webseite Inhalte finden, die das
              Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
            </p>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Alle Texte sind urheberrechtlich geschützt.
            </p>
            <p className="text-gray-700 dark:text-slate-300 text-sm italic">
              Quelle: Erstellt mit dem{" "}
              <a
                href="https://www.adsimple.de/datenschutz-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5aec8b] hover:underline"
              >
                Datenschutz Generator Deutschland
              </a>{" "}
              von AdSimple
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
              Datenschutzerklärung
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3 mt-6">
              Einleitung und Überblick
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Wir haben diese Datenschutzerklärung (Fassung
              29.06.2024-322822867) verfasst, um Ihnen gemäß der Vorgaben der
              Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren
              nationalen Gesetzen zu erklären, welche personenbezogenen Daten
              (kurz Daten) wir als Verantwortliche – und die von uns
              beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten,
              zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten
              Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu
              verstehen.
            </p>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              <strong>Kurz gesagt:</strong> Wir informieren Sie umfassend über
              Daten, die wir über Sie verarbeiten.
            </p>
            <p className="text-gray-700 dark:text-slate-300">
              Datenschutzerklärungen klingen für gewöhnlich sehr technisch und
              verwenden juristische Fachbegriffe. Diese Datenschutzerklärung
              soll Ihnen hingegen die wichtigsten Dinge so einfach und
              transparent wie möglich beschreiben. Soweit es der Transparenz
              förderlich ist, werden technische Begriffe leserfreundlich
              erklärt, Links zu weiterführenden Informationen geboten und
              Grafiken zum Einsatz gebracht. Wir informieren damit in klarer und
              einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten
              nur dann personenbezogene Daten verarbeiten, wenn eine
              entsprechende gesetzliche Grundlage gegeben ist.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3 mt-6">
              Anwendungsbereich
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Diese Datenschutzerklärung gilt für alle von uns im Unternehmen
              verarbeiteten personenbezogenen Daten und für alle
              personenbezogenen Daten, die von uns beauftragte Firmen
              (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten
              meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum
              Beispiel Name, E-Mail-Adresse und postalische Anschrift einer
              Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass
              wir unsere Dienstleistungen und Produkte anbieten und abrechnen
              können, sei es online oder offline. Der Anwendungsbereich dieser
              Datenschutzerklärung umfasst:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 mb-4 space-y-1">
              <li>
                alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
              </li>
              <li>Social Media Auftritte und E-Mail-Kommunikation</li>
              <li>mobile Apps für Smartphones und andere Geräte</li>
            </ul>
            <p className="text-gray-700 dark:text-slate-300">
              <strong>Kurz gesagt:</strong> Die Datenschutzerklärung gilt für
              alle Bereiche, in denen personenbezogene Daten im Unternehmen über
              die genannten Kanäle strukturiert verarbeitet werden. Sollten wir
              außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten,
              werden wir Sie gegebenenfalls gesondert informieren.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3 mt-6">
              Rechtsgrundlagen
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              In der folgenden Datenschutzerklärung geben wir Ihnen transparente
              Informationen zu den rechtlichen Grundsätzen und Vorschriften,
              also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns
              ermöglichen, personenbezogene Daten zu verarbeiten. Was das
              EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU)
              2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April
              2016.
            </p>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden
              Bedingungen zutrifft:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 mb-4 space-y-2">
              <li>
                <strong>Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO):
                Sie haben uns Ihre Einwilligung gegeben, Daten zu einem
                bestimmten Zweck zu verarbeiten.
              </li>
              <li>
                <strong>Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um
                einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu
                erfüllen, verarbeiten wir Ihre Daten.
              </li>
              <li>
                <strong>Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1
                lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung
                unterliegen, verarbeiten wir Ihre Daten.
              </li>
              <li>
                <strong>Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit.
                f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte
                nicht einschränken, behalten wir uns die Verarbeitung
                personenbezogener Daten vor.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3 mt-6">
              Speicherdauer
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Dass wir personenbezogene Daten nur so lange speichern, wie es für
              die Bereitstellung unserer Dienstleistungen und Produkte unbedingt
              notwendig ist, gilt als generelles Kriterium bei uns. Das
              bedeutet, dass wir personenbezogene Daten löschen, sobald der
              Grund für die Datenverarbeitung nicht mehr vorhanden ist.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3 mt-6">
              Rechte laut Datenschutz-Grundverordnung
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden
              Rechte, die Ihnen zustehen:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 mb-4 space-y-1">
              <li>Recht auf Auskunft (Artikel 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
              <li>Recht auf Löschung (Artikel 17 DSGVO)</li>
              <li>
                Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)
              </li>
              <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
              <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
              <li>Recht auf Beschwerde (Artikel 77 DSGVO)</li>
            </ul>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              <strong>Kurz gesagt:</strong> Sie haben Rechte – zögern Sie nicht,
              uns zu kontaktieren!
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-3 mt-6">
              Brandenburg Datenschutzbehörde
            </h3>
            <p className="text-gray-700 dark:text-slate-300 mb-2">
              Landesbeauftragte für Datenschutz: Dagmar Hartge
              <br />
              Adresse: Stahnsdorfer Damm 77, 14532 Kleinmachnow
              <br />
              Telefonnr.: 03 32 03/356-0
              <br />
              E-Mail-Adresse: poststelle@lda.brandenburg.de
              <br />
              Website:{" "}
              <a
                href="https://www.lda.brandenburg.de/lda/de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5aec8b] hover:underline"
              >
                https://www.lda.brandenburg.de/lda/de/
              </a>
            </p>

            <p className="text-gray-700 dark:text-slate-300 mt-8 mb-4">
              Alle Texte sind urheberrechtlich geschützt.
            </p>
            <p className="text-gray-700 dark:text-slate-300 text-sm italic">
              Quelle: Erstellt mit dem{" "}
              <a
                href="https://www.adsimple.de/datenschutz-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5aec8b] hover:underline"
              >
                Datenschutz Generator Deutschland
              </a>{" "}
              von AdSimple
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600 dark:text-slate-400 text-sm">
            © 2026 Dank Reinigung. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}

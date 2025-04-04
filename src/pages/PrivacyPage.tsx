
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacyverklaring – Aandelen Onder De Loep</h1>
          
          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground">Laatst bijgewerkt: 4-4-2025</p>
            
            <p className="mt-6">Wij hechten veel waarde aan de privacy van onze bezoekers en abonnees. In deze privacyverklaring leggen we uit welke gegevens we verzamelen, waarom we dat doen en hoe we ermee omgaan.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Welke gegevens verzamelen wij?</h2>
            <p>Wij kunnen de volgende gegevens verzamelen:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Naam en e-mailadres (bij inschrijving op onze nieuwsbrief of abonnement).</li>
              <li>Betalingsgegevens (bij een betaald abonnement, verwerkt via een externe betalingsprovider).</li>
              <li>IP-adres en browsergegevens (voor analytische doeleinden en beveiliging).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Waarom verzamelen wij deze gegevens?</h2>
            <p>Wij gebruiken je gegevens voor de volgende doeleinden:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Het leveren van onze diensten, zoals toegang tot de aandelenanalyses en kennisportaal.</li>
              <li>Het versturen van nieuwsbrieven en updates.</li>
              <li>Het verbeteren van onze website en diensten op basis van gebruikersgedrag.</li>
              <li>Het naleven van wettelijke verplichtingen.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Hoe beschermen wij je gegevens?</h2>
            <p>Wij nemen passende beveiligingsmaatregelen om misbruik, verlies, onbevoegde toegang en wijziging van je gegevens te voorkomen. Gegevens worden versleuteld opgeslagen en alleen noodzakelijke medewerkers hebben toegang.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Delen wij gegevens met derden?</h2>
            <p>Wij delen je gegevens niet met derden, behalve wanneer dit nodig is voor:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Betalingsverwerking (via een veilige betalingsprovider).</li>
              <li>Het verzenden van e-mails (bijvoorbeeld via een nieuwsbriefdienst zoals Mailchimp).</li>
              <li>Wettelijke verplichtingen (bij verzoeken van autoriteiten).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Cookies en tracking</h2>
            <p>Wij gebruiken cookies om onze website goed te laten functioneren en statistieken te verzamelen. Je kunt je cookie-instellingen aanpassen in je browser.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Jouw rechten</h2>
            <p>Je hebt het recht om:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Je gegevens in te zien, aan te passen of te laten verwijderen.</li>
              <li>Bezwaar te maken tegen gegevensverwerking.</li>
              <li>Je toestemming in te trekken (bijvoorbeeld voor de nieuwsbrief).</li>
            </ul>
            <p>Voor verzoeken kun je contact met ons opnemen via: info@aandelenonderdeloep.nl</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Wijzigingen in deze privacyverklaring</h2>
            <p>Wij kunnen deze privacyverklaring van tijd tot tijd bijwerken. De meest recente versie is altijd beschikbaar op onze website.</p>
            <p className="mt-4">Heb je vragen? Neem gerust contact met ons op via info@aandelenonderdeloep.nl</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;


import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookieverklaring – Aandelen Onder De Loep</h1>
          
          <div className="prose max-w-none">
            <p>Op onze website maken wij gebruik van cookies en vergelijkbare technologieën om uw gebruikerservaring te verbeteren en om inzicht te krijgen in het gebruik van onze site. In deze cookieverklaring informeren wij u over het gebruik van deze technologieën.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Wat zijn cookies?</h2>
            <p>Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u onze website bezoekt. Ze helpen ons om onze website goed te laten functioneren, uw voorkeuren te onthouden en statistische gegevens te verzamelen.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Welke cookies gebruiken wij?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Functionele cookies:</strong> Deze zijn essentieel voor het correct functioneren van onze website. Ze onthouden bijvoorbeeld uw inloggegevens en voorkeuren.</li>
              <li><strong>Analytische cookies:</strong> Met deze cookies verzamelen wij informatie over het gebruik van onze website, zoals bezoekersaantallen en populaire pagina's. Dit helpt ons om de website te verbeteren.</li>
              <li><strong>Tracking cookies:</strong> Deze cookies volgen uw surfgedrag en stellen ons in staat om content en advertenties af te stemmen op uw interesses.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies van derden</h2>
            <p>Wij kunnen gebruikmaken van diensten van derden die ook cookies plaatsen, zoals analytische diensten en sociale media-platforms. Wij hebben geen controle over deze cookies en verwijzen u naar de privacyverklaringen van deze derden voor meer informatie.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Uw keuzes</h2>
            <p>Bij uw eerste bezoek aan onze website wordt u gevraagd om akkoord te gaan met het plaatsen van cookies. U kunt uw cookie-instellingen op elk moment wijzigen via de instellingen van uw browser. Houd er rekening mee dat het uitschakelen van cookies de functionaliteit van onze website kan beïnvloeden.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Wijzigingen in deze verklaring</h2>
            <p>Wij behouden ons het recht voor om deze cookieverklaring te wijzigen. Wij raden u aan om deze verklaring regelmatig te raadplegen voor de meest actuele informatie.</p>
            
            <hr className="my-8" />
            
            <p>Voor meer informatie over hoe wij omgaan met uw gegevens, verwijzen wij u naar onze <a href="/privacy" className="text-finance-blue hover:underline">Privacyverklaring</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;

import { useLanguage } from "./hooks/useLanguage";
import { Header } from "./components/Header/Header";
import { ConferenceBanner } from "./components/ConferenceBanner/ConferenceBanner";
import { Hero } from "./components/Hero/Hero";
import { ConferenceOverview } from "./components/ConferenceOverview/ConferenceOverview";
import { ConferenceHighlights } from "./components/ConferenceHighlights/ConferenceHighlights";
import { Committee } from "./components/Committee/Committee";
import { Program } from "./components/Program/Program";
import { Papers } from "./components/Papers/Papers";
import { Topics } from "./components/Topics/Topics";
import { Publication } from "./components/Publication/Publication";
import { ImportantDates } from "./components/ImportantDates/ImportantDates";
import { Guidelines } from "./components/Guidelines/Guidelines";
import { Acknowledgment } from "./components/Acknowledgment/Acknowledgment";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  const { content } = useLanguage();

  return (
    <>
      <Header header={content.header} />
      <main>
        <ConferenceBanner alt={content.banner.alt} />
        <Hero hero={content.hero} />
        <ConferenceOverview overview={content.overview} />
        <ConferenceHighlights highlights={content.highlights} />
        <Committee committee={content.committee} />
        <Program program={content.program} />
        <Papers papers={content.papers} />
        <Topics topics={content.topics} />
        <Publication publication={content.publication} />
        <ImportantDates dates={content.dates} />
        <Guidelines guidelines={content.guidelines} />
        <Acknowledgment acknowledgment={content.acknowledgment} />
        <Contact contact={content.contact} />
      </main>
      <Footer footer={content.footer} />
    </>
  );
}

export default App;

import * as React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Text/Header";
import { Paragraph } from "../components/Text/Paragraph";
import { Section } from "../components/Section/Section";
import image1 from "../images/akrobatyka-1.png";
import image3 from "../images/akrobatyka-3.png";
import image4 from "../images/akrobatyka-4.png";
import image5 from "../images/akrobatyka-5.png";
import image6 from "../images/akrobatyka-6.png";
import favicon from "../images/favicon.ico";

import "../styles/fonts.scss";
import "../styles/index.scss";

const IndexPage = () => {
    return (
        <main>
            <Helmet>
                <title>Arkobatyka CRC</title>{" "}
                <meta name="icon" href={favicon} />
            </Helmet>
            <Navbar active="/" />
            <div className="main-header">
                <Header size={1}>Akrobatyka</Header>
            </div>
            <Section>
                <Paragraph>
                    Akrobatyka sportowa to piękna i widowiskowa dyscyplina
                    sportowa polegająca na wykonywaniu układów, elementów i
                    piramid gimnastycznych, których cechami dominującymi są
                    siła, równowaga, gibkość i koordynacja ruchowa.Początkujący adepci nabywają kolejno podstawowe umiejętności
                    akrobatyczne takie jak: przewrót w przód, przewrót w tył,
                    mostek, szpagat, stanie na rękach, stanie na głowie,
                    przerzut bokiem tzw. gwiazda, waga, przejście w przód i w
                    tył. 
                </Paragraph>
                <img src={image1} alt="" />
            </Section>
            <Section>
                <Paragraph>
                    Następnie uczą się trudniejszych ewolucji takich jak:
                    przerzuty, rundaki, salta w przód, salta w tył, machówki,
                    fliki itp… Kolejny etap to nauka układów akrobatycznych oraz piramid
                    zespołowych (w dwójkach i trójkach) oraz nauka układów
                    choreograficznych do muzyki. Dzięki regularnym treningom
                    dzieci wzmacniają się, podnoszą sprawność fizyczną i
                    wydolność organizmu. 
                </Paragraph>
                <img src={image3} alt="" style={{width: '35%', height: 'auto'}} />
            </Section>
            <Section>
                <Paragraph>
                    Rozciąganie bardzo dobrze rozluźnia i
                    wycisza, ćwiczenia siłowe i dynamiczne pomagają wyrzucić z
                    siebie emocjonalne napięcie i energię, a elementy zabawowe
                    cieszą i relaksują dzieci. Akrobatyka wdraża zdrowy i aktywny styl życia dzieci, dba o
                    wszechstronny rozwój całego ciała, zapobiega wadom postawy,
                    kształtuje piękną sylwetkę i poprawia estetykę ruchu.
                </Paragraph>
                <img src={image4} alt="" />
            </Section>
            <Section>
                <Paragraph>
                    
                    Rozwija nie tylko ciało, ale i umysł. Uczy pokonywania przeszkód i słabości, współpracy w grupie,
                    konsekwencji w dążeniu do celu i odpowiedzialności za
                    współćwiczącego. Zdolność władania własnym ciałem dodaje
                    pewności siebie, poprawia samopoczucie, podnosi samoocenę i
                    kształtuje silny charakter. 
                </Paragraph>
                <img src={image5} alt="" />
            </Section>
            <Section>
                <Paragraph>
                    Cel treningu zakłada też szkolenie sportowe młodych talentów
                    i współzawodnictwo sportowe. Klub CRC jest członkiem
                    Polskiego Związku Gimnastycznego i prowadzi szkolenie w
                    oparciu o Program Klasyfikacyjny Polskiego Związku
                    Gimnastycznego.                    Zajęcia prowadzą byli mistrzowie tej
                    dyscypliny, którzy dziś są licencjonowanymi trenerami i
                    sędziami Polskiego Związku Gimnastycznego.
                </Paragraph>
                <img src={image6} alt="" />
            </Section>
        </main>
    );
};

export default IndexPage;

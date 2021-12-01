import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Text/Header";
import fbLogo from "../images/fb-logo.png";
import favicon from "../images/favicon.ico";

import "../styles/contact.scss";

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Arkobatyka CRC - Kontakt</title>
                <meta name="icon" href={favicon} />
            </Helmet>

            <Navbar active="/contact" />
            <div className="page-wrapper">
                <Header size={1}>Klub Sportowy CRC LESZNO</Header>
                <div className="info">
                    Klub zrzeszony w Polskim Związku Gimnastycznym, nr licencji
                    klubowej 108 AKRO.
                </div>
                <div className="subheader">
                    {" "}
                    <Header size={4}>Kontakt i informacje:</Header>
                </div>
                <div className="content-wrapper">
                    <div className="content-column">
                        <div className="content-row">
                            <strong>Magdalena Chudzinska – Nowak&nbsp;</strong>{" "}
                            tel. 604 814 128 <strong>Licencje:</strong>
                            4/T/010 - Trener
                            <br /> 4/S/003 - Sędzia
                            <a
                                href="https://www.facebook.com/magdalena.chudzinskanowak"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="fb-logo"
                                    src={fbLogo}
                                    alt="facebook"
                                />
                            </a>
                        </div>
                        <div className="content-row">
                            <strong>Mateusz Nowak&nbsp;</strong> tel. 501 031
                            374 <br />
                            <strong>Licencje:</strong>
                            4/T/174 - Trener
                            <br />
                            4/S/194 - Sędzia
                        </div>
                    </div>
                    <div className="content-column">
                        <div className="content-row">
                            <strong>Email:&nbsp;</strong>
                            <a href="mailto:biuro@crc.pl">biuro@crc.pl</a>
                        </div>
                        <div className="content-row">
                            <strong>Adres:</strong>
                            ul. Szyszkowa 10,
                            <br />
                            64-100 Leszno, woj. Wielkopolskie
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <div className="subheader">
                        <Header size={4}>Nasze oddziały:</Header>
                    </div>
                    <div className="sections-list">
                        <div className="list-item">
                            Rawicz - AKROBATYKA SPORTOWA RAWICZ{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/profile.php?id=100046604695921"
                            >
                                <img
                                    className="fb-logo"
                                    src={fbLogo}
                                    alt="facebook"
                                />
                            </a>
                        </div>
                        <div className="list-item">
                            Gostyń – AKROBATYKA SPORTOWA GOSTYŃ
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/Akrobatyka-Sportowa-Gosty%C5%84-249772775471875"
                            >
                                <img
                                    className="fb-logo"
                                    src={fbLogo}
                                    alt="facebook"
                                />
                            </a>
                        </div>
                        <div className="list-item">
                            Kościan – AKROBATYKA SPORTOWA KOŚCIAN
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/Akrobatyka-Sportowa-Ko%C5%9Bcian-2043950419169504"
                            >
                                <img
                                    className="fb-logo"
                                    src={fbLogo}
                                    alt="facebook"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;

import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Stack } from "../components/Gallery/Stack/Stack";

import "../styles/gallery.scss";

const GalleryPage = () => {
    const zawodyPaths = require.context(
        `/public/img/zawody`,
        true,
        /.(?:jpe?g|png|gif)\b/
    );
    const zawodyImages = zawodyPaths
        .keys()
        .map((key) => `/img/zawody/${key.slice(2)}`);

    const obozyPaths = require.context(
        `/public/img/obozy`,
        true,
        /.(?:jpe?g|png|gif)\b/
    );
    const obozyImages = obozyPaths
        .keys()
        .map((key) => `/img/obozy/${key.slice(2)}`);

    const pokazyPaths = require.context(
        `/public/img/pokazy`,
        true,
        /.(?:jpe?g|png|gif)\b/
    );
    const pokazyImages = pokazyPaths
        .keys()
        .map((key) => `/img/pokazy/${key.slice(2)}`);

    const filmyPaths = require.context(
        `/public/img/filmy`,
        true,
        /.(?:jpe?g|mp4|png|gif)\b/
    );
    const films = filmyPaths.keys().map((key) => `/img/filmy/${key.slice(2)}`);
    return (
        <>
            <Navbar active="/gallery" />
            <div className="page-wrapper">
                <div className="gallery-grid">
                    <div className="images-row">
                        <div className="images-cell">
                            <Stack title="Obozy" images={obozyImages} />
                        </div>
                        <div className="images-cell">
                            <Stack title="Zawody" images={zawodyImages} />
                        </div>
                    </div>
                    <div className="images-row">
                        <div className="images-cell">
                            <Stack
                                title={`Ćwiczenia, piramidy,${'\n'}pokazy`}
                                images={pokazyImages}
                            />
                        </div>
                        <div className="images-cell">
                            <Stack title="Filmy" images={films} movie />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryPage;

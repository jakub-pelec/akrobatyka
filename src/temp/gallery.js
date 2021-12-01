import React from "react";
import { graphql } from "gatsby";
import { Navbar } from "../components/Navbar/Navbar";
import { Stack } from "../components/Gallery/Stack/Stack";

import "../styles/gallery.scss";

const GalleryPage = (props) => {
    const dirs = props.data.allDirectory.nodes
        .map((node) => node.relativePath)
        .filter((dir) => !!dir);
    return (
        <>
            <Navbar active="/gallery" />
            <div className="gallery-grid">
                {dirs.map((dir) => (
                    <div className="cell">
                        <Stack dir={dir} title={dir} />
                    </div>
                ))}
            </div>
        </>
    );
};

export const directoriesQuery = graphql`
    query DirectoriesQuery {
        allDirectory {
            nodes {
                relativePath
            }
        }
    }
`;

export default GalleryPage;

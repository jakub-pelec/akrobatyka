import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Popup } from "../../Popup/Popup";

import "./Stack.scss";

export const Stack = ({ dir, title }) => {
    const [open, toggle] = useState(false);

    const data = useStaticQuery(graphql`
        query ImagesQuery {
            allFile {
                edges {
                    node {
                        relativePath
                        relativeDirectory
                        base
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const imagesToRender = data.allFile.edges.filter(
        (edge) => edge.node.relativeDirectory === dir
    );
    const node = imagesToRender[0].node;
    return (
        <div
            role="button"
            onClick={() => toggle(!open)}
            className={`stack ${open ? "open" : "closed"}`}
        >
            <Img
                className="gallery-images-stack"
                fluid={node.childImageSharp.fluid}
                alt={node.base.split(".")[0]}
            />
            <div>{title}</div>
            <Popup images={imagesToRender} open={open} />
        </div>
    );
};

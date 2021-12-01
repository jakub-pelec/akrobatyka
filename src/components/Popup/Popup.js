import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Img from "gatsby-image";

import "./Popup.scss";

export const Popup = ({ images, open }) => {
    const getWrapperClassName = () => {
        switch (images.length) {
            case 1:
                return "col-1";
            case 2:
                return "col-2";
            default:
                return "col-3";
        }
    };
    return (
        <Dialog open={open}>
            <DialogContent>
                <div
                    className={`extended-images-wrapper ${getWrapperClassName()}`}
                >
                    {images.map((image) => (
                        <div className="extended-image-wrapper">
                            <Img
                                className="gallery-image"
                                fluid={image.node.childImageSharp.fluid}
                                alt={image.node.base.split(".")[0]}
                            />
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

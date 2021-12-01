import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

import "./Popup.scss";

export const Popup = ({ images, open, movie }) => {
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
                    role="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                >
                    {images.map((image) => (
                        <div className="extended-image-wrapper">
                            {movie ? (
                                <video controls>
                                    <source src={image} type="video/mp4" />
                                    Your browser doesn't support movies
                                </video>
                            ) : (
                                <img src={image} />
                            )}
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

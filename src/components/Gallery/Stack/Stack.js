import React, { useState } from "react";
import { Popup } from "../../Popup/Popup";

import "./Stack.scss";

export const Stack = ({ title, images, movie }) => {
    const [open, toggle] = useState(false);

    return (
        <div
            role="button"
            onClick={() => toggle(!open)}
            className={`stack ${open ? "open" : "closed"}`}
        >
            <img
                className="gallery-images-stack"
                src={
                    movie
                        ? images.find((el) => el.indexOf(".jpg") !== -1)
                        : images[0]
                }
            />
            <div>{title}</div>
            <Popup
                images={
                    movie
                        ? images.filter((el) => el.indexOf(".jpg") === -1)
                        : images
                }
                open={open}
                movie={movie}
            />
        </div>
    );
};

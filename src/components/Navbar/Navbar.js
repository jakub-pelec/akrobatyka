import React from "react";
import { navigate } from "gatsby";
import { Button } from "../Button/Button";

import logo from "../../images/logo.png";
import "./Navbar.scss";

export const Navbar = ({ active }) => {
    const tiles = [
        {
            title: "Strona główna",
            uri: "/",
        },
        {
            title: "Galeria",
            uri: "/gallery",
        },
        {
            title: "Kontakt",
            uri: "/contact",
        },
    ];
    return (
        <nav>
            <div className="buttons-container">
                {tiles.map((tile) => (
                    <Button
                        onClick={() => navigate(tile.uri)}
                        active={active === tile.uri}
                    >
                        {tile.title}
                    </Button>
                ))}
            </div>
            <a href='/'><img src={logo} className="logo-image" alt="logo" /></a>
        </nav>
    );
};

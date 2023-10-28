import { useState } from "react";
import NavButton from "./NavButton";
import darkModeIcon from "../../assets/dark-mode-icon.svg";
import lightModeIcon from "../../assets/light-mode-icon.svg";
import styles from "./Header.module.css";

export default function Header({ onChangeApp, activeApp }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function themeChangeHandler() {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    }

    return (
        <header className={styles.header_nav}>
            <h1 style={{ color: isDarkMode ? "white" : "black" }}>
                Assignment
            </h1>

            <menu className={styles.header_nav_menu}>
                <NavButton
                    appName="Todo"
                    onChangeApp={onChangeApp}
                    activeApp={activeApp}
                />

                <NavButton
                    appName="Temperature Converter"
                    onChangeApp={onChangeApp}
                    activeApp={activeApp}
                />
                <NavButton
                    appName="Registration"
                    onChangeApp={onChangeApp}
                    activeApp={activeApp}
                />
            </menu>

            <div className={styles.theme} onClick={themeChangeHandler}>
                {!isDarkMode ? (
                    <img src={darkModeIcon} alt="dark-mode" />
                ) : (
                    <img src={lightModeIcon} style={{ filter: "invert(1)" }} />
                )}
            </div>
        </header>
    );
}

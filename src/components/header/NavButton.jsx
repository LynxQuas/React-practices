import styles from "./Header.module.css";
export default function NavButton({ appName, onChangeApp, activeApp }) {
    function activeHandler() {
        onChangeApp(appName);
    }

    return (
        <li>
            <button
                onClick={activeHandler}
                className={appName === activeApp ? styles.selected : ""}
            >
                {appName}
            </button>
        </li>
    );
}

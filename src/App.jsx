import { Fragment, useState } from "react";

import Header from "./components/header/Header";
import Todo from "./components/Todo/Todo";
import Temperature from "./components/Temperature/Temperature";
import Registration from "./components/Registration/Registration";

export default function App() {
    const [app, setApp] = useState("");

    function appChangeHandler(appName) {
        setApp(appName);
    }

    return (
        <Fragment>
            <Header onChangeApp={appChangeHandler} activeApp={app} />

            {!app && (
                <h1 style={{ color: "#085580", textAlign: "center" }}>
                    Please Choose an App.
                </h1>
            )}

            {app === "Todo" && <Todo />}
            {app === "Temperature Converter" && <Temperature />}
            {app === "Registration" && <Registration />}
        </Fragment>
    );
}

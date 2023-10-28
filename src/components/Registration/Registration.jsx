import { useState } from "react";
import RegisterForm from "./RegisterForm";
import RegisterData from "./RegisterData";

let userData = {};

export default function Registration() {
    const [isRegister, setIsRegister] = useState(false);

    function handleSubmit(data) {
        event.preventDefault();

        userData = { ...data };

        setIsRegister(true);
    }

    function registerAgain() {
        setIsRegister(false);
    }

    return (
        <section>
            {!isRegister ? (
                <RegisterForm handleSubmit={handleSubmit} />
            ) : (
                <RegisterData
                    userData={userData}
                    registerAgain={registerAgain}
                />
            )}
        </section>
    );
}

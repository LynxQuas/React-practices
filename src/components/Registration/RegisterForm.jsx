import { useState } from "react";

import styles from "./Registration.module.css";

import PhoneNumberInput from "./PhoneNumberInput";
export default function RegisterForm({ handleChange, handleSubmit }) {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        color: "#ffffff",
        textColor: "#000000",
    });

    function handleChange(event, field) {
        setUserData((prevData) => ({
            ...prevData,
            [field]: event.target.value?.trim(),
        }));
    }

    return (
        <form
            className={styles.registration_form}
            onSubmit={(e) => {
                handleSubmit(userData);
            }}
        >
            <div className={styles.nameInputs}>
                <input
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={(event) => handleChange(event, "firstName")}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(event) => handleChange(event, "lastName")}
                    required
                />
            </div>

            <input
                type="email"
                placeholder="Email"
                required
                value={userData.email}
                onChange={(event) => handleChange(event, "email")}
            />

            <PhoneNumberInput onChange={handleChange} />

            <div className={styles.color}>
                <label htmlFor="color">Choose Background Color: </label>
                <input
                    type="color"
                    id="color"
                    value={userData.color}
                    onChange={(event) => handleChange(event, "color")}
                />
            </div>

            <div className={styles.color}>
                <label htmlFor="text-color">Choose Text Color: </label>
                <input
                    type="color"
                    id="text-color"
                    value={userData.textColor}
                    onChange={(event) => handleChange(event, "textColor")}
                />
            </div>

            <button>Register</button>
        </form>
    );
}

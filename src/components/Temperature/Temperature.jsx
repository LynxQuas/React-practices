import { useState } from "react";
import styles from "./Temperature.module.css";

export default function Temperature() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    function celsiusChangeHandler(event) {
        const cel = event.target.value;

        const convertedValue = cel !== "" ? cel * (9 / 5) + 32 : 0;
        setCelsius(cel);
        setFahrenheit(convertedValue.toFixed(3));
    }
    function fahrenheitChangeHandler(event) {
        const fah = event.target.value;

        const convertedValue = fah !== "" ? (fah - 32) * (5 / 9) : 0;
        setCelsius(convertedValue.toFixed(3));
        setFahrenheit(fah);
    }

    return (
        <section className={styles.temperature_container}>
            <div className={styles.temperature}>
                <div className={styles.titles}>
                    <h3>Celsius</h3>

                    <h3>Fahrenheit</h3>
                </div>

                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <input
                            type="number"
                            inputMode="number"
                            value={celsius}
                            onChange={celsiusChangeHandler}
                        />
                        <span>°C</span>
                    </div>

                    <div className={styles.input}>
                        <input
                            type="number"
                            value={fahrenheit}
                            inputMode="numeric"
                            onChange={fahrenheitChangeHandler}
                        />
                        <span>°F</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

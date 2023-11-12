import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberInput = ({ onChange }) => {
    const handlePhoneChange = (value) => {
        onChange({ target: { value: value } }, "phone");
    };

    return (
        <div>
            <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="MM"
                onChange={handlePhoneChange}
                requried="true"
            />
        </div>
    );
};

export default PhoneNumberInput;

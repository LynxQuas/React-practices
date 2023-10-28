import style from "./RegisterData.module.css";
export default function RegisterData({ userData, registerAgain }) {
    return (
        <div
            className={style.registration_result}
            style={{
                backgroundColor: userData.color,
            }}
        >
            <span className={style.nameContainer}>
                Full Name:{" "}
                <span
                    style={{
                        color: userData.textColor,
                    }}
                >
                    {userData.firstName + " " + userData.lastName}
                </span>
            </span>

            <span className={style.nameContainer}>
                Email:{" "}
                <span
                    style={{
                        color: userData.textColor,
                    }}
                >
                    {userData.email}
                </span>{" "}
            </span>
            <span className={style.nameContainer}>
                Phone Number:{" "}
                <span
                    style={{
                        color: userData.textColor,
                    }}
                >
                    {userData.phone}
                </span>
            </span>

            <button className={style.back} onClick={registerAgain}>
                back to form
            </button>
        </div>
    );
}

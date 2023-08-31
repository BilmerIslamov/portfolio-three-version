import * as React from "react";
import Alert from "@mui/material/Alert";
import { useContext } from "react";
import Context from "../context/Context";

const Info = () => {
    const { Alert_plus, SentAlert, InfoAlert, CopyMessage } = useContext(Context);
    return (
        <>
            <section className="info">
                <Alert
                    id="alert_1"
                    className={`info_alert info_alert_1 ${Alert_plus ? "active" : ""}`}
                    severity="error"
                >
                    Please do not start the word with an empty cell
                </Alert>
                <Alert
                    id="alert_2"
                    className={`info_alert info_alert_2 ${InfoAlert ? "active" : ""}`}
                    severity="info"
                >
                    You can contact me on this page
                </Alert>
                <Alert
                    id="alert_3"
                    className={`info_alert info_alert_3 ${SentAlert ? "active" : ""}`}
                    severity="success"
                >
                    Your message has been sent, you will receive a reply shortly
                </Alert>
                <Alert
                    id="alert_4"
                    className={`info_alert info_alert_4 ${CopyMessage ? "active" : ""}`}
                    severity="success"
                >  
                    Copied to clipboard!
                </Alert>
            </section>
        </>
    );
};

export default Info;

import React from "react";
import "./styles.css";
import { useUser } from "../../../services/UserContext";


export default function ChartBoxFill({userSms}) {
    const { messages } = useUser();
    console.log(messages, 'messages')
    return(
        <div className="cointainer-menssager">
            <p>{userSms}</p>
          { messages && messages.map((msg, index) => {
                <div key={index}>
                    {msg}
                </div>
            })}
        </div>
    );

}
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
    // same as backend and camel case
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleMessage = async (e) => {
        e.preventDefault();//whenever message is sent so that pages doent refresh

        //thisused when sending the form
        //send it to backend  to message Schema 
        try {
            await axios
                .post(
                    "https://hospital-management-backend-rv8x.onrender.com/api/v1/message/send",
                    { firstName, lastName, email, phone, message },
                    {
                        withCredentials: true,
                        headers: { "Content-Type": "application/json" },
                    }
                )//once the form is submitted to the backed through axios if success then send the response message and refresh all the form credentials 
                .then((res) => {
                    toast.success(res.data.message);
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <div className="container form-component message-form">
                <h2>Send Us A Message</h2>
                {/* /* {this is the form}  */}
                <form onSubmit={handleMessage}>
                    <div>
                        {/* firstName */}
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <textarea
                        rows={7}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    {/* little css */}
                    <div style={{ justifyContent: "center", alignItems: "center" }}>
                        <button type="submit">Send</button>
                    </div>
                </form>
                <img src="/Vector.png" alt="vector" />
            </div>
        </>
    );
};

export default MessageForm;
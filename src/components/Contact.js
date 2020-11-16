import React from 'react';
import ReactDOM from 'react-dom';
import "./Contact.css"

function Contact(props) {
    

    return (
        <div className="Contact">
            <img className="avatar" alt = "" src={props.avatar} />
            <div>
                <p className="name">{props.name}</p>
                <div className="status">

                    <div className={props.online ? "status-online" : "status-offline"}></div>
                    <p className="status-text">{props.online ? "Online" : "Offline"}</p>

                </div>
            </div>
        </div>
    );
}

const element = (
    <div>
        <Contact />
    </div>
);

ReactDOM.render(element, document.getElementById('root'));


export default Contact;

import React from "react";

const EventsComponent = () => {
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button style={{color: 'pink'}}
                onClick={() => {
                    alert("Bienvenido a la página oficial JB")
                }}
            > Info Aquí </button>
        </div>
    );
};

export default EventsComponent;
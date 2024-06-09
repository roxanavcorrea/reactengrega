import React from "react";
import { grid } from "ldrs"; 


const LoaderComponents = () => {
    grid.register()

    return (
        <div style={{ width: "100%", height: "50%", margin: "auto", color: "pink" }}> 
            <lgrid
                size="60"
                speed="1.5"
                color="black"
            ></lgrid>
        </div>
    );
};

export default LoaderComponents;


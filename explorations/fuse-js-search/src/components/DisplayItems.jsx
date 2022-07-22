import React from "react";

const DisplayItems = ({ input }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5em", fontSize: "0.75em", paddingInline: "1em"}}>
            <h3 style={{ width: "100%" }}>Items: { input.length }</h3>
            {
                input.map((item) => (
                    <div style={{ border: "1px solid black", display: "flex", flexDirection: "column", paddingInline: ".5em" }}>
                        <p>Title: {item.title}</p>
                        <p>Author: {item.author.firstName} {item.author.lastName}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayItems;
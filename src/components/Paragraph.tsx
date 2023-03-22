import React from "react";

const Paragraph = (props: { children: React.ReactNode}) => {
    return (
        <p style={{ margin: "3em auto"}}>
            {props.children}
        </p>
    )
}

export default Paragraph

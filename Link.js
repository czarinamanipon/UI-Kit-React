import React from "react";

export default function Link(props){
    // console.log(props);
    const {children, href, disabled} = props;
    return <a href={href} className ="ui-link">{children}</a>;
}
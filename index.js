import React from "react";
import {render} from "react-dom";
import Link from "./Link.js";
import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";

function App() {
    return (<>
        <Container>
            <Link href="https://react-tutorial.app">Learn more about React</Link>
            <Button disabled={false}>Login</Button>
            <Input placeholder="Full Name" name="full_name" />
        </Container>
    </>);
}

render(<App />, document.querySelector("#react-root"));

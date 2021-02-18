import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            Hello
            <br />
            <Link to="/some">Linked</Link>
        </div>
    );
};

export default Home;
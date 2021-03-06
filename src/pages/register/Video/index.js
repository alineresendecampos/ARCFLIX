import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function RegisterVideo() {
    return (
        <PageDefault>
            <h1>Register a new video</h1>

            <Link to='/register/category'>
                Register new category
            </Link>
        </PageDefault>
    )
}

export default RegisterVideo;
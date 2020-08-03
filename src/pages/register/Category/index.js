import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function RegisterCategory() {
    return (
        <PageDefault>
            <h1>Register a new category</h1>

            <Link to='/'>
                go home
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory;
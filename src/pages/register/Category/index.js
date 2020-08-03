import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function RegisterCategory() {
    return (
        <PageDefault>
            <h1>Register a new category</h1>
            <form>
                <label>
                    Name:
                    <input type="text" />
                </label>

                <button>
                    Register
                </button>
            </form>


            <Link to='/'>
                Return home
            </Link>
        </PageDefault>
    )
}

export default RegisterCategory;
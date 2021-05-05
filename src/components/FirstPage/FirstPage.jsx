import React from "react";
import {NavLink} from "react-router-dom";

function FirstPage(props) {

    return (
        <>
            <div className="fistPage__basket">
                <NavLink className="btn btn--blue" to="/second_page">Корзина</NavLink>
            </div>

            <div className="fistPage__products">
                {props.products}
            </div>
        </>
    )
}

export default FirstPage;
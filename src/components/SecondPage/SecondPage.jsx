import React from "react";
import {NavLink} from "react-router-dom";
import {getTotalPrice} from "../../writtenRedux/basketReducer";
import {changeNumber} from "../../writtenRedux/cardInfoReducer";

function SecondPage(props) {

    let getCard = (value) => {
        props.getCardContainer(value.currentTarget.value)
    }

    let nextCardNumber = () => {
        props.dispatch(changeNumber());
    }

    return (
        <>
            <div className="secondPage__buttonBack">
                <NavLink to="/" className="btn--rounded btn btn--small btn--blue">Back</NavLink>
            </div>

            <div className="secondPage__wrapper">
                <div className="secondPage__cards">
                    <div className="secondPage__front secondPage__card" style={{background: props.appState.cardInfo.formBackgroundColor, color: props.appState.cardInfo.formTextColor, borderColor: props.appState.cardInfo.formBorderColor}}>
                        <img src={props.appState.cardInfo.bankLogoSrc} style={{display: props.appState.cardInfo.bankLogoDisplay}} className="secondPage__bank-logo" alt="Bank_logo"/>
                            <img src={props.appState.cardInfo.brandLogoSrc} style={{display: props.appState.cardInfo.brandLogoDisplay}} className="secondPage__brand-logo" alt="Brand_logo"/>
                                <div className="secondPage__fields">
                                    <input onChange={getCard} className="secondPage__field secondPage__number" type="text" placeholder="0000 0000 0000 0000" value={props.appState.cardInfo.numbers}/>
                                        <label className="secondPage__label">Valid thru</label>
                                        <input className="secondPage__field secondPage__expired" style={{borderColor: props.appState.cardInfo.formBorderColor}} type="text" placeholder="MM"/>
                                            <input className="secondPage__field secondPage__expired" style={{borderColor: props.appState.cardInfo.formBorderColor}} type="text" placeholder="YY"/>
                                </div>
                    </div>
                    <div className="secondPage__back secondPage__card">
                        <input className="secondPage__field secondPage__code" style={{borderColor: props.appState.cardInfo.formBorderColor}} type="password"/>
                            <label className="secondPage__label">Safety code</label>
                    </div>
                </div>
                <p>
                    <button onClick={nextCardNumber} className="btn--rounded btn btn--red">Next card number</button>
                </p>
            </div>

            <div className="secondPage__basket">

                {props.itemCards}

                <div className="secondPage__basket-bottom">
                    <div className="secondPage__basket-totalPrice">Total Price: {getTotalPrice()}$</div>
                    <button className="btn--rounded btn btn--blue">Buy</button>
                </div>

            </div>
        </>
    )
}

export default SecondPage;
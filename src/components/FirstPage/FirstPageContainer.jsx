import React from "react";
import FirstPage from "./FirstPage";
import {addItemToBasket} from "../../writtenRedux/basketReducer";

class FirstPageContainer extends React.Component {

    addItem = (key, name, price, image) => {
        this.props.dispatch(addItemToBasket(key, name, price, image))
    }

    buildItemCard = (products) => {
        if (products.length !== 0) {
            return products.map(element => {
                return (
                    <div className="fistPage__item" key={element.key}>
                        <img src={element.image} alt={element.name + "_image"} className="fistPage__item-img" />
                        <p className="fistPage__item-name">{element.name}</p>
                        <p className="fistPage__item-price">{`${element.price} $`}</p>
                        <button onClick={() => this.addItem(element.key, element.name, element.price, element.image)} className="btn btn--red btn--small btn--rounded">Add to card</button>
                    </div>
                )
            })
        }
    }

    render() {
        return (
                <FirstPage products={this.buildItemCard(this.props.appState.products)}/>
        )
    }
}

export default FirstPageContainer;
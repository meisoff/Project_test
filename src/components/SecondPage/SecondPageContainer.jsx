import React from "react";
import SecondPage from "./SecondPage";
import {changeCountItem} from "../../writtenRedux/basketReducer";
import {cardAPI} from "../../api/api";

class SecondPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentValue: null,
        };
    }

    getCardContainer = (value) => {
        cardAPI.getCardInfo(value, this.props.dispatch);
        this.setState({...this.state, currentValue: value});
    }

    componentDidMount(props) {
        this.getCardContainer(this.props.appState.cardInfo.numbers)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentValue !== this.props.appState.cardInfo.numbers) {
            this.getCardContainer(this.props.appState.cardInfo.numbers)
            this.setState({...this.state, currentValue: this.props.appState.cardInfo.numbers});
        }
    }

    changeCount = (key, change) => {
        this.props.dispatch(changeCountItem(key, change))
    }

    creatorCardItems = (array) => {
        return array.map(element => {
            return (
                    <div className="secondPage__item">
                        <div className="secondPage__name">{element.name}</div>
                        <div className="secondPage__itemCount">
                            <span onClick={() => this.changeCount(element.key, -1)} className="btn btn--small btn--red" style={{marginRight: ".5rem"}}>-</span>
                            <span className="btn btn--small btn--rounded" style={{marginRight: ".5rem", width: "3rem"}}>{element.count}</span>
                            <span onClick={() => this.changeCount(element.key, 1)} className="btn btn--small btn--blue">+</span>
                        </div>
                        <div className="secondPage__price">{element.totalPrice}$</div>
                    </div>
            )
        })
    }

    render() {
        return (
            <>
                <SecondPage getCardContainer={this.getCardContainer} itemCards={this.creatorCardItems(this.props.appState.basket)} appState={this.props.appState} dispatch={this.props.dispatch}/>
            </>
        )
    }
}

export default SecondPageContainer;
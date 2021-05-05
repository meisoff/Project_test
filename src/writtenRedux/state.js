// Написал свой стейт менеджмент, чтобы стек использованных технологий оставался неизменным.
import basketReducer from "./basketReducer";
import cardInfoReducer from "./cardInfoReducer";

let store = {
    _state: {
        products: [
            {
                name: "Item1",
                price: 101,
                image: "http://placehold.it/200x120",
                key: 1,
            },

            {
                name: "Item2",
                price: 102,
                image: "http://placehold.it/200x120",
                key: 2,
            },

            {
                name: "Item3",
                price: 103,
                image: "http://placehold.it/200x120",
                key: 3,
            },

            {
                name: "Item4",
                price: 104,
                image: "http://placehold.it/200x120",
                key: 4,
            },

            {
                name: "Item5",
                price: 105,
                image: "http://placehold.it/200x120",
                key: 5,
            },

            {
                name: "Item6",
                price: 100,
                image: "http://placehold.it/200x120",
                key: 6,
            },

        ],
        basket: [],
        cardInfo: {
            formBackgroundColor: null,
            formTextColor: null,
            borderColor: null,
            formBorderColor: null,
            bankLogoDisplay: null,
            bankLogoSrc: null,
            brandLogoDisplay: null,
            brandLogoSrc: null,
            numbers: '408396',
        }
    },
    getState() {
        return this._state
    },
    rerenderPage(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.basket = basketReducer(this._state.basket, action);
        this._state.cardInfo = cardInfoReducer(this._state.cardInfo, action);
        this.rerenderEntireTree(this._state);
    }
}

window.store = store;

export default store;
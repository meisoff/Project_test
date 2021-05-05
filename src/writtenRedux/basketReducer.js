import store from "./state";

const ADD_ITEM = "ADD_ITEM";
const UPDATE_COUNT_ITEM = "UPDATE_COUNT_ITEM";


const basketReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state.some(element => {
                    return element.key === action.key
                }) ? [...state.map(element => {
                    if (element.key === action.key) {
                        return {...element, count: element.count += 1, totalPrice: element.price * element.count}
                    } else return element;
                })] : [...state, {
                    key: action.key,
                    name: action.name,
                    price: action.price,
                    image: action.image,
                    count: 1,
                    totalPrice: action.price,
                }]
            ]
        case UPDATE_COUNT_ITEM:
            return state.filter(element => {
                if (element.key === action.key) {
                    let result = element.count + action.change;
                    return (result > 0);
                } else return true;
            }).map(element => {
                if (element.key === action.key) {
                    let result = element.count + action.change;
                    return {...element, count: result, totalPrice: result * element.price}
                } else return element;
            })
        default:
            return state
    }
}

export const addItemToBasket = (key, name, price, image) => {
    return {
        type: ADD_ITEM, key, name, price, image
    }
}

export const changeCountItem = (key, change) => {
    return {
        type: UPDATE_COUNT_ITEM, key, change
    }
}

export const getTotalPrice = () => {
    let collection = store.getState().basket.map(element => {
        return element.totalPrice
    });
    let result = 0;
    for (let i =0; i < collection.length; i++) {
        result += collection[i];
    }
    return result;
}

export default basketReducer;
const ADD_CARD_INFO = "ADD_CARD_INFO";
const CHANGE_NUMBER = "CHANGE_NUMBER";

const numbers = [
    '408396',
    '220488',
    '406372',
    '400079',
    '220022',
    '412776',
    '401173',
    '437772',
    '403780',
    '431854',
    '410323',
    '220001',
    '403184',
    '418384',
    '220006',
    '413047',
    '411676',
    '220003',
    '402107',
    '415025',
    '400812',
]

let numberIndex = 0;

const cardInfoReducer = (state, action) => {
    switch (action.type) {
        case ADD_CARD_INFO: {
            return {
                formBackgroundColor: action.formBackgroundColor,
                formTextColor: action.formTextColor,
                borderColor: action.borderColor,
                formBorderColor: action.formBorderColor,
                bankLogoDisplay: action.bankLogoDisplay,
                bankLogoSrc: action.bankLogoSrc,
                brandLogoDisplay: action.brandLogoDisplay,
                brandLogoSrc: action.brandLogoSrc,
                numbers: action.numbers
            }
        }

        case CHANGE_NUMBER: {
            numberIndex = (numberIndex + 1) % numbers.length
            return {
                ...state,
                numbers: numbers[numberIndex]
            }
        }
        default:
            return state
    }
}

export const changeNumber = () => {
    return {type: CHANGE_NUMBER}
}

export const addCardInfo = (formBackgroundColor, formTextColor, borderColor, formBorderColor, bankLogoDisplay, bankLogoSrc, brandLogoDisplay, brandLogoSrc, numbers) => {
    return {
        type: ADD_CARD_INFO, formBackgroundColor, formTextColor, borderColor, formBorderColor, bankLogoDisplay, bankLogoSrc, brandLogoDisplay, brandLogoSrc, numbers
    }
}

export default cardInfoReducer;
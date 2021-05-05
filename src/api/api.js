import * as axios from "axios";
import {addCardInfo} from "../writtenRedux/cardInfoReducer";

const API_KEY = "20212faa7084e4ae54a37bc2f4163bd8";


const instance = axios.create({
    baseURL: "https://api.cardinfo.online",
})

export const cardAPI = {
    getCardInfo(numbers, dispatch) {
        let numberOfCard = numbers.slice(0, 6);
        return instance.get(`?apiKey=${API_KEY}&input=${numberOfCard}`)
            .then(response => {
                return response.data
            }).then(data => {
                let formBackgroundColor = data.formBackgroundColor;
                let formTextColor = data.formTextColor;
                let borderColor = data.formBorderColor;
                let formBorderColor = data.formBorderColor;
                let bankLogoDisplay = data.formBankLogoBigSvg ? 'block' : 'none';
                let bankLogoSrc = data.formBankLogoBigSvg;
                let brandLogoDisplay = data.formBrandLogoSvg || data.brandLogoOriginalSvg ? 'block' : 'none';
                let brandLogoSrc = data.formBrandLogoSvg || data.brandLogoOriginalSvg;
                dispatch(addCardInfo(formBackgroundColor, formTextColor, borderColor, formBorderColor, bankLogoDisplay, bankLogoSrc, brandLogoDisplay, brandLogoSrc, numberOfCard))
            })
            .catch(error => {
                console.error(error)
            })
    }
}
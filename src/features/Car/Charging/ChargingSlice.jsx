import { createSlice } from "@reduxjs/toolkit";
import { Images } from "../../../images";

const initialState = {
    chargers: [
        { id: 1, hoverImage: Images.wallconnector2, images: Images.wallconnector, name: 'WALL CONNECTOR', price: '$475' },
        { id: 2, hoverImage: Images.universalconnector, images: Images.wallconnector, name: 'UNIVERSAL WALL CONNECTOR', price: '$595' },
        { id: 3, hoverImage: Images.mobileBag, images: Images.mobileconnector, name: 'MOBILE CONNECTOR', price: '$230 ' },
        { id: 4, hoverImage: Images.nemaadaptor2, images: Images.nemaadaptor, name: 'NEMA ADAPTER BUNDLE', price: '$245' },
        { id: 5, hoverImage: Images.universalconnector, images: Images.gen2nema, name: 'GEN 2 NEMA ADAPTERS', price: '$35 - $45' },
        { id: 6, hoverImage: Images.csscombo2, images: Images.csscombo, name: 'CCS COMBO 1 ADAPTER', price: '$250' },
        { id: 7, hoverImage: Images.universalconnector, images: Images.sae177, name: 'SAE J1772 CHARGING ADAPTER', price: '$50' },
    ]
}

const carSlice = createSlice({
    name: 'charger',
    initialState,
    reducers: {}
})

export const selectCharger = state => state.charger.chargers;

export default carSlice.reducer
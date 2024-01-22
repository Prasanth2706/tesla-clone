import { createSlice } from "@reduxjs/toolkit";
import { Images } from "../../../images";

const initialState = {
    parts: [
        { id: 1, hoverImage: Images.color_faceplate2, images: Images.color_faceplate, name: 'WALL CONNECTOR COLOR MATCHED FACEPLATE', price: '$75' },
        { id: 2, hoverImage: Images.glass_faceplate2, images: Images.glass_faceplate, name: 'WALL CONNECTOR GLASS FACEPLATE', price: '$75' },
        { id: 3, hoverImage: Images.pedestal2, images: Images.pedestal, name: 'PEDESTAL FOR WALL CONNECTOR', price: '$425' },
        { id: 4, images: Images.fastner_kit, name: 'WALL CONNECTOR FASTENER KIT', price: '$20' },
        { id: 5, images: Images.wirebox_kit, name: 'WALL CONNECTOR WIREBOX KIT', price: '$65' },
        { id: 6, images: Images.cable_organizer, name: 'CABLE ORGANIZER', price: '$35' },
    ]
}

const partSlice = createSlice({
    name: 'part',
    initialState,
    reducers: {}
})

export const selectPart = state => state.part.parts;

export default partSlice.reducer
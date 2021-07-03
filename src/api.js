import axios from "axios";

const main = axios.create({
    baseURL: "https://api.artic.edu/api/v1/",
    params: {
        page: "3",
        limit: "15"
    }
})

const image = axios.create({
    baseURL: "https://www.artic.edu/iiif/2/:id/full/8/0/default.jpg"
})

export const getArt = {
    artList: () => main.get("artworks")
};
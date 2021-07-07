import axios from "axios";

const main = axios.create({
    baseURL: "https://api.artic.edu/api/v1/",
});

const image = axios.create({
    baseURL: "https://www.artic.edu/iiif/2/:id/full/8/0/default.jpg",
});

export const getArt = {
    artList: (pageNumber) =>
        main.get("artworks", {
            params: {
                page: pageNumber,
                limit: 21,
            },
        }),
    artDetails: (id) => main.get(`artworks/${id}`),
};

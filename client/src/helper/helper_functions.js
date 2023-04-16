import axios from "axios";

export const fetchData = async (params = { category: 'barbell', difficulty: 'beginner' }) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://musclewiki.p.rapidapi.com/exercises',
            params: params,
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        return response.data;
    } catch (error) {

    }
}

export const fetchYoutubeData = async (params = { q: ' ' }) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
            params: params,
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        const data = response.data;
        return data.items[0].bestThumbnail.url;
    } catch (error) {

    }
}

export const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
};

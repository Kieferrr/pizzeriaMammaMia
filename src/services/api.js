import axios from "axios";

export const fetchData = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error("Error en la petición:", error);
    }
};
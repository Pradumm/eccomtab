import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [url]);

    const refetch = () => {
        setLoading(true);
        fetchData();
      };

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data.results, "___________-result");
            setData(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false); // Don't forget to set loading to false on error.
        }
    };

    return { data, loading, refetch };
};

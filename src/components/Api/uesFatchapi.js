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
<<<<<<< HEAD
    };
=======
      };
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
<<<<<<< HEAD
=======
            console.log(response.data.results, "___________-result");
>>>>>>> 1fe8341fa44ded06e4e9fd326c581ebdce9bf057
            setData(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false); 
        }
    };

    return { data, loading, refetch };
};

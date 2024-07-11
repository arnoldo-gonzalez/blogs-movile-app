import { useEffect, useState } from "react";

export default function usePosts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        fetch("https://jsonplaceholder.typicode.com/posts", {signal: controller.signal})
            .then(res => res.json())
            .then(json => {
                setLoading(false);
                setData(json);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            })
        
        return () => controller.abort("Component did unmount");
    }, []);

    return {data, loading, error};
}
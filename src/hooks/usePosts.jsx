import { useEffect, useState } from "react";

export default function usePosts(setReloading) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [reloads, setReloads] = useState(0);

    const reload = () => {
        setLoading(true);
        setReloads(prev => prev + 1);
    }

    useEffect(() => {
        setData([]);
        setError(false);

        const controller = new AbortController()
        fetch("https://jsonplaceholder.typicode.com/posts", {signal: controller.signal})
            .then(res => res.json())
            .then(json => {
                setLoading(false);
                setData(json);
                setReloading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            })
        
        return () => controller.abort("Component did unmount");
    }, [reloads]);

    return {data, loading, error, reload};
}
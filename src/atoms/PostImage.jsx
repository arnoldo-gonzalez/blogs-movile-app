import { useEffect, useState } from "react";
import { Image } from "react-native";
import postDefaultImage from "../assets/post_image.jpeg";
import retrieveImages from "../services/retrieveImages";

export default function PostImage({imageIdRef, id, ...props}) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        retrieveImages(id)
            .then(data => {
                if (data.error) return;
                setImageUrl(data.imageUrl);
                imageIdRef.current = data.id;
            });
    }, []);

    return (
        <Image 
            source={imageUrl?.length == 0 || !imageUrl ? postDefaultImage : ({uri: imageUrl}) } 
            {...props} 
        />
    )
}
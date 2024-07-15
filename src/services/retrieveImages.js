const words = [
    "Animals", "Technology", "Magic", "People", "Dog", "Cat", "Nature", "Astronomy", "Tree",
    "Watch", "Bird", "Building", "House", "Door", "Restaurant", "Coffee Shop", "Games", "Video"
]

export default async function retrieveImages(id) {
    const word1index = Math.round(Math.random() * (words.length - 1));
    const word2index = Math.round(Math.random() * (words.length - 1));

    const word1 = words[word1index];
    const word2 = words[word1index === word2index ? word1index + 1 : word2index];

    const queryString = `${word1}+or+${word2}`;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    const url = `https://pixabay.com/api/?key=${apiKey}&q=${queryString}&image_type=photo`;
    const data = await fetch(url).then(res => res.json()).catch(() => ({error: true}));

    if (data.error) return {error: true};

    const randomImageIndex = Math.round(Math.random() * (data.hits.length - 1));
    return {imageUrl: data.hits[randomImageIndex].largeImageURL, id: data.hits[randomImageIndex].id};
}
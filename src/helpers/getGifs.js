export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cHOQjGNp6L5YW6E3b8DETLjARcscstN4&q=${category}&limit=6`;
    const resp = await fetch(url);

    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }));
    return gifs;
}
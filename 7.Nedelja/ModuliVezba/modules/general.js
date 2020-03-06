let generateImage = src => {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', 'Image Failed to Load');
    return img;
};

export {generateImage};
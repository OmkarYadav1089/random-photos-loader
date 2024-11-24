# Random Photos Loader

A simple web application that dynamically loads random photos from the internet. The app uses HTML, CSS, and JavaScript to create a visually appealing interface where users can click a button to load more random images.

## Features

- **Dynamic Image Loading**: Click the "Load More" button to add a set of random images dynamically.
- **Responsive Design**: Fully responsive for various screen sizes, with a clean and minimalist UI.
- **Randomized Images**: Uses the [Picsum Photos API](https://picsum.photos/) to fetch random images.

## Demo

![Random Photos Loader Demo](https://via.placeholder.com/800x400?text=Random+Photos+Loader+Preview)  
*(Replace this placeholder with an actual screenshot of your project)*

## Technologies Used

- **HTML**: For the basic structure of the app.
- **CSS**: For styling the layout and making it visually appealing.
- **JavaScript**: For dynamically fetching and appending images to the page.

## How It Works

1. Initial images are displayed on the page when loaded.
2. Clicking the "Load More" button dynamically fetches and appends 10 new random images to the container.
3. The images are fetched from the [Picsum Photos API](https://picsum.photos/).

## Code Overview

### HTML
The structure includes:
- A `div` container to hold the images (`.image-container`).
- A button to trigger dynamic image loading (`.btn`).

### CSS
- Defines styles for the layout, including flexbox for the container.
- Adds shadows, margins, and hover effects for the images and button.

### JavaScript
- Selects the container and button using `querySelector`.
- Listens for the button click to create and append new images dynamically.

#### Key Functionality:
```javascript
function addNewImages(ImgNum) {
  for (let index = 0; index < ImgNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imagecontainerEl.appendChild(newImgEl);
  }
}
```

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/OmkarYadav1089/random-photos-loader.git
   ```
2. Navigate to the project folder:
   ```bash
   cd random-photos-loader
   ```
3. Open `index.html` in your browser to see the app in action.

## Future Enhancements

- Add a loader/spinner while images are being fetched.
- Implement pagination for better user experience.
- Allow users to specify the number of images to load.
- Add the ability to download images.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Author

- **Omkar Yadav**  
  Connect with me on [GitHub](https://github.com/OmkarYadav1089).

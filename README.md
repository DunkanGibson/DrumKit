# DrumKit

This is a simple drum kit project implemented using HTML, CSS, and JavaScript. It allows you to play different drum sounds by pressing corresponding keys on your keyboard or clicking on the drum buttons.

![2023-07-06 13_46_16-NVIDIA GeForce Overlay](https://github.com/DunkanGibson/DrumKit/assets/52463084/cbc776cd-7ed1-4529-9cc2-282d5c721405)

## How to Use

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in your web browser.
3. Press the keys displayed on the drum buttons or click on the buttons using your mouse to play the corresponding drum sounds.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that contains the structure and layout of the drum kit.
- `style.css`: The CSS file that defines the visual styles and layout of the drum kit.
- `script.js`: The JavaScript file that handles the logic for playing the drum sounds and responding to user interactions.

## Dependencies

The project has no external dependencies. It uses native HTML5 audio capabilities to play the drum sounds.

## How it Works

1. When a key is pressed or a drum button is clicked, an event is triggered.
2. The event is captured by the JavaScript code in `script.js`.
3. The corresponding drum sound is played by selecting the audio element associated with the pressed key or clicked button.
4. The visual appearance of the drum button is briefly changed to indicate that it has been triggered.

## Customization

You can customize the drum kit by adding or modifying the sounds and visuals. Here are a few suggestions:

- **Sounds**: Replace the existing drum sounds with your own audio files. Make sure to update the `data-key` attributes of the drum buttons to match the keys associated with the new sounds.
- **Visuals**: Modify the styles in `style.css` to change the appearance of the drum buttons. You can experiment with colors, sizes, and animations to create your desired visual effect.

## Acknowledgements

This project is inspired by the JavaScript 30 course by Wes Bos. You can find the original tutorial at [https://javascript30.com/](https://javascript30.com/).

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

Enjoy drumming with JavaScript!

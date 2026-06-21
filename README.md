# ⏱️ Dynamic Countdown Timer with Cats API

A colorful, interactive, and fully responsive countdown timer application built using pure HTML5, CSS3, and Vanilla JavaScript. The application features dynamic color animations, elapsed time tracking, external API integration, and a grand finale with background sound.

---

## ✨ Features

* **Complete Timer Management:** Users can set custom minutes and seconds, with fully functional **Start**, **Pause**, and **Stop** operations.
* **Dual Time Tracking:** Displays both the remaining countdown time and the elapsed time (`past time`) simultaneously.
* **Dynamic Visual Effects:**
    * Rotating linear-gradient borders around active buttons and the time display during execution.
    * Randomly changing background gradient palettes every single second.
* **The Cat API Integration:** Every 7 seconds (when remaining seconds are divisible by 7), the application fetches and displays random cat pictures on both the left and right sides of the timer layout.
* **Grand Finale Event:** When the countdown hits `00:00`, a clean CSS loading spinner activates, a victory audio track plays, and a large random cat image fills the viewport layout.
* **Responsive Layout:** Adaptive design tailored for both desktop displays and mobile phones using CSS Grid and Media Queries.

---

## 🛠️ Technologies Used

* **HTML5:** Semantic markup utilizing modern elements like `<time>`.
* **CSS3:** Advanced layouts via CSS Grid (`grid-template-areas`), custom animations (`@keyframes`), and dynamic `linear-gradient` backgrounds.
* **JavaScript (ES6+):** * Asynchronous programming (`async/await` and the `Fetch API`) for fetching real-time data from external APIs.
    * Timing mechanisms governed by `setInterval` and `clearInterval`.
    * Clean DOM manipulation and event delegation (`Event Listeners`).

---

## 🚀 How to Run the Project

1. Clone or download this repository to your local machine.
2. Ensure that all three project files are stored within the exact same directory:
   * `index.html`
   * `style.css`
   * `js.js`
3. Open `index.html` directly in any standard modern web browser (e.g., Chrome, Firefox, Safari, Edge), or run it through a development server such as VS Code's *Live Server* extension.

---

## 📝 Code Overview & Logic

### JavaScript Core (`js.js`)
* `backGroundColors(element, color1, color2)`: Drives a high-frequency interval that smoothly rotates the angle (`0deg` to `360deg`) of a linear-gradient background on a targeted element.
* `fetchRandomImage()`: An asynchronous utility that performs a secure HTTP `GET` request to the Cat API to pull live image resource URLs.
* `buttonStart.addEventListener(...)`: The primary event controller. It coordinates the core ticking logic, calculates elapsed time, tracks the 7-second interval trigger for side images, randomizes background color components, and evaluates the final countdown termination sequence.

### Styling Sheet (`style.css`)
* **Grid Architecture:** Maps explicit container coordinates (`div1`, `imageLeft`, `borderTime`, etc.) across a flexible template grid. When matching mobile viewports (widths below `400px`), it seamlessly shifts to a single-column block layout.
* **lds-ring Loader:** A pure CSS animation rule that animates a circular loading indicator utilizing hardware-accelerated transforms without relying on heavy external libraries.

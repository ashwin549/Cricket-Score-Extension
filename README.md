# Cricket Scores Chrome Extension

## Warning
It dosent seem to work properly anymore, and most of the times leads to triggering the Captcha. Although there are tools which bypass this easily like [puppeteer-extra-plugin-recaptcha ](https://github.com/berstend/puppeteer-extra/tree/c5828dd01333b6dbb15d74e63d9b866b2b2ff2a6/packages/puppeteer-extra-plugin-recaptcha), they cost money. So its unlikely to produce results.

## Overview

This Chrome extension provides the latest cricket scores by utilizing Puppeteer to fetch and capture live cricket score data from search results. The extension displays a screenshot of the scores when clicked, offering users a convenient way to stay updated on cricket matches.

## Features

- **Live Cricket Scores**: Displays the latest cricket scores fetched dynamically.
- **Screenshot Display**: Uses Puppeteer to take a screenshot of cricket score search results and shows it in the extension popup.
- **Simple and Lightweight**: Minimalistic design for quick access to scores.


## Installation

Follow these steps to install and run the extension:

1. Clone or download this repository
``` bash
git clone https://github.com/your-username/cricket-scores-extension.git
```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click on **Load unpacked** and select the directory where you cloned this repository.
5. The extension will now appear in your toolbar.
6. **NOTE:** You will have to have to run the server.js on your end else it wont be able to do search queries.

## Usage

1. Click on the extension icon in your Chrome toolbar.
2. The latest cricket scores will be displayed as a screenshot captured by Puppeteer. Press refresh to refresh the scores. Scores are updated every 5 minutes


# Arduino-JS-Robot
Control your system with Arduino &amp; JavaScript

![Schematic for Arduino JS Robot](https://raw.githubusercontent.com/ShivamJoker/Arduino-JS-Robot/master/wiring.png)

## Tutorial
Detailed YouTube tutorial is available at https://youtu.be/icW6QcqFqIA.

### Using Firmata Client Libraries with JS
- Go to [Arduino Editor](https://create.arduino.cc/) and select Web Editor from the options.
- Download the Plugin from [here](https://create.arduino.cc/getting-started/plugin/download) and once it is completed, open Arduino App on PC.
- The Plugin icon should appear at Taskbar. Click on it and Go to Arduino Create, or go back to Web Editor.
- Connect your Arduino Uno using USB to PC.
- Create a New Sketch from Web Editor.
- Go to Libraries and search for Firmata.
- Scroll down the search result, find <code>StandardFirmataPlus</code> and click on it.
- Click on Upload.
- The Arduino would start blinking. You will get the message <code>Success: Done uploading StandardFirmataPlus</code>.

## How to use
- NodeJS can be downloaded from [here](https://nodejs.org/en/). It automatically installs npm (node package manager) with it. 
- Check NodeJS and npm versions using <code>node -v</code> and <code>npm -v</code>.
- Clone the repository using Git ([download here](https://git-scm.com/downloads)) using command <code>git clone https://github.com/ShivamJoker/Arduino-JS-Robot.git</code>.
- Use <code>npm i</code> or <code>npm install</code> to install all the required dependencies listed in package.json.
- To see it in action, use command <code>node sketch.js</code> in Terminal.

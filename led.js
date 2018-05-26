#! /usr/bin/env node

const Gpio = require('onoff').Gpio;
const args = process.argv.slice(2);


let on = undefined;
let led = undefined;

if (args[0] === 'RED') {
  led = new Gpio(4, 'out');
} else if (args[0] === 'GREEN') {
  led = new Gpio(17, 'out');
} else {
  console.log('LED color must be RED or GREEN');
}

if (args[1] === '--on') {
  on = true;
} else if (args[1] === '--off') {
  on = false;
} else {
  console.log('Option must be either --on or --off.');
}


if (led !== undefined && on) {
  led.writeSync(1);
} else if (led !== undefined && !on) {
  led.writeSync(0);
} else {
  console.log('Invalid command.');
}


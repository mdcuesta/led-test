#! /usr/bin/env node

const Gpio = require('onoff').Gpio;
const args = process.argv.slice(2);

const LED = new Gpio(4, 'out');

let on = undefined;

if (args[0] === '--on') {
  on = true;
} else if (args[0] === '--off') {
	on = false;
}

if (on === undefined) {
	console.log('Option must be either --on or --off.');
}

if (on) {
  console.log('ON');
  LED.writeSync(1);
} else {
	console.log('OFF');
  LED.writeSync(0);
}

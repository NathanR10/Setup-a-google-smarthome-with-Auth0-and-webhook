/* eslint-disable import/extensions */
/* eslint-disable no-console */
import currentDevicesStates from './API.js';

export default function updateAPI(id, { commands }) {
  const target = commands[0]?.devices[0].id;
  const command = commands[0]?.execution[0].command.split('.')[3];
  const value = commands[0]?.execution[0].params;
  // const availableColors = [];

  console.log(
    '\x1b[36m%s\x1b[0m',
    '\n    Data sent to imagi API',
  );
  console.log(
    '\x1b[36m%s\x1b[0m',
    `    ${target} -> ${command} -> ${JSON.stringify(value)}`,
  );

  // update API data BEFORE refreshing data (query)
  if (target === 'spotlight') {
    if (command === 'OnOff') {
      currentDevicesStates.spotlight.on = value.on;
    }
    if (command === 'BrightnessAbsolute') {
      currentDevicesStates.spotlight.brightness = value.brightness;
    }
  }
  if (target === 'thermostat') {
    if (command === 'ThermostatSetMode') {
      currentDevicesStates.thermostat.thermostatMode = value.thermostatMode;
      currentDevicesStates.thermostat.activeThermostatMode = value.thermostatMode;
    }
    if (command === 'ThermostatTemperatureSetpoint') {
      currentDevicesStates.thermostat.thermostatTemperatureSetpoint = (
        value.thermostatTemperatureSetpoint
      );
    }
  }
}

/* eslint-disable import/extensions */
/* eslint-disable no-console */
import currentDevicesStates from './API.js';

export default function intentQuery(id) {
  const response = {
    requestId: id,
    payload: {
      devices: {
        spotlight: {
          status: 'SUCCESS',
          online: true,
          on: currentDevicesStates.spotlight.on,
          brightness: currentDevicesStates.spotlight.brightness,
          color: {
            temperatureK: currentDevicesStates.spotlight.tempK,
          },
        },
        thermostat: {
          status: 'SUCCESS',
          online: true,
          activeThermostatMode: currentDevicesStates.thermostat.activeThermostatMode,
          thermostatMode: currentDevicesStates.thermostat.thermostatMode,
          thermostatTemperatureSetpointLow:
            currentDevicesStates.thermostat.thermostatTemperatureSetpointLow,
          thermostatTemperatureSetpointHigh:
            currentDevicesStates.thermostat.thermostatTemperatureSetpointHigh,
          thermostatTemperatureSetpoint:
              currentDevicesStates.thermostat.thermostatTemperatureSetpoint,
          thermostatTemperatureAmbient:
            currentDevicesStates.thermostat.thermostatTemperatureAmbient,
        },
        // volet: {
        //   status: 'SUCCESS',
        //   online: true,
        //   openPercent: currentDevicesStates.volet.openPercent,
        //   openState: [
        //     {
        //       openPercent: 30,
        //       openDirection: 'LEFT',
        //     },
        //     {
        //       openPercent: 50,
        //       openDirection: 'RIGHT',
        //     },
        //   ],
        // },
        ncc: {
          status: 'SUCCESS',
          online: true,
          isRunning: currentDevicesStates.ncc.isRunning,
          isPaused: currentDevicesStates.ncc.isPaused,
          timerRemainingSec: currentDevicesStates.ncc.timerRemainingSec,
        },
      },
    },
  };
  console.log(JSON.stringify(response));
  return JSON.stringify(response);
}

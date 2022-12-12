const currentDevicesStates = {
  spotlight: {
    on: false,
    brightness: 100,
    tempK: 4000,
    color: {
      spectrumRgb: 16711935,
    },
  },
  thermostat: {
    activeThermostatMode: 'none',
    thermostatMode: 'off',
    thermostatTemperatureSetpointLow: 20,
    thermostatTemperatureSetpointHigh: 30,
    thermostatTemperatureAmbient: 22.5,
    thermostatTemperatureSetpoint: 20,
  },
  // volet: {
  //   commandOnlyOpenClose: true,
  //   openPercent: 10,
  // },
  ncc: {
    on: false,
    isRunning: false,
    isPaused: false,
    timerRemainingSec: 300,
  },
};

export default currentDevicesStates;

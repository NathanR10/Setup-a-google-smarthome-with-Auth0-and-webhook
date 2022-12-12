const devices = [
  {
    id: 'spotlight',
    type: 'action.devices.types.LIGHT',
    traits: [
      'action.devices.traits.OnOff',
      'action.devices.traits.ColorSetting',
      'action.devices.traits.Brightness',
    ],
    name: {
      name: 'Spotlight',
    },
    deviceInfo: {
      manufacturer: 'Acme Co',
      model: 'acme-Light',
      hwVersion: '1.0',
      swVersion: '1.0.1',
    },
    willReportState: true,
    attributes: {
      pausable: true,
      colorModel: 'rgb',
    },
  },
  {
    id: 'thermostat',
    type: 'action.devices.types.THERMOSTAT',
    traits: [
      'action.devices.traits.TemperatureSetting',
    ],
    name: {
      name: 'Thermostat',
    },
    deviceInfo: {
      manufacturer: 'Acme Co',
      model: 'acme-Light',
      hwVersion: '1.0',
      swVersion: '1.0.1',
    },
    willReportState: true,
    attributes: {
      availableThermostatModes: [
        'off',
        'eco',
        'heat',
      ],
      bufferRangeCelsius: 0.5,
      thermostatTemperatureRange: {
        minThresholdCelsius: 20,
        maxThresholdCelsius: 30,
      },
      thermostatTemperatureUnit: 'C',
    },
  },
  // {
  //   id: 'volet',
  //   type: 'action.devices.types.PERGOLA',
  //   traits: [
  //     'action.devices.traits.OpenClose',
  //   ],
  //   name: {
  //     name: 'Volet',
  //   },
  //   deviceInfo: {
  //     manufacturer: 'Acme Co',
  //     model: 'acme-Light',
  //     hwVersion: '1.0',
  //     swVersion: '1.0.1',
  //   },
  //   willReportState: true,
  //   attributes: {
  //     openDirection: [
  //       'LEFT',
  //       'RIGHT',
  //     ],
  //   },
  // },
  {
    id: 'ncc',
    type: 'action.devices.types.SPRINKLER',
    traits: [
      'action.devices.traits.Timer',
      'action.devices.traits.StartStop',
    ],
    name: {
      name: '[WIP] Nage à contre courant v3',
    },
    willReportState: true,
    attributes: {
      maxTimerLimitSec: 600,
      pausable: true,
    },
    deviceInfo: {
      manufacturer: 'smart-home-inc',
      model: 'hs1234',
      hwVersion: '3.2',
      swVersion: '11.4',
    },
  },
];

export default devices;

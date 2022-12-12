/* eslint-disable import/extensions */
/* eslint-disable no-console */
import devices from './devices.js';

export default function intentSync(id) {
  const response = {
    requestId: id,
    payload: {
      agentUserId: '123456789',
      devices,
    },
  };
  console.log(JSON.stringify(response));
  return JSON.stringify(response);
}

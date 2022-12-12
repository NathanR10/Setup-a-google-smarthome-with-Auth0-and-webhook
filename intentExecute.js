/* eslint-disable no-console */
export default function intentExecute(id) {
  const response = {
    requestId: id,
    payload: {
      commands: [
        {
          ids: [
            'spotlight',
            'thermostat',
            // 'volet',
            'ncc',
          ],
          status: 'SUCCESS',
          states: {
            online: true,
          },
        },
      ],
    },
  };
  console.log(JSON.stringify(response));
  return JSON.stringify(response);
}

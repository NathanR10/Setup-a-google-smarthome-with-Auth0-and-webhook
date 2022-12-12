/* eslint-disable import/extensions */
/* eslint-disable no-console */
import http from 'http';
import intentExecute from './intentExecute.js';
import intentQuery from './intentQuery.js';
import intentSync from './intentSync.js';
import updateAPI from './updateAPI.js';

http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const intent = JSON.parse(body).inputs[0].intent.split('.')[2];
    const { requestId } = JSON.parse(body);
    const commands = JSON.parse(body)?.inputs[0]?.payload || null;
    console.log(
      '\n\n\n',
      '\x1b[47m\x1b[30m',
      `[${new Date().toLocaleString()}]`,
      '\x1b[0m',
    );
    // res.writeHead(200);
    console.log(req.headers);
    console.log('\n\n');
    console.log(body);
    console.log(
      '\x1b[33m%s\x1b[0m',
      `\n    response for ${intent} \n`,
    );
    if (intent === 'SYNC') {
      res.end(intentSync(requestId));
    } else if (intent === 'QUERY') {
      res.end(intentQuery(requestId));
    } else if (intent === 'EXECUTE') {
      res.end(intentExecute(requestId, commands));
      res.end(updateAPI(requestId, commands));
    }
  });
}).listen(8888);

console.log('Server running at http://localhost:8888/');


process.chdir(__dirname);

import express from 'express';
import morgan from 'morgan';
import path from 'path';
const compression = require('compression');
const cookieParser = require('cookie-parser');
const readdir = require('recursive-readdir-sync');

import noCache from './middleware/no-cache';
import store from './middleware/store';
import demo from './routes/demo';
import index from './routes/default';

const serverConfig = require('./config.json');

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

const paths = {
  root: 'demo',
  templates: [
    '../../build/templates'
  ]
};

app.use(compression());
app.use(cookieParser());

app.set('view engine', 'mustache');
app.set('views', paths.templates);
app.set('partials', paths.templates.reduce((partials, dir) => {
  readdir(dir).forEach((partial) => {
    const name = partial.replace(dir + '/', '').replace('.mustache', '');

    partials['/' + name] = path.resolve(partial);
    partials[name] = path.resolve(partial);
  });

  return partials;
}, {}));

app.engine('mustache', require('hogan-express-strict'));

app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

app.listen(serverConfig.server.port, serverConfig.server.host);

app.use('*', store);
app.use('/', noCache, index);
app.use('/demo', noCache, demo);

export default app;


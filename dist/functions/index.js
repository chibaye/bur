"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = void 0;

var _next = _interopRequireDefault(require("next"));

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _firebaseFunctions = require("firebase-functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dev = process.env.NODE_ENV !== 'production';
const app = (0, _next.default)({
  dev,
  conf: {
    distDir: `${_path.default.relative(process.cwd(), __dirname)}/io`
  }
});
const handle = app.getRequestHandler();
const opts = {
  memory: '2GB'
};
const io = (0, _firebaseFunctions.runWith)(opts).https.onRequest((req, res) => {
  app.prepare().then(() => {
    const server = (0, _express.default)();
    server.get('*', (req, res) => handle(req, res));
    return server(req, res);
  });
});
exports.io = io;
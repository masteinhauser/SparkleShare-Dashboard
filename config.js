exports.sessionSecret = 'JustSomeRandomString';

exports.folders = [
  { type: 'git', name: 'Documents', path: '/home/git/Documents', pub: false },
  { type: 'git', name: 'Pictures', path: '/home/git/Pictures', pub: false }
];

exports.listen = {
  port: 3001,
  host: '64.6.100.239'
};

exports.https = {
  enabled: false,
  key: '/path/to/private.key',
  cert: '/path/to/cert.crt'
};

exports.basepath = '';
exports.externalUrl = 'http://64.6.100.239:3001';

// 300 sec
exports.linkCodeValidFor = 31449600;

// none | min | info | debug
exports.logging = 'none';

exports.fanout = {
  enabled: false,
  host: null,
  port: 1986
};

exports.backend = {
  'git': {
    'bin': 'git'
  }
};

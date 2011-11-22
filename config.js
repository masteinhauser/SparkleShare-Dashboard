exports.sessionSecret = 'JustSomeRandomString';

exports.folders = [
  { type: 'git', name: 'Documents', path: '/home/git/Documents', pub: false },
  { type: 'git', name: 'Pictures', path: '/home/git/Pictures', pub: false }
];

exports.listen = {
  port: 3000,
  host: '72.9.254.61'
};

exports.https = {
  enabled: false,
  key: '/path/to/private.key',
  cert: '/path/to/cert.crt'
};

exports.basepath = '/sparkle';
exports.externalUrl = 'http://72.9.254.61/sparkle';

// 300 sec
exports.linkCodeValidFor = 31449600;

// none | min | info | debug
exports.logging = 'none';

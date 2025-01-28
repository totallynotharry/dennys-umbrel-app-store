module.exports = {
  // Hauptdomain
  httpUnsafeOrigin: 'https://cryptpad.subke.cloud',
  httpAddress: '0.0.0.0',
  httpPort: 3003,

  // Sandbox-Domain
  sandboxDomain: 'https://sandbox.subke.cloud',

  // WebSocket-Konfiguration
  websocket: {
    enabled: true,
    address: '0.0.0.0',
    port: 3000, // Intern genutzt
  },

  // Speicherpfade
  storage: {
    data: '/cryptpad/data',
    files: '/cryptpad/datastore',
    temp: '/cryptpad/temp',
    backup: '/cryptpad/backup',
    blobs: '/cryptpad/blob',
    pins: '/cryptpad/block',
  },

  // Administrator-Konto
  admin: {
    accountCreationDisabled: false,
  },

  // Sicherheits- und Performance-Einstellungen
  limits: {
    fileSize: 50000000, // Maximal 50 MB pro Datei
  },
};

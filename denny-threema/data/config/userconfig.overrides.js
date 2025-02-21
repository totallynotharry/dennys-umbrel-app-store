/**
 * Threema Web configuration overrides.
 *
 * Diese Datei enthält benutzerdefinierte Konfigurationen für Threema Web.
 * Sie wird von Docker in das richtige Verzeichnis gemountet.
 */

window.UserConfig = window.UserConfig || {};

// Beispielkonfigurationen (passe sie an deine Bedürfnisse an)
window.UserConfig.SALTYRTC_HOST = 'your-saltyrtc-host.example.com';
window.UserConfig.CONSOLE_LOG_LEVEL = 'info';
window.UserConfig.VISUALIZE_STATE = false;

// Falls du ICE-Server nutzen möchtest, kannst du diese hier konfigurieren:
window.UserConfig.ICE_SERVERS = [
    {
        urls: ['turn:your-turn-server.com:3478'],
        username: 'your-username',
        credential: 'your-password'
    }
];

// Weitere Konfigurationsoptionen können hier ergänzt werden...

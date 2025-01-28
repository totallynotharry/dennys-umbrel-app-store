module.exports = {
    httpUnsafeOrigin: 'http://cryptpad.subke.cloud:3790', // Public HTTP-Domain mit Port
    httpSafeOrigin: 'https://sandbox.subke.cloud:3793', // Public HTTPS-Domain mit Port
    httpAddress: 'cryptpad', // Hostname, wie in der Compose-Datei angegeben
    filePath: './datastore/', // Datastore-Pfad, wie in den Volumes gemountet
    archivePath: './data/archive', // Datenarchiv
    pinPath: './data/pins', // Pins
    taskPath: './data/tasks', // Tasks
    blockPath: './block', // Block-Daten
    blobPath: './blob', // Blob-Daten
    blobStagingPath: './data/blobstage', // Blob-Staging
    decreePath: './data/decrees', // Dekrete
    logPath: './data/logs', // Logs
    maxUploadSize: 20 * 1024 * 1024, // 20 MB Upload-Limit
    logToStdout: false, // Logging in Konsole deaktiviert
    logLevel: 'info', // Standard-Log-Level
    logFeedback: false, // Feedback-Logs deaktiviert
    verbose: false, // Verbose-Logs deaktiviert
    installMethod: 'docker', // Installationsmethode Docker
    adminKeys: [], // Admin-Keys können hier hinzugefügt werden
};

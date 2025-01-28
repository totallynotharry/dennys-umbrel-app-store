module.exports = {
    httpUnsafeOrigin: 'http://cryptpad.subke.cloud',  // Achte darauf, hier HTTP zu verwenden, wenn es sich um ein HTTP-Verbindung handelt
    httpSafeOrigin: 'https://cryptpad.subke.cloud',   // Nutze HTTPS für die sichere Verbindung
    httpAddress: '0.0.0.0',                           // Das bedeutet, dass es auf allen IPs lauscht
    filePath: './datastore/',                          // Dein Dateispeicherort
    archivePath: './data/archive',                     // Archivspeicherort
    pinPath: './data/pins',                            // Pins Speicherort
    taskPath: './data/tasks',                          // Tasks Speicherort
    blockPath: './block',                              // Block-Daten
    blobPath: './blob',                                // Blob-Daten
    blobStagingPath: './data/blobstage',               // Blob-Staging-Pfad
    decreePath: './data/decrees',                      // Dekrete
    logPath: './data/logs',                            // Logs Pfad
    maxUploadSize: 20 * 1024 * 1024,                    // Maximale Uploadgröße (20MB)
    logToStdout: false,                                // Logs werden nicht in die Konsole ausgegeben
    logLevel: 'info',                                  // Log-Level auf 'info' setzen
    logFeedback: false,                                // Keine Feedback-Logs
    verbose: false,                                    // Keine ausführlichen Logs
    installMethod: 'docker',                           // Installationsmethode: Docker
};

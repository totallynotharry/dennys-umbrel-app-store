module.exports = {
    // Die Hauptdomain (main domain), die von Clients verwendet wird
    httpUnsafeOrigin: 'http://umbrel-2.local:3712',

    // Die Sandbox-Domain, die für Sicherheitszwecke getrennt ist
    httpSafeOrigin: 'http://umbrel-2.local:3713',

    // Bindet den Server an eine bestimmte Adresse (nur lokal verfügbar machen)
    httpAddress: 'umbrel-2.local',

    // Port für die Hauptdomain
    httpPort: 3712,

    // Port für die Sandbox-Domain (muss sich von httpPort unterscheiden)
    httpSafePort: 3713,

    // Port für Websockets (sollte ebenfalls eindeutig sein)
    websocketPort: 3714,

    // Maximal verwendete CPU-Kerne (optional, für bessere Performance anpassen)
    maxWorkers: 4,

    /* =====================
     *        STORAGE
     * ===================== */
    filePath: './datastore/',
    archivePath: './data/archive',
    pinPath: './data/pins',
    taskPath: './data/tasks',
    blockPath: './block',
    blobPath: './blob',
    blobStagingPath: './data/blobstage',
    decreePath: './data/decrees',
    logPath: './data/logs',

    /* =====================
     *       Logging
     * ===================== */
    logToStdout: true, // Aktiviert Konsolenprotokollierung
    logLevel: 'info',
    logFeedback: false,

    /* =====================
     *     Debugging und Sicherheit
     * ===================== */
    verbose: false,
    installMethod: 'docker', // Indikator, dass Docker verwendet wird
};

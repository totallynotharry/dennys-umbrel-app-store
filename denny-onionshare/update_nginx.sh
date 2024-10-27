
#!/bin/sh

# Warte auf OnionShare-Start und Logs
sleep 5

# Port aus den Logs holen
PORT=$(docker logs denny-onionshare_web_1 2>&1 | grep -oP '(?<=port=)\d+' | tail -1)

# Überprüfen, ob der Port gefunden wurde
if [ -z "$PORT" ]; then
    echo "Fehler: OnionShare-Port nicht gefunden."
    exit 1
fi

# Nginx-Konfiguration mit dem neuen Port aktualisieren
sed -i "s/proxy_pass http:\/\/web:.*/proxy_pass http:\/\/web:$PORT;/" /etc/nginx/nginx.conf

echo "Nginx wurde auf OnionShare-Port $PORT aktualisiert"

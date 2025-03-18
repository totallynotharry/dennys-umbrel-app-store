#!/bin/bash

CERT_PATH="${APP_DATA_DIR}/data/mumble/cert.pem"
KEY_PATH="${APP_DATA_DIR}/data/mumble/key.pem"

if [ ! -f "$CERT_PATH" ] || [ ! -f "$KEY_PATH" ]; then
  echo "🔒 Generating self-signed SSL certificate for Mumble..."
  openssl req -x509 -newkey rsa:4096 -keyout "$KEY_PATH" -out "$CERT_PATH" -days 365 \
    -nodes -subj "/C=DE/ST=Bundesland/L=Stadt/O=MeinMumble/CN=mein-server.de"
  echo "✅ SSL certificate generated!"
else
  echo "🔒 SSL certificate already exists. Skipping generation."
fi

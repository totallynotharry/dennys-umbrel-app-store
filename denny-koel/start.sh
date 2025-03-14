#!/bin/bash

# Warte darauf, dass die Datenbankverbindung verfügbar ist
until pg_isready -h database -p 5432 -U koel; do
  echo "Warte auf Datenbankverbindung..."
  sleep 2
done

# Führe die Laravel-Initialisierungen aus
php artisan koel:init
php artisan key:generate

# Starte den PHP-FPM Webserver
php-fpm

#!/bin/bash

# Warten, bis die Datenbank bereit ist
until pg_isready -h database -p 5432 -U koel; do
  echo "Warte auf die Datenbank..."
  sleep 2
done

# Laravel koeln:init und key:generate
php artisan koel:init
php artisan key:generate

# Starte den Webserver
php-fpm

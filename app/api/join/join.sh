#!/bin/bash

# Configuration
API_KEY_SECRET = "unicom_peer_to_peer_SECRET_KEY";
Unicom_URL = "https://p2p.mirotalk.com/api/v1/join";


# Join request data
REQUEST_DATA='{
    "room": "test",
    "name": "unicom",
    "avatar": false,
    "audio": false,
    "video": false,
    "screen": false,
    "hide": false,
    "notify": true,
    "token": {
        "username": "username",
        "password": "password",
        "presenter": true,
        "expire": "1h"
    }
}'

# Make the API request
curl -X POST "$Unicom_URL" \
    -H "authorization: $API_KEY_SECRET" \
    -H "Content-Type: application/json" \
    -d "$REQUEST_DATA"
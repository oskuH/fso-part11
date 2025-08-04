#!/bin/bash

echo "Build script"

cd ../frontend/

npm install

npm run build:deploy

cd ../backend/

npm install
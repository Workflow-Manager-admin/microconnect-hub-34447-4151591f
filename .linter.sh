#!/bin/bash
cd /home/kavia/workspace/code-generation/microconnect-hub-34447-4151591f/microconnect_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


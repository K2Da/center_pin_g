#!/bin/bash

yarn generate
yarn front
cd front
git add -A
git commit -m "deploy"
git push

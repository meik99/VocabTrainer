#!/bin/bash
sudo apt update
sudo apt upgrade -y
sudo apt install mysql-client mysql-server mysql-workbench -yf
mysql -u root -p < create_tables.sql
mysql -u root -p < test_inserts.sql

cd client
npm install
cd ../server
npm install

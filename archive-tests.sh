#! /bin/bash

mkdir -p cypress/archive && mv cypress/reports/mochareports "cypress/archive/${RANDOM}-report"

#!/bin/bash

# json keys correspond to csv columns

# Add keys:
#  - Lat
#  - Lng
#  - PlaceId (Google Maps)
#  - PostalCode
#
# Remove keys:
#  - Prelim Notes Nov 2019
#  - Prelim likely count
#  - VISIT
#  - First Edition
#  - Second Edition

# Output file is provided so there is no need to run this script

echo "Provided as reference: there is no need to run this script. If you must, comment out the exit command below this line"
exit 1

jq 'map(. + {Lat: "", Lng: "", PlaceId: "", PostalCode: ""}) | map(del(."Prelim Notes Nov 2019", ."Prelim likely count", ."VISIT", ."First Edition", ."Second Edition"))' from-csv-ontario.json > ontario-clean.json
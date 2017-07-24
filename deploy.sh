#!/bin/bash -x

function cleanup() {
   cf delete-service-broker -f acceptance-broker
}

function deploy() {
   cf push &&
   cf create-service-broker acceptance-broker admin password https://acceptance-broker.services-api-lite.cf-app.com
}

cleanup
deploy


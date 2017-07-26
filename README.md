# Acceptance Broker

A simple service broker conforming to the [Open Service Broker API](https://github.com/openservicebrokerapi/servicebroker/) used for acceptance testing.

---

### Installation
```bash
npm install
```

### Running
```bash
npm start
```

### Deploying (to Cloud Foundry)
```bash
cf push
```

### Configuring schemas

If you want the broker to advertise a schema for create service instance, update
service instance or create service binding, simply create a file with one of
the following names containing your JSON schema:
* `create-service-instance-schema.json`
* `update-service-instance-schema.json`
* `create-service-binding-schema.json`

Example schema:
```json
{
   "$schema": "http://json-schema.org/draft-04/schema#",
   "type": "object",
   "properties": {
      "foo": {
         "type": "string"
      }
   }
}
```

---

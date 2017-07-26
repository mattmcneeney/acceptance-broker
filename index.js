var express = require('express'),
   fs = require('fs'),
   app = express(),
   bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/v2/catalog', function(req, res) {
   // Load schemas from file (if they exist)
   var createServiceInstanceSchema = {},
      updateServiceInstanceSchema = {},
      createServiceBindingSchema = {};
   if (fs.existsSync('create-service-instance-schema.json')) {
      createServiceInstanceSchema = require('./create-service-instance-schema.json');
   }
   if (fs.existsSync('update-service-instance-schema.json')) {
      updateServiceInstanceSchema = require('./update-service-instance-schema.json');
   }
   if (fs.existsSync('create-service-binding-schema.json')) {
      createServiceBindingSchema = require('./create-service-binding-schema.json');
   }
   res.json({
      services: [{
         name: 'acceptance-broker',
         description: 'A simple service broker used for acceptance',
         id: '011dc653-871b-4bae-aff2-90bff0c75ca2',
         bindable: true,
         plans: [{
            name: 'standard',
            id: '97c8c167-de95-43c7-93df-12ee82059c0b',
            description: 'standard plan',
            free: true,
            schemas: {
               service_instance: {
                  create: {
                     parameters: createServiceInstanceSchema
                  },
                  update: {
                     parameters: updateServiceInstanceSchema
                  }
               },
               service_binding: {
                  create: {
                     parameters: createServiceBindingSchema
                  }
               }
            }
         }]
      }]
   });
});
app.put('/v2/service_instances/:instance_id', function(req, res) {
   res.json({});
});
app.patch('/v2/service_instances/:instance_id', function(req, res) {
   res.json({});
});
app.delete('/v2/service_instances/:instance_id', function(req, res) {
   res.json({});
});
app.put('/v2/service_instances/:instance_id/service_bindings/:binding_id', function(req, res) {
   res.json({});
});
app.delete('/v2/service_instances/:instance_id/service_bindings/:binding_id', function(req, res) {
   res.json({});
});

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
   console.log('Broker running on port ' + server.address().port);
});

'use strict';

var eyes = require('eyes');
var http = require('http');
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var eventJSON = '';

  exports.list_all_events = function(req, response) {
    parser.on('error', function(err) { console.log('Parser error', err); });
    
    var data = '';
    http.get('http://www.greenvillesc.gov/support/calendar.xml', function(res) {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          res.on('data', function(data_) { data += data_.toString(); });
          res.on('end', function() {
            parser.parseString(data, function(err, result) {
             response.send(result.rss.channel);
            });
          });
        }
      });
  };
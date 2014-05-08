'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  chimeras.find().toArray((err, records)=>{
    res.render('chimeras/index', {chimeras: records, title: 'Gallery | Our Handcrafted, Artisanal Abominations'});
  });
};

exports.show = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  var _id = Mongo.ObjectID(req.params.id);
  chimeras.findOne({_id: _id}, (err, record)=>{
    res.render('chimeras/show', {chimera: record, title: 'View Order | ' + record.name});
  });
};

exports.filter = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  var section = req.query.section;
  var value = req.query.value;
  chimeras.find({'section': value}).toArray((err, records)=>{
    res.render('chimeras/index', {chimeras: records, title: 'Gallery | Filter Chimeras'});
    console.log(records);
  });
};

exports.new = (req, res)=>{
  res.render('chimeras/new', {title: 'Custom Order Your Chimera'});
};

exports.create = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  chimeras.save(req.body, (err, obj)=>{
    res.redirect('/chimeras/'+ obj._id);
  });
};

exports.destroy = (req, res)=>{
  var chimeras = global.nss.db.collection('chimeras');
  var _id = Mongo.ObjectID(req.params.id);
  chimeras.findAndRemove({_id:_id}, (err, record)=>{
    res.redirect('/chimeras');
  });
};

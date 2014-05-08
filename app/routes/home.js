'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {title: 'Handcrafted, Artisanal Abominations'});
};

exports.help = (req, res)=>{
  res.render('home/help', {title: 'Node.js: Help'});
};

exports.about = (req, res)=>{
  res.render('home/about', {title: 'About the Chimera Factory'});
};

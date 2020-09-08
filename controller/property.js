var express = require('express');
var router = express.Router();
var Property = require('../models/property');



// GET /properties
exports.getProperties = (req, res) => {
    Property.find().then(function (properties) {
        res.render('properties/index', { properties: properties });
    });
}

// GET /properties/new
exports.getProperties = (req, res) => {
    Property.find().then(function (properties) {
        res.render('properties/new');
    });
}

// GET /properties/1
exports.getProperty = (req, res) => {
    var propertyId = req.params.id;
    Property.findOne({ _id: propertyId }).then(function (property) {
        res.render('properties/show', { property: property });
    });
}

// POST /properties
exports.addProperty = (req, res) => {
    var description = req.body.description;
    var imageUrl = req.body.imageUrl;
    var user = req.user;

    var property = new Property({ description: description, imageUrl: imageUrl, owner: user.id });
    property.save()
        .then(function (savedProperty) {
            res.redirect('/properties/' + savedProperty.id);
        });
}



// POST /properties/update
exports.editProperty = (req, res) => {
    var propertyId = req.body.propertyId;

    Property.findOne({ _id: propertyId })
        .then(function (property) {
            property.description = req.body.description;
            property.imageUrl = req.body.imageUrl;

            return property.save();
        })
        .then(function (updatedProperty) {
            return res.redirect('/properties/' + updatedProperty.id);
        });
}

// POST /properties/update
exports.deleteProperty = (req, res) => {
    var propertyId = req.body.propertyId;

    Property.findOne({ _id: propertyId })
        .then(function (property) {
            property.description = req.body.description;
            property.imageUrl = req.body.imageUrl;

            return property.save();
        })
        .then(function (updatedProperty) {
            return res.redirect('/properties/' + updatedProperty.id);
        });
}
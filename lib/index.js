/**
  * @module FalconideAPIV10Lib
  *
  * Falconide API documentation
  */

'use strict';

const Configuration = require('./configuration');
const EmailController = require('./Controllers/EmailController');
const Settings = require('./Models/Settings');
const EmailDetails = require('./Models/EmailDetails');
const Emailv1 = require('./Models/Emailv1');
const Files = require('./Models/Files');
const Attributes = require('./Models/Attributes');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of FalconideAPIV10Lib
    Configuration,
    // controllers of FalconideAPIV10Lib
    EmailController,
    // models of FalconideAPIV10Lib
    Settings,
    EmailDetails,
    Emailv1,
    Files,
    Attributes,
    // exceptions of FalconideAPIV10Lib
    APIException,
};

module.exports = initializer;

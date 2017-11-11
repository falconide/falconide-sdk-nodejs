/**
 * FalconideAPIV10Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const Settings = require('../lib/Models/Settings');
const EmailDetails = require('../lib/Models/EmailDetails');
const Emailv1 = require('../lib/Models/Emailv1');
const Files = require('../lib/Models/Files');
const Attributes = require('../lib/Models/Attributes');

const classMap = {
    Settings,
    EmailDetails,
    Emailv1,
    Files,
    Attributes,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
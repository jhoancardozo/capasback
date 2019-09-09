/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type:'String',
      required: true
    },
    last:{
      type:'String',
      required: true
    },
    edad:{
      type:'number',
      required: true
    },
    document:{
      type:'String',
      required: true,
      unique: true
    }

  },

};


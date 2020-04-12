var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var fileSchema = new Schema({
  path:  { type: String },
  caption: { type: String }
  });

module.exports = mongoose.model('Filemodels', fileSchema);

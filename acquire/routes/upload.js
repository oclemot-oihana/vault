const multer = require('multer');
const path   = require('path');

const dotenv = require('dotenv');
dotenv.config();

/** Storage Engine */
const storageEngine = multer.diskStorage({
  destination: process.env['Storagefilepath'],
  filename: function(req, file, fn){
    fn(null,  new Date().getTime().toString()+'-'+path.extname(file.originalname));
  }
}); 

//init

const upload =  multer({
  storage: storageEngine,
  limits: { fileSize:20000000 },
  fileFilter: function(req, file, callback){
    validateFile(file, callback);
  }
}).single('photo');


var validateFile = function(file, cb ){
  allowedFileTypes = /jpeg|jpg|png|gif/;
  const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType  = allowedFileTypes.test(file.mimetype);
  if(extension && mimeType){
    return cb(null, true);
  }else{
    cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
  }
}


module.exports = upload;

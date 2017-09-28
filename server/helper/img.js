const Storage = require('@google-cloud/storage');

const CLOUD_BUCKET = 'foxgram';

const storage = Storage({
  projectId: 'First-App',
  keyFilename: 'First-App-777a2bde0974.json'
});
const bucket = storage.bucket(CLOUD_BUCKET);

function getPublicUrl (filename) {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}
function sendUploadToGCS (req, res, next) {
  if (!req.file) {
    return next();
  }
  const gcsname = Date.now() + req.file.originalname;
  const file = bucket.file(gcsname);
  console.log(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  });

  stream.on('error', (err) => {
    req.file.cloudStorageError = err;
    next(err);
  });

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname;
    file.makePublic().then(() => {
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
      next();
    });
  });

  stream.end(req.file.buffer);
}
const Multer = require('multer');
const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb
  }
});

function cobaMasuk(req,res) {
  res.send('masuk ke images')
}
module.exports = {
  getPublicUrl,
  sendUploadToGCS,
  multer
};

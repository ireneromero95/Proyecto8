const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const createStorage = (folder, allowedFormats) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folder,
      allowedFormats: allowedFormats
    }
  });
};

const storageSong = createStorage('Songs', [
  'jpg',
  'png',
  'jpeg',
  'gif',
  'webp'
]);
const storagePlatform = createStorage('Platform', [
  'jpg',
  'png',
  'jpeg',
  'gif',
  'webp'
]);

const uploadSong = multer({ storage: storageSong });
const uploadPlatform = multer({ storage: storagePlatform });

exports.uploadSong = uploadSong;
exports.uploadPlatform = uploadPlatform;

// const multer = require('multer');
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const storageSong = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'Songs',
//     allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
//   }
// });

// const storagePlatform = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'Platform',
//     allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
//   }
// });

// const uploadSong = multer({ storage: storageSong });
// const uploadPlatform = multer({ storage: storagePlatform });

// exports.uploadSong = uploadSong;
// exports.uploadPlatform = uploadPlatform;

//Si aquí le cambiara el nombre a storage tendría que poner storage: elnombre, pero
//funciona con short cut

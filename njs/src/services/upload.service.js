const fs = require('fs');

const uploadService = {};

uploadService.uploadBase64 = (file, fileType) => {
    const base64Data = file.substr(file.indexOf(',') + 1, file.length);
    path = `${process.env.ASSETS_IMAGES_PATH}/${Date.now()}.${fileType}`;
    fs.writeFile(path, base64Data, 'base64', function(err) {
        return err;
    });
    return true;
}

module.exports = uploadService;

const uploadService = require('../services/upload.service');

const uploadFileController = {};

uploadFileController.uploadImage = async function (req, res) {
    if (req.body) {
        const file = req.body.file.toString();
        const fileType = req.body.fileType;
        const err = await uploadService.uploadBase64(file, fileType);
        if (err) {
            return res.status(500).json({ error: err });
        }
    }
}

module.exports = uploadFileController;

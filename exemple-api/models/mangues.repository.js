const mongoose = require('mongoose');

const MangaMongooseSchema = new mongoose.Schema({
    titol: {
        type: String,
        index: true
    },

    autor: {
        type: String,
        index: true
    },

    genere: {
        type: [String],
        index: true
    },

    caps: {
        type: Number,
        index: true
    },

    foto: {
        type: String,
        index: true
    },

    sinopsis: {
        type: String,
        index: true
    },
    });
const MangaMongooseModel = mongoose.model('Manga', MangaMongooseSchema);

function createManga(manga) {
    const mangaMongoose = new MangaMongooseModel(manga);
    return mangaMongoose.save();
}

function findMangaById(id) {
    return MangaMongooseModel.findById(id);
}

function findAllMangas() {
    return MangaMongooseModel.find();
}

function findMangaByTitol(titol) {
    return MangaMongooseModel.findOne({titol: titol});
}

function findMangaByAutor(autor) {
    return MangaMongooseModel.find({autor: autor});
}

function findMangaByGenere(genere) {
    return MangaMongooseModel.find({genere: {$in: genere} });
}

module.exports.createManga = createManga;
module.exports.findMangaById = findMangaById;
module.exports.findAllMangas = findAllMangas;
module.exports.findMangaByTitol = findMangaByTitol;
module.exports.findMangaByAutor = findMangaByAutor;
module.exports.findMangaByGenere = findMangaByGenere;

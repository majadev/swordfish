var mongoose = require('mongoose');
var Schema = mongoose.Schema;




//bookSchema 
var bookSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: false,
        default: "Andreas"
},    
    creator: {
        type: String,
        required: true
    },
    registeredmax: {
        type: Number,
        required: false,
        default:2
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 2
    },
    signedusers: {
        type: [String],
        required: true,
        default:"567665765"
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});


var Book = module.exports = mongoose.model('books', bookSchema, 'book');

// Get books
module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
};

// get Book by id
module.exports.getBookById = function (id, callback) {
    Book.findById(id, callback);
};

// Add Book
module.exports.addBook = function (book, callback) {
    Book.create(book, callback);
};

// update Book
module.exports.updateBook = function (id, book, options, callback) {
    var query = { _id: id };
    var update = {
        event: book.event,
        description: book.description,
        genre: book.genre,
        image_url: book.image_url,
        instructor: book.instructor,
        creator: book.creator,
        registeredmax: book.registeredmax,
        date: book.date,
        location: book.location,
        quantity: book.quantity,
        signedusers: book.signedusers
    }

Book.findOneAndUpdate(query, update, options, callback);
};

// delete Book
module.exports.removeBook = function (id, callback) {
    var query = { _id: id };
    Book.remove(query, callback);
    
};
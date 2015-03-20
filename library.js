/*
Author: Linda Swanson
Date: 20150320

The Library

You've been contracted to write a piece of software for the local library.
The software needs to meet the following requirements:

- The software should track the library's inventory of books

- Each book listing should include the title, author, genre (Fiction, Non-Fiction, etc.), length,
and checked-in/checked-out status

- Librarians should be able to:
a.) add books to the inventory
b.) remove books from the inventory
c.) view a list of all the books in the library
d.) view a list of all the books in a given genre
e.) search for a book by title or author
*/

var sget = require("sget");

function getInput(userPrompt) {
  return sget(userPrompt).trim();
}

var library = {
	books: [],
	addBook: function(book){
		this.books.push(book);
	},
	removeBook: function() {
		console.log("TEST: Stub function for removing a book from the library's array of books.")
	},
	viewAllBooks: function() {
		console.log("List of all the books in the library:");
		/* FIXME: tried forEach, but something's not right.  Returning to the basic for loop.
		this.books.forEach(function(book)) {
			console.log("Title: " + book.title;);
		}
		*/
		for (var i = 0; i < this.books.length; i++) {
			console.log((i + 1) + ". Title: " + this.books[i].title + "\tAuthor: " + this.books[i].author + "\tGenre: " + this.books[i].genre + "\tPages: " + this.books[i].pages + "\tChecked In: " + (this.books[i].checkedIn ? "yes" : "no"));
		};

	},
	viewBooksByGenre: function() {
		console.log("TEST: Stub function for viewing all the books in library.books array whose book.genre matches a genre input by the librarian.")
	},
	// Once basic functionality is working, possibly combine these next 2 functions into one, passing a parameter of how you'd like to search (by title or author -- or potentially any other characteristic)
	findBookByTitle: function() {
		console.log("TEST: Stub function for finding a book in the library.books array whose book.title matches the title typed in by the librarian.")
	},
	findBookByAuthor: function() {
		console.log("TEST: Stub function for finding a book in the library.books array whose book.author matches the title typed in by the librarian.")
	}
};


function Book(title, author, genre, pages, checkedIn) {
	this.title = title;
	this.author = author;
	this.genre = genre;
	this.pages = pages;
	this.checkedIn = checkedIn;
	/* trying Terry Talk's override toString to print out the object's contents so I don't get object Object
	this.prototype.toString = function bookToString() {
  		var ret = 'Title: ' + this.title + ' Author: ' + this.author + ' Genre: ' + this.genre + ' Pages: ' + this.pages + ' Checked In: ' + this.checkedIn;
  		return ret;
	}
	*/
}

/* TO DO: break out validation for user's book info input.  Check for blank text strings, numeric # of pages, move yes/no validation from case 1 to here.
function validateBookInput() {
}
*/

function showLibraryMenu() {
	console.log("\nPlease choose from the following options:");
	console.log("1 - Add a book");
	console.log("2 - Remove a book");
	console.log("3 - View a list of all the books");
	console.log("4 - View books by genre");
	console.log("5 - Search for a book by title");
	console.log("6 - Search for a book by author");
	console.log("exit - Exit the library program.");

	switch (getInput("What would you like to do?")) {
		case "1":
			//console.log("TEST: Add a book");
			newBook = new Book(getInput("Enter book title:"), getInput("Enter author:"), getInput("Enter genre:"), Number(getInput("Now many pages does it have?")), getInput("Is it checked in? (y/n)").toLowerCase());
			// Tried Terry Talk suggestion of overriding toString, but it didn't work.
			//console.log("TEST: newBook is: " + newBook.bookToString());
			switch (newBook.checkedIn) {
				case "yes":
				case "y":
					newBook.checkedIn = true;
					break;
				case "no":
				case "n":
					newBook.checkedIn = false;
					break;
				default:
					console.log("Please answer 'y' or 'n' whether the book was checked in. Please add it again.");
					showLibraryMenu();
					return;
			}
			library.addBook(newBook);
			showLibraryMenu();
			break;

		case "2":
			//console.log("TEST: Remove a book");
			library.removeBook();
			showLibraryMenu();
			break;

		case "3":
			//console.log("TEST: View all books");
			library.viewAllBooks();
			showLibraryMenu();
			break;

		case "4":
			//console.log("TEST: View books by genre");
			library.viewBooksByGenre();
			showLibraryMenu();
			break;

		case "5":
			//console.log("TEST: Find book by title");
			library.findBookByTitle();
			showLibraryMenu();
			break;

		case "6":
			//console.log("TEST: Find book by author");
			library.findBookByAuthor();
			showLibraryMenu();
			break;

		case "exit":
			console.log("Thank you for upgrading to the library program instead of using the card catalog.");
			break;

		default:
			console.log("Sorry, this program isn't designed to do that yet.  Please submit suggestions for additional features you would like to use.");
			showLibraryMenu();
			break;
	}
}

function startLibrary() {
	console.log("Hello librarians.  We know how you love to be organized, so here's an app to help you keep track of your books.");
	showLibraryMenu();
}

startLibrary();

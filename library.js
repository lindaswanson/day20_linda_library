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

/*
library
	inventory array of books
	add books
	remove books
	view all books
	view books where genre = x
	search by title
	search by author


book
	title
	author
	genre
	totalpages
	boolean checkedin/out
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

	menuChoice = getInput("What would you like to do?");
	console.log("TEST: menuChoice is " + menuChoice);

	switch (menuChoice) {
		case "1":
			console.log("TEST: Add a book");
			//library.addBook();
			showLibraryMenu();
			break;
		case "2":
			console.log("TEST: Remove a book");
			//library.removeBook();
			showLibraryMenu();
			break;
		case "3":
			console.log("TEST: View all books");
			//library.viewAllBooks();
			showLibraryMenu();
			break;
		case "4":
			console.log("TEST: View books by genre");
			//library.viewBooksByGenre();
			showLibraryMenu();
			break;
		case "5":
			console.log("TEST: Find book by title");
			//library.findBookByTitle();
			showLibraryMenu();
			break;
		case "6":
			console.log("TEST: Find book by author");
			//library.findBookByAuthor();
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

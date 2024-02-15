const currentDate = new Date();
const currentYear = currentDate.getFullYear();


// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, isbn, numOfPages, checkedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numOfPages = numOfPages;
        this.checkedOut = checkedOut;
        this.discarded = discarded;
    }
        checkOut(uses = 1){
            this.checkedOut += uses;
        }
}


// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyrightDate, isbn, numOfPages, checkedOut, discarded){
        super(title, author, copyrightDate, isbn, numOfPages, checkedOut, discarded);
    }
    disposeManual() {
        if(currentYear - this.copyrightDate >5){
            this.discarded ='Yes';
        }
    }
}

class Novel extends Book{
    constructor(title, author, copyrightDate, isbn, numOfPages, checkedOut, discarded){
        super(title, author, copyrightDate, isbn, numOfPages, checkedOut, discarded);
    }

    disposeNovel(checkedOut){
        if(this.checkedOut >100){
            this.discarded ='Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let book1 = new Novel('Pride and Prejudice','Jane Austen', 1813, '1111111111111', 432, 32, 'No');
let book2 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 'No');

// Code exercises 4 & 5 here:

//run book1 through disposeNovel and  maybe change it to "no
// same for book2 in disposeManual"

book2.disposeManual();
console.log(book2);

book1.checkOut(5);
book1.disposeNovel;
console.log(book1);

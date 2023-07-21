

export class BookSearchResult {
    count: number;
    results: Book[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((elem: any) => new Book(elem)) || [];
    }
}

export class Book {
    ISBN: string;
    title: string;
    author: string;
    yearOfPublication: number;
    publisher: string;
    _id: number;

    constructor(obj?: any) {
        this.ISBN = obj && obj.ISBN || "";
        this.title = obj && obj.title || "";
        this.author = obj && obj.author || "";
        this.yearOfPublication = obj && obj.yearOfPublication || 0;
        this.publisher = obj && obj.publisher || "";
        this._id = obj && obj._id || 0;
    }
}



export class Review {
    _id: number;
    book_id: number;
    profileName: string;
    title: string;
    score: number;
    text: string;
    time: Date;

    constructor(obj?: any) {
        this._id = obj && obj._id || 0;
        this.book_id = obj && obj.book_id || 0;
        this.profileName = obj && obj.profileName || "";
        this.title = obj && obj.title || "";
        this.score = obj && obj.score || 0;
        this.text = obj && obj.text || "";
        this.time = obj && obj.time && new Date(obj.time) || new Date();
    }
}
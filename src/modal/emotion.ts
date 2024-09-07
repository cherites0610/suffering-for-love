export default class Emotion {
    _id: number;
    title: string;
    category: number;
    date: string;

    constructor(_id: number, title: string, category: number, date: string) {
        this._id = _id;
        this.title = title;
        this.category = category;
        this.date = date;
    }
}
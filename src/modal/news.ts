export default class News {
    _id: number;
    title: string;
    url: string;
    date: string;

    constructor(_id: number, title: string, url: string, date: string) {
        this._id = _id;
        this.title = title;
        this.url = url;
        this.date = date;
    }
}
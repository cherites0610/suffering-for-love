export default class QA {
    _id: number;
    question: string;
    answer: string;

    constructor(_id: number, question: string, answer: string) {
        this._id = _id;
        this.question = question;
        this.answer = answer;
    }
}
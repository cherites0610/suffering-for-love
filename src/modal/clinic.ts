export default class Clinic {
    _id: number;
    address: string;
    name: string;
    phone: number;

    constructor(_id: number, address: string, name: string, phone: number) {
        this._id = _id;
        this.address = address;
        this.name = name;
        this.phone = phone;
    }
}
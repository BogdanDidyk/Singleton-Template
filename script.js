class MySQLDatabase {
    static #instance;
    #data;

    get data() {
        return this.#data;
    }

    constructor() {
        if (MySQLDatabase.#instance) return MySQLDatabase.#instance;

        this.receiveData();
        MySQLDatabase.#instance = this;
    }

    receiveData() {
        this.#data = Math.random();
    }
}

const d1 = new MySQLDatabase();
console.log(d1.data);
const d2 = new MySQLDatabase();
console.log(d2.data);
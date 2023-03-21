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

class MongoDBDatabase {
    static #data;

    // Static initialization block introduced from ES13
    static {
        this.#data = Math.random();
    }

    get data() {
        return MongoDBDatabase.#data;
    }
}

console.log("Obvious way:");
const d1 = new MySQLDatabase();
console.log(d1.data);
const d2 = new MySQLDatabase();
console.log(d2.data);

console.log("\nStatic initialization block way:");
const d3 = new MongoDBDatabase();
console.log(d3.data);
const d4 = new MongoDBDatabase();
console.log(d4.data);
import { v4 as uuid } from 'uuid';
import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/db.json', 'utf-8');
let db = JSON.parse(dbSerialized);


export default class Movie {
    constructor(data) {
        Object.assign(this, data);
        this._id = uuid();
    }

    static find(filter = {}) {
        let result = db.movies.slice();

        if (filter.title) {
            result = result.filter(m => m.title.toLowerCase().includes(filter.title.toLowerCase()));
        }
        
        return result;

    }

    static findOne(filter = {}) {
        let result = db.movies[0]

        if (filter._id) {
            result = db.movies.find(m => m._id == filter._id);
        }
        return result;
    }

    get id() {
        return this._id;
    }

    async save() {
        db.movies.push(this);
        const dbSerialized = JSON.stringify(db, null, 2);
        await fs.writeFile('./src/db.json', dbSerialized);
        return this;
    }

}
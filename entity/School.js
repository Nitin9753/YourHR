const db = require('../config/db');

class School {
    static addSchool(school, callback) {
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        db.execute(query, [school.name, school.address, school.latitude, school.longitude], callback);
    }

    static getAllSchools(callback) {
        const query = 'SELECT * FROM schools';
        db.execute(query, callback);
    }
}

module.exports = School;

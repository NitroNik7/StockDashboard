const DB = require('../util/database');

// 
module.exports = class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static find(user){
        let password = DB.execute(
            'SELECT passwd FROM user WHERE username = ?',
            [user.name]
        );

        return password;
    }
    
    static create(user) {
        return DB.execute(
          'INSERT INTO user (username, password) VALUES (?,?)', 
          [user.username, user.password]
        );
    }
}
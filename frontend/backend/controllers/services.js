const pool = require("../config/db.config");

module.exports = {
  createItem: (data, callBack) => {
    pool.query(
      `insert into todoitems(id, title, description, status) 
                values(?,?,?,?)`,
      [data.id, data.title, data.description, data.status],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getItemById: (id, callBack) => {
    pool.query(
      `select * from todoitems where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getItemByTitle: (title, callBack) => {
    pool.query(
      `select id,title,description,status from todoitems where title = ?`,
      [title],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getItems: (callBack) => {
    pool.query(
      `select id,title,description,status from todoitems`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateItemById: (data, callBack) => {
    pool.query(
      `update todoitems set title=?, description=?, status=? where id = ?`,
      [data.title, data.description, data.status, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteItem: (id, callBack) => {
    pool.query(
      `delete from todoitems where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};

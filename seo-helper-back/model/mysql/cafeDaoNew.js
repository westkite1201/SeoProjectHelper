
const dbHelpers = require('./mysqlHelpersPromise');
const moment =require('moment')

const getBookmarkComments = async (parameter) => {
	try {
		const connection = await dbHelpers.pool.getConnection(async conn => conn);
		try {
			/* Step 3. */
			const DATE = moment(parameter.DATE).format('YYYY-MM-DD')

			let sql = `
				SELECT *
				FROM CAFE_COMMENT
				WHERE COMMENT_STR LIKE "%ㄷㅅㅂㄱ%"
				`
			//await connection.beginTransaction(); // START TRANSACTION
			const [rows] = await connection.query(sql);
			await connection.commit(); // COMMIT
			connection.release();
            return {
					data : rows , 
					statusCode : 200 
				};
            
		} catch(err) {
			await connection.rollback(); // ROLLBACK
			connection.release();
			console.log('Query Error', err);
			return false;
        }
        
	} catch(err) {
		console.log('DB Error', err);
		return false;
	}
};









module.exports = {
	getBookmarkComments : getBookmarkComments,
  }
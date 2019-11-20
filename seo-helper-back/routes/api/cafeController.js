var express = require('express');
var router = express.Router();
const cafeDaoNew = require('../../model/mysql/cafeDaoNew')
const async = require('async');
const moment = require('moment')

let newtime = 0;
let newdate = 0;

function statusCodeErrorHandler(statusCode, callback , data) {
  switch (statusCode) {
      case 200:
          callback(null, JSON.parse(data));
          break;
      default:
          callback('error', JSON.parse(data));
          break;
  }
}

router.post('/getBookmarkComments',  async(req, res) => {
  let data ={
    DATE :  req.body.date,
  }
  try{
    let rows = await cafeDaoNew.getBookmarkComments(data);
    console.log('rows', rows)
    if(rows){
        console.log(rows)
        return res.json(rows)
    }else{
      console.log('error')
    }
  }catch(e){
    console.log('error' ,e)
  }
})



module.exports = router;

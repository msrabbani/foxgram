const db = require('../model/datas')
const FB = require('fb')

const allById = (req, res) => {
  db.find({
    author:req.headers.auth.id
  }).populate('author')
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const lost = (req, res) => {
  db.remove({
    _id: req.params.id,
    author: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

const insert = (req,res)=>{
  db.create({
    url: req.file.cloudStoragePublicUrl,
    deskripsi: req.body.deskripsi,
    author: req.headers.auth.id
  })
  .then(response => {
    res.send(response)
  })
  .catch(err =>{
    res.send(err)
  })
}

// var downloadFile = (req,res)=>{
//   bucket.file(req.body.file).download({
//     destination: `downloads/${req.body.file}`
//   }, function(err){
//     if(!err){
//       res.send('download success')
//     }else {
//       res.send(err)
//     }
//   });
// }


module.exports = {
  insert,
  allById,
  lost
}

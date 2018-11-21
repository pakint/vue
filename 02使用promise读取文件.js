

var fs = require('fs')

function getFileByPath(fpath){
  var promise = new Promise(function (resolve,reject){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
      if(err) return reject(err)
      resolve(dataStr)
    })
  })

  return promise
}
var p = getFileByPath('./1.txt')
p.then(function(data){
  console.log(data+'-----读取文件成功')
},function(err){
  console.log(err.message+'读取文件发生异常,没有找到此文件')
})


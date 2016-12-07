'use strict'

var fs = require('fs')
var chalk = require('chalk')
var path = require('path')

var ls = (dirPath) => {
  if(!fs.existsSync(dirPath)){
      console.log(chalk.bgRed('ls: cannot access \''+ dirPath +'\': No such file or directory'))
    }else {
      fs.readdirSync(dirPath).forEach(file => {
        var st = fs.lstatSync(path.join(path.resolve(dirPath), file));

        if(st.isDirectory())
          console.log(chalk.bgBlue(file));
        else
          console.log(chalk.black(chalk.underline.bgWhite(file)));
      });
    }
}

module.exports = ls

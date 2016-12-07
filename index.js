'use strict'

var fs = require('fs')
var chalk = require('chalk')

var ls = (path) => {
  if(!fs.existsSync(path)){
      console.log(chalk.bgRed('ls: cannot access \''+ path +'\': No such file or directory'))
    }else {
      fs.readdirSync(path).forEach(file => {
        var st = fs.lstatSync(file);

        if(st.isDirectory())
          console.log(chalk.bgBlue(file));
        else
          console.log(chalk.black(chalk.underline.bgWhite(file)));
      });
    }
}

module.exports = ls

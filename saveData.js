
let fs = require('fs')

var caches = []
setInterval(()=>{

    for(const cache of caches){
      fs.writeFile(cache.local, cache.data.filter(z => z).join("\n"), function (err) {
        if (err) console.log(err);
      });
    }
    
    }, 3000)
    
let start = (_cmd, value)=>{
    try {

            var cmds = [
              {
                name: "promo",
                local: process.cwd() + "/output/promo.txt",
              },
            ];
            
              if (cmds.find((x) => x.name === _cmd)) {
                let cmd = cmds.find((x) => x.name === _cmd);
            
                let cache = caches.find(x => x.local === cmd.local)
            
                if(!cache){
            
                  var file = fs
                  .readFileSync(cmd.local, { encoding: "utf8", flag: "r" })
                  .split("\n").filter(z => z);
            
                  caches.unshift({local: cmd.local, data: file})
            
                  cache = {local: cmd.local, data: file}
            
                }
            
                cache.data.push(value);

            }

      } catch(e) {
        console.log(e)
        return null
    }
    }
module.exports = start;
var fs = require('fs');
var path = require('path');
let file = fs.openSync('index.css','a'); //需要写入的文件路径没有会创建并且打开文件并采用追加标识
var filePath = path.resolve(__dirname+'/fonts'); //要遍历的文件夹所在的路径
fileDisplay(filePath); //调用文件遍历方法
/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath) {
    fs.readdir(filePath, function(err, files) {  //根据文件路径读取文件，返回文件列表
        if (err) {
            console.warn(err, "读取文件夹错误！")
        } else {
            files.forEach(function(filename) {  //遍历读取到的文件列表
                var filedir = path.join(filePath, filename);  //获取当前文件的绝对路径
                fs.stat(filedir, function(eror, stats) {  //根据文件路径获取文件信息，返回一个fs.Stats对象
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile(); //是文件
                        var isDir = stats.isDirectory(); //是文件夹
                        if (isFile) {
                            const filenam_css =filename.replace('-',' ').replace(',',' ').replace('[',' ').replace(']',' ');//获取替换之后的文件夹
                            const name_css =filenam_css.substring(0, filenam_css.lastIndexOf("."));//获取字体名
                            const suffix = filenam_css.substring(filenam_css.lastIndexOf(".")+1);//获取文件类型
                            let file_value =`
                            @font-face {
                                font-family:${name_css};
                                src: url('./fonts/${filename}') format('${suffix}')
                            }
                            `
                            fs.appendFileSync(file,file_value) //同步追加写入
                        }
                        if (isDir) {
                            fileDisplay(filedir); //尾递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}
console.log('字体写入完成，2秒后将关闭该窗口');
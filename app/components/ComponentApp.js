/**
 * Created by zhengjianhui on 17/1/19.
 */
import 'normalize.css';
require('../style/main.css');
let React = require('react');


// loader json 文件
var imageDatas = require('../data/imageDatas.json');
// 自执行函数
imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;

})(imageDatas);
// (imageDatas) 将imageDatas 作为参数传入 在函数后加上() 函数会立即执行
// () 内可以传递参数


var ComponentApp = React.createClass({
    render : function() {
     return <section className="stage">
        <section className="img-sec">
          <br/>
          <br/>
          <br/>
          <br/>


          hello gugu classmates
        </section>
        <nav className="conterllor-nav">

        </nav>
      </section>
    }
  });

export default ComponentApp;

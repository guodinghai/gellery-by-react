require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
//获取图片数据
let imageDatas=require('../data/imageDatas.json');

//利用自执行函数，图片信息转为图片的URL信息
imageDatas=(function genImageURl(imageDatasArr){
	for(var i=0,j=imageDatasArr.length;i<j;i++){
		var singleImageData=imageDatasArr[i];
		singleImageData.imageURL=require('../images/'+singleImageData.fileName);
		imageDatasArr[i]=singleImageData;
	}
	return imageDatasArr;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
     <section className="stage">
     	<section className="img-sec">
     	</section>
     	<nav className="controller-nav">
     	</nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

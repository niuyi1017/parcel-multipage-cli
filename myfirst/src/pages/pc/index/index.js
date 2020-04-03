import '../../../main'
import '../index/index.styl'
import { getIndex } from '../../../api/index'

window.onload = () => {
  
  // 引入并使用layui相关组件
  layui.use([ 'layer', 'element'], function() {
    var layer = layui.layer //弹层
    ,element = layui.element; //元素操作 等等...

    /*layer弹出一个示例*/
    layer.msg('Hello World');
  });
  
  //异步操作
  getIndex('http://sditer.com:8088/mall/api/mallListByCatApi.php?catId=565').then(res => {
    console.log(res)
  })
  
  // 引入并使用npm包
  import('swiper').then(module => {
    const Swiper = module.default
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical', 
      autoplay: true
      })        
    })
      
      

  }
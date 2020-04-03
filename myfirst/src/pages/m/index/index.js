import '../../../main'
import '../index/index.styl'

window.onload =  () => {
  
  layui.use([ 'layer'], function() {
    var layer = layui.layer //弹层
    /*layer弹出一个示例*/
    layer.msg('Hello World');
  });

  import('swiper').then(module => {
      const Swiper = module.default
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })        
    })
  }
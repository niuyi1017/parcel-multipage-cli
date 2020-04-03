
// 主函数
(function init(window) {

    // 0. 处理需要区分开发环境和生成环境的特殊指令
    if (process.env.NODE_ENV !== 'production') {      //开发环境
        // do something
    } else {                                         // 生产环境
        // do something
    }


    // 1.判断PC端、移动端,并跳转到对应的首页
    window.addEventListener('resize', function () {
        ScrrenWidth();
    })
    ScrrenWidth();



    // 2.引入全局js、css
    loadLayui('https://www.layuicdn.com/layui/layui.js', 'https://www.layuicdn.com/layui/css/layui.css')
    loadIconfont('//at.alicdn.com/t/font_1633596_94e5cgu2ah.css')



    // 3. 注册全局方法
    window.gotoUrl = (url, newTab = false) => {
        if (url == '-1') {
            window.history.go(-1)
        }
        else if (newTab)
            window.open(url, 'target', '')
        else
            window.location.href = url
    }
    window.callPhone = (phoneNumber) => {
        window.location.href = `tel://${phoneNumber}`
    }
    window.eduToast = (text, time = 1000) => {
        let toast = document.createElement('div')
        toast.classList.add("toast")
        let html = ` <p class="content">${text}</p>`
        toast.innerHTML = html
        document.body.appendChild(toast)
        setTimeout(() => {
            let toast = document.querySelector('.toast')
            document.body.removeChild(toast)
        }, time)
    }


})(window)




function ScrrenWidth() {
    var mobile = /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);
    var url = window.location.href;
    if (mobile) {
        if (url.indexOf("/m") < 0) {
            window.location.href = `${window.location.protocol}//${window.location.host}/m/index/index.html`
        }

    } else {
        if (url.indexOf("/pc") < 0) {
            window.location.href = `${window.location.protocol}//${window.location.host}/pc/index/index.html`
        }
    }
}

function loadLayui(jsUrl, cssUrl) {

    var head = document.getElementsByTagName('head')[0],
        scriptTag = document.createElement('script');
    scriptTag.src = jsUrl;
    head.appendChild(scriptTag);

    var head = document.getElementsByTagName('head')[0],
        linkTag = document.createElement('link');
    linkTag.href = cssUrl;
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('media', 'all');
    linkTag.setAttribute('type', 'text/css');
    head.appendChild(linkTag);


}

function loadIconfont(iconUrl) {
    var head = document.getElementsByTagName('head')[0],
        linkTag = document.createElement('link');
    linkTag.href = iconUrl;
    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('media', 'all');
    linkTag.setAttribute('type', 'text/css');

    head.appendChild(linkTag);
}


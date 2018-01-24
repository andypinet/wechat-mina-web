// import aui from "../../framework/aui/index";

// 检测是否在小程序里
let isinwx = false;
try {
    if (wx) {
        isinwx = true
    }
} catch(e) {
    isinwx = false;
}

let defineComponent = function (define) {
    let ret = define;
    if (isinwx) {
        ret.data = define.data();
    }
    return ret;
};

window.defineComponent = defineComponent;

// aui.utils = {};
// aui.utils.getRandomString = function (length = 7) {
//     return Math.random().toString(36).substring(length);
// };
// aui.utils.addStyle = function (key, css) {
//     if (!scopeStyles[key]) {
//         let head = document.head || document.getElementsByTagName('head')[0];
//         let style = document.createElement('style');
//         let id = "scopedcss_" + key;
//
//         style.id = id;
//         style.type = 'text/css';
//         if (style.styleSheet){
//             style.styleSheet.cssText = css;
//         } else {
//             style.appendChild(document.createTextNode(css));
//         }
//
//         scopeStyles[key] = style;
//         head.appendChild(style);
//     }
// };

// 小程序
function handleArrayDirective(exp) {
    let attr = "";
    let arr = exp.split("in");
    if (arr && arr.length > 1) {
        let left = arr[0].trim();
        let right = arr[1].trim();
        let s = left.split(",");
        attr = attr + `wx:for="{{${right}}}"`;
        if (s.length === 1) {
            attr = attr + ` wx:for-item="{{${s[0].trim()}}}"`;
        }

        if (s.length === 2) {
            let f = s.join().split('(')[1].split(')')[0].split(",");
            attr = attr + ` wx:for-item="{{${f[0].trim()}}}"`;
            attr = attr + ` wx:for-index="{{${f[1].trim()}}}"`;
        }
    }
    return attr;
}

if (!isinwx) {
    function Component(define) {
        let ret = define;
        // ret.template = define.template.replace(/(<view)([^>])(@:if=")([^"]*)(">)/g, function(match, $1, $2, $3, $4, $5){
        //     return $1 + $2 + $3.replace("@:if", "v-if") + $4 + $5;
        // });
        // ret.template = ret.template.replace(/(<view)([^>])(@:for=")([^"]*)(">)/g, function(match, $1, $2, $3, $4, $5){
        //     return $1 + $2 + $3.replace("@:for", "v-for") + $4 + $5;
        // });
        // ret.template = ret.template.replace(/(<view)([^>]*)>/g, function(match, $1, $2, $3){
        //     return $1.replace("view", "aux-view") + $2 + ">" ;
        // });
        // ret.template = ret.template.replace(/(<\/[\s]*)(view>)/g, function(match, $1, $2, $3){
        //     return $1 + $2.replace("view", "aux-view");
        // });
        Vue.component(ret.$is, ret);
    }
    window.Component = Component;

    function Page(define) {
        let ret = define;
        Vue.component(ret.$is, ret);
    }

    window.Page = Page;
}


let MyPlugin = {};
MyPlugin.install = function (Vue, options) {
    Vue.prototype.setData = function (value) {
        return value;
    };
};


Vue.config.ignoredElements = [
    "aux-view"
];

Vue.use(MyPlugin);
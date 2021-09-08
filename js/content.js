// function useBgFn(fnName, ...params) {
//     console.log(params)
//     chrome.runtime.sendMessage({fnName, params}, function(response) {
//         console.log('收到来自后台的回复：' + response);
//     });
// }

let nowTarget = null

document.oncontextmenu = function ({target}) {
    recoverHighlight(nowTarget)
    nowTarget = target
    hightLightElement(target)
}

document.onclick = function () {
    recoverHighlight(nowTarget)
}

function hightLightElement (ele) {
    if(!ele) {
        return
    }
    ele.oldBorder = ele.style.border
    ele.style.border = "2px solid black"
}

function recoverHighlight (ele) {
    if(!ele) {
        return
    }
    ele.style.border = ele.oldBorder
}

function clearNowTarget () {
    nowTarget = null
}

function hideNowTarget (ele) {
    if(!nowTarget) {
        return
    }
    nowTarget.style.display = 'none'
}

chrome.extension.onMessage.addListener(function(request, _, response) {
    console.log('content获取信息', request);
    if(this[request.fnName]) {
        this[request.fnName].apply(this, request.params)
    }
});
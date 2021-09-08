
chrome.contextMenus.create({
    type: 'normal', // 类型，可选：["normal", "checkbox", "radio", "separator"]，默认 normal
    title: '隐藏元素', // 显示的文字，除非为“separator”类型否则此参数必需，如果类型为“selection”，可以使用%s显示选定的文本
    contexts: ['all'], // 只有当选中文字时才会出现此右键菜单
    onclick: clickMenus
}, function () {
    console.log('contextMenus are create.')
});


function clickMenus(info, tab) {
    chrome.tabs.sendMessage(tab.id, { 'fnName': 'hideNowTarget' });
}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log('收到来自content-script的消息：');
//     console.log(request, sender, sendResponse);
//     if (request.fnName === 'rightMenu') {
//         createMenu()
//     }
//     sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
// });
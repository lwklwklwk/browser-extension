let translateBox = null;

document.addEventListener('mouseup', (e) => {
    initTranslateBox()
    const text = document.getSelection().toString();
    translateBox.style.display = 'none'

    if (text) {
        translateBox.innerHTML = ''
        translateBox.style.top = `${e.pageY}px`
        translateBox.style.left = `${e.pageX}px`
        translateBox.style.display = 'block'
        axios.get('https://fanyi.youdao.com/translate?&doctype=json&type=AUTO', {
            params: {
                i: text
            }
        }).then(function (response) {
            console.log(response.data.translateResult);
            if (!response.data.translateResult) {
                return
            }
            response.data.translateResult[0].forEach(item => {

                translateBox.appendChild(createRow(item))
            })
        }).catch(function (error) {
            console.log(error);
        });
    }
})

function initTranslateBox() {
    if (translateBox) {
        return
    }

    translateBox = document.createElement('div')
    translateBox.style = `position: absolute;                
                        background: antiquewhite;
                        padding: 8px 16px;
                        z-index: 99999;`
    translateBox.id = "translateBox"
    document.body.appendChild(translateBox)
    return
}

function createRow(data) {
    let dataMap = {
        src: '原文：',
        tgt: '翻译：'
    }
    let row = document.createElement('div');
    row.style = `line-height: 32px; color: black;`
    Object.keys(data).forEach(key => {
        let title = document.createElement('div'),
            content = document.createElement('div');
        title.style = `color: brown; font-weight: 600;`
        title.innerHTML = dataMap[key]
        content.innerHTML = data[key]
        row.appendChild(title)
        row.appendChild(content)
    })
    return row
}
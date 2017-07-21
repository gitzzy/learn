/**
 * Created by zzy on 2017/7/20.
 */
ajax({
    type: 'GET',
    url: 'lessons.json',
    dataType: 'json',
    data: '',
    beforeSend: function () {

    },
    success: function (msg) {
        if (msg) {
            createDom('wrapper', msg.lessons);
        }
    },
    error: function () {
        alert('error!');
    }
});


function createDom(id, data) {
    var cId = document.getElementById(id);
    for (var i = 0; i < data.length; i++) {
        var dt = document.createElement('dt');
        var title = document.createTextNode(data[i].title);
        dt.appendChild(title);

        var dl = document.createElement('dl');
        dl.appendChild(dt);

        cId.appendChild(dl);
        dl.onclick = function () {
            showLesson(this);
        };

        var list = data[i].list;
        for (var j = 0; j < list.length; j++) {
            var name = document.createTextNode(list[j].name);

            var a = document.createElement('a');
            a.href = list[j].href;
            a.target = '_blank';
            a.appendChild(name);

            var dd = document.createElement('dd');
            dd.appendChild(a);
            dl.appendChild(dd);
        }
    }
}

function showLesson(t) {
    var dls = siblings(t);
    for (var i = 0; i < dls.length; i++) {
        dls[i].style.height = '30px';
    }
    t.style.height = 'auto';
}

// 查找兄弟节点
function siblings(el) {
    var els = el.parentNode.children;
    return els;
}
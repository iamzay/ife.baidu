
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
    var data=[];
    var list=document.getElementById("source");
    var listItems=list.getElementsByTagName("li");
    for(var i=0;i<listItems.length;i++){
        // 获得城市名
        var city=listItems[i].firstChild.nodeValue;
        var pattern=/(..)空气/;
        var match=pattern.exec(city);
        // 获得空气指数
        var b=listItems[i].getElementsByTagName("b");
        var aqi=parseInt(b[0].firstChild.nodeValue);
        data.push([match[1],aqi]);
    }
    return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function compare(data1,data2)
{
    return data1[1]-data2[1];
}

function sortAqiData(data) {
    data.sort(compare);
    return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    var list=document.getElementById("resort");
    for(var i=0;i<data.length;i++){
        var listItem=document.createElement("li");
        var textNode=document.createTextNode(data[i][0]+": "+data[i][1]);
        listItem.appendChild(textNode);
        list.appendChild(listItem);
    }
    var button=document.getElementById("sort-btn");
    button.onclick=null;
}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {
    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    var button=document.getElementById("sort-btn");
    button.onclick=btnHandle;
}

window.onload=function(){
    init();
}

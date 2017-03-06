var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

var sort=new Array();

for(var i=0;i<aqiData.length;i++){
    if(aqiData[i][1]>=60){
        var j=0;
        for(j=sort.length-1;j>=0&&aqiData[i][1]>sort[j][1];j--)
            ;
        sort[sort.length]=sort[j+1];
        sort[j+1]=aqiData[i];
    }
}

var list=document.getElementById("aqi-list");
for(var k=0;k<sort.length;k++){
    var li=document.createElement("li");
    var index=k+1;
    var text=document.createTextNode("第"+index+"名:"+sort[k][0]+", "+sort[k][1]);
    li.appendChild(text);
    list.appendChild(li);
}

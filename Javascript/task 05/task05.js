var tiles=[];
var numbers=[];

window.onload=function(){
    var input=document.querySelector("input");
    input.addEventListener("keypress",function(event){
        var char=String.fromCharCode(event.charCode);  // incompatible with IE 8
        if(!/\d/.test(char)&&event.charCode>9&&!event.ctrlKey){
            event.preventDefault();
        }
    });
    document.addEventListener("click",function(event){
        var value="";
        switch(event.target.id){
        case "insert-btn":
            value=document.querySelector("input").value;
            if(!isValueValid(value)){
                alert("Please input an integer between 10 and 100.");
                return;
            }
            if(!insertNumber(value)){
                alert("There is no space left.");
            }
            break;
        case "sort-btn":
            sort();
            break;
        }
    });
}

function isValueValid(value){
    var valueAsInt=parseInt(value);
    return valueAsInt>=10&&valueAsInt<=100;
}

function insertNumber(value){
    if(tiles.length==60){
        return false;
    }
    var tile=document.createElement("div");
    tile.style.height=value+"px";
    // place the first tile
    tile.style.bottom="0px";
    tile.className="tile";
    var i,beforeLeft;
    if(!tiles.length){
        tile.style.left="440px";
    } else if(tiles.length==59){// place the last tile
        tile.style.right="5px";
    } else if(tiles.length%2){
        tile.style.left=(parseInt(tiles[tiles.length-1].style.left)+15)+"px";
    } else{
        for(i=0;i<tiles.length;++i){
            beforeLeft=tiles[i].style.left;
            tiles[i].style.left=(parseInt(beforeLeft)-15)+"px";
        }
        tile.style.left=(parseInt(tiles[tiles.length-1].style.left)+15)+"px";
    }
    var container=document.querySelector("#tile-container");
    container.appendChild(tile);
    tiles.push(tile);
    numbers.push(parseInt(value));
    return true;
}

function sort(){
    var i,j,tmp;
    for(j=numbers.length-1;j>=1;--j){
        for(i=0;i<j;++i){
            if(numbers[i]>numbers[i+1]){
                tmp=numbers[i+1];
                numbers[i+1]=numbers[i];
                numbers[i]=tmp;
            }
        }
    }
    alert(numbers);
}

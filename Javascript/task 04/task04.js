window.onload=function(){
    document.addEventListener("click",function(event){
        var value;
        switch(event.target.id){
        case "left-in":
            value=document.querySelector("input").value;
            if(!isInputValid(value)){
                return;
            }
            // 从左侧插入
            insertNumber(value,true);
            break;
        case "right-in":
            value=document.querySelector("input").value;
            if(!isInputValid(value)){
                return;
            }
            // 从右侧插入
            insertNumber(value,false);
            break;
        case "left-out":
            removeLeft();
            break;
        case "right-out":
            removeRight();
            break;
        }
    });
}

function removeLeft(){
    var block=document.querySelector("#block");
    if(block.children.length){
        block.removeChild(block.firstElementChild);
    }
}

function removeRight(){
    var block=document.querySelector("#block");
    if(block.children.length){
        block.removeChild(block.lastElementChild);
    }
}

function isInputValid(value){
    if(!value.length){
        alert("Input is empty!");
        return false;
    }
    if(!(/\d+/.test(value))){
        alert("Input must be integer!");
        return false;
    }
    return true;
}

function insertNumber(value,direction){
    var block=document.querySelector("#block");
    var numberTile=document.createElement("div");
    numberTile.style.width="auto";
    numberTile.textContent=value;
    numberTile.style.backgroundColor="red";
    numberTile.style.color="white";
    numberTile.style.display="inline-block";
    numberTile.style.margin="10px";
    numberTile.style.marginLeft="0px";
    numberTile.style.marginBottom="0px";
    numberTile.style.padding="10px";
    numberTile.style.textAlign="center";
    numberTile.onclick=clickTile;
    numberTile.style.cursor="pointer";
    if(direction){
        block.insertBefore(numberTile,block.firstChild);
    } else{
        block.appendChild(numberTile);
    }
}

function clickTile(event){
    var elem=event.target;
    elem.parentNode.removeChild(elem);
}

var tree=new BinaryTree();
var begin=1,
    end=100,
    size=7;
var actuator=new HtmlActuator();

window.onload=function(){
    manageInput();
}

function manageInput() {
    var randomBtn=document.querySelector(".random-btn"),
        beginBtn=document.querySelector(".begin-btn");

    prepareTree();

    randomBtn.addEventListener("click",prepareTree);

    beginBtn.addEventListener("click",function(){
        console.log("begin-btn clicked");
        actuator.traversal();
    });
}

function  prepareTree() {

    console.log("random-btn clicked");
    if(!tree.isEmpty()){
        tree.clear();
    }
    tree.generate(begin,end,size);
    actuator.actuate(tree);
}


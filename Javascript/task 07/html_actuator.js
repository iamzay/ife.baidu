function HtmlActuator() {
    this.treeContainer=document.querySelector(".tree-container");
    this.select=document.querySelector("select");
    this.randomBtn=document.querySelector(".random-btn");
    this.beginBtn=document.querySelector(".begin-btn");
}

HtmlActuator.prototype.clear=function () {

    while(this.treeContainer.firstChild){
        this.treeContainer.removeChild(this.treeContainer.firstChild);
    }
}

HtmlActuator.prototype.actuate=function (tree) {
    var currentNode=tree._root,
        nodes=[],
        divs=[],
        fragment,
        currentDiv,
        tmpDiv;

    this.clear();

    if(tree.isEmpty()){
        return;
    }

    fragment=document.createDocumentFragment();
    currentDiv=this.newDiv(currentNode.val,true);
    fragment.appendChild(currentDiv);

    nodes.push(currentNode);
    divs.push(currentDiv);

    while(nodes.length){
        currentNode=nodes.shift();
        currentDiv=divs.shift();

        if(currentNode.left!==null){
            tmpDiv=this.newDiv(currentNode.left.val,false);
            nodes.push(currentNode.left);
            divs.push(tmpDiv);
            currentDiv.appendChild(tmpDiv);
        }

        if(currentNode.right!==null){
            tmpDiv=this.newDiv(currentNode.right.val,false);
            nodes.push(currentNode.right);
            divs.push(tmpDiv);
            currentDiv.appendChild(tmpDiv);
        }
    }

    this.treeContainer.appendChild(fragment);
}

HtmlActuator.prototype.newDiv=function (value,isRoot) {
    var div=document.createElement("div"),
        span=document.createElement("span");

    div.classList.add("node");
    if(isRoot){
        div.classList.add("root");
    } else{
        div.classList.add("no-root");
    }

    span.textContent=value.toString();

    div.appendChild(span);

    return div;
}

HtmlActuator.prototype.traversal=function(){
    var rootDiv=this.treeContainer.children[0],
        traversal=[];

    function preorderTraversal(nodeDiv){

        if(nodeDiv){
            traversal.push(nodeDiv);

            if(nodeDiv.children[1]){
                preorderTraversal(nodeDiv.children[1]);
            }

            if(nodeDiv.children[2]){
                preorderTraversal(nodeDiv.children[2]);
            }
        }
    }

    function inorderTraversal(nodeDiv){

        if(nodeDiv){

            if(nodeDiv.children[1]){
                inorderTraversal(nodeDiv.children[1]);
            }

            traversal.push(nodeDiv);

            if(nodeDiv.children[2]){
                inorderTraversal(nodeDiv.children[2]);
            }
        }
    }

    function postorderTraversal(nodeDiv){

        if(nodeDiv){

            if(nodeDiv.children[1]){
                postorderTraversal(nodeDiv.children[1]);
            }

            if(nodeDiv.children[2]){
                postorderTraversal(nodeDiv.children[2]);
            }

            traversal.push(nodeDiv);
        }
    }
    function animate(cnt){

        if(cnt>0){
            traversal[cnt-1].classList.toggle("current-node");
        }

        if(cnt==size){
            actuator.randomBtn.disabled=false;
            actuator.beginBtn.disabled=false;
            return;
        }

        traversal[cnt].classList.toggle("current-node");
        setTimeout(function(){
            animate(cnt+1);
        },1000);
    }

    this.randomBtn.disabled=true;
    this.beginBtn.disabled=true;

    switch(this.select.value){
    case "pre_order":
        preorderTraversal(rootDiv);
        break;

    case "in_order":
        inorderTraversal(rootDiv);
        break;

    case "post_order":
        postorderTraversal(rootDiv);
        break;

    // no default
    }

    animate.call(this,0);
}

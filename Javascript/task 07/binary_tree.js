function BinaryTree() {
    this._root=null;
}

BinaryTree.prototype.add=function(value){
    var node={
        val:value,
        right:null,
        left:null
    },
        current;

    if(this._root===null){
        this._root=node;
    } else{
        current=this._root;

        for(;;){

            if(current.val===value){
                return false;
            } else if(current.val<value){

                if(current.right===null){
                    current.right=node;
                    break;
                }
                current=current.right;
            } else{

                if(current.left===null){
                    current.left=node;
                    break;
                }
                current=current.left;
            }
        }
    }
    return true;
}

BinaryTree.prototype.generate=function(begin,end,size){
    var value;

    while(size){
        value=Math.floor(begin+Math.random()*(end-begin+1));

        if(this.add(value)){ // 可能死循环
            size--;
        }
    }
}

BinaryTree.prototype.isEmpty=function() {
    return this._root===null;
}

BinaryTree.prototype.clear=function() {
    this._root=null;
}

function LinkList(){
    function Node(element){
        this.head=element;
        this.next=null
    }
    this.append=function(element){
        const node=new Node(element)
        if(!this.head){
            this.head=node
            this.length=1;
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
            this.length++
        }
    }
    this.remove=function(index){
        if(index<0 || index>=this.length)return null
        let current=this.head;
        let pre;

        if(!index===0){
            this.head=null
        }else{
            for(let i=0;i<index;i++){
                pre=current;
                current=current.next;
            }
            pre.next=current.next;
        }

        this.length--
        return current.element
    }
}
/**
 * Linked-List is like object but keep key and value properties
 * all nodes remember the next node
 * it start wwith head and ends with tail
 * append = add data at the end of the list
 * prepend = add data at the begining of the list
 * delete = remove a node
 * find = find a node by value not the key
 * LinkedList cant refer to nodes by  indexOf
 * you cant iteriate with loops
 * toArray(){} is the option to see inside the list
 */

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
// add value in the end of the linkedList
    append(value) {
        const newNode = {value: value, next: null};

        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head){
            this.head = newNode;
        }
    }
// add value in the beegining of the linkedList
    prepend(value){
        const newNode = {value: value, next:this.head}
        this.head = newNode;
        if(!this.tail){
            this.tail = newNode;
        }
    }

    find(value){
        if(!this.head){
            return null
        }
        let curNode = this.head;

        while(curNode){
           if(curNode.value === value){
            return curNode
           }
           curNode = curNode.next
        }

        return null
    }

    delete(value){
        if(!this.head){
            return
        }

        while(this.head && this.head.value === value){
            this.head = this.head.next
        }

        let curNode = this.head

        while(curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next
            }else{
                curNode = curNode.next
            }
        }

        if(this.tail.value === value){
            this.tail = curNode
        }

    }

    toArray() {
        const elements = [];

        let curNode = this.head
        while(curNode){
            elements.push(curNode)
            curNode = curNode.next
        }
        return elements
    }

}
const linkedList1 = new LinkedList();
linkedList1.prepend('Start')
linkedList1.append(100)
linkedList1.append(true)
linkedList1.append("AppendLast")
linkedList1.append(12.99)
linkedList1.append(11.10)
linkedList1.prepend('Before-Start')

console.log(linkedList1.toArray())

linkedList1.delete('Before-Start')
linkedList1.delete(100)
linkedList1.delete(12.99)

console.log(linkedList1.toArray());

console.log(linkedList1.find('Start'))
console.log(linkedList1.find(11.10))
console.log(linkedList1.find(12.99) || "Can't find your info...")

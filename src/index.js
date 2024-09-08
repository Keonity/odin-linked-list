import './styles.css';
import { Node } from './node';

class LinkedList {
    constructor() {
        this.head = new Node(`Head`, null);
        this.tail = this.head;
        this.size = 0;
    }

    prepend(value) {
        if (this.size === 0) {
            this.head.changeValue(value);
            this.tail = this.head;
            this.size = 1;
        }
        else {
            let newHead = new Node(value, this.head);
            this.head = newHead;
            this.size = this.size + 1;
        }
        /*  let newHead = new Node(value, this.head);
        let currHead = this.head;
        currHead.changeNext(newHead); 

        this.head = newHead; */
    }

    append(value) {
        if (this.size === 0) {
            this.head.changeValue(value);
            this.tail = this.head;
            this.size = 1;
        }
        else {
            let newTail = new Node(value, null);
            let currTail = this.tail;
            currTail.changeNext(newTail);
    
            this.tail = newTail;
            this.size = this.size + 1;
        }
    }

    toString() {
        let currNode = this.head;
        while (currNode) {
            currNode.print();
            currNode = currNode.next;
        } 
    }

}

let defaultNode = new Node();
defaultNode.print();

let newNode = new Node(1, defaultNode);
newNode.print();

let newList = new LinkedList();
newList.append(2);
newList.prepend(1);
newList.toString();

console.log(`Odin Linked List Demo`);
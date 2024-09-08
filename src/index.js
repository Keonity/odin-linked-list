import './styles.css';
import { Node } from './node';

class LinkedList {
    constructor() {
        this.head = new Node(`Head`, null);
        this.tail = this.head;
        this.size = 0;
    }

    prepend(value) {
        console.log(`Prepending: ` + this.size);
        if (this.size === 0) {
            this.head.changeValue(value);
            this.tail = this.head;
        }
        else {
            let newHead = new Node(value, this.head);
            this.head = newHead;
        }
        this.size = this.size + 1;
    }

    append(value) {
        console.log(`Appending: ` + this.size);
        if (this.size === 0) {
            this.head.changeValue(value);
            this.tail = this.head;
        }
        else {
            let newTail = new Node(value, null);
            let currTail = this.tail;
            currTail.changeNext(newTail);
    
            this.tail = newTail;
        }
        this.size = this.size + 1;
    }

    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    get tail() {
        return this._tail;
    }

    set tail(value) {
        this._tail = value;
    }

    at(index) {
        let currNode = this.head;
        let currIndex = 0;
        while (currIndex !== index) {
            currNode = currNode.nextNode;
            currIndex++;
        }

        return currNode;
    }

    pop() {
        let returnNode = this.tail;

        let newTail = this.at(this.size - 2);
        newTail.print();
        if (newTail.nextNode) {
            newTail.changeNext(null);
        }
        this.size = this.size - 1;

        return returnNode;
    }

    contains(value) {
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === value) {
                return true;
            }
            currNode = currNode.nextNode;
        }

        return false;
    }

    find(value) {
        let currNode = this.head;
        let currIndex = 0;
        while (currNode) {
            if (currNode.value === value) {
                return currIndex;
            }
            currNode = currNode.nextNode;
            currIndex++;
        }

        return null; 
    }

    toString() {
        let listString = '';
        let currNode = this.head;
        let currIndex = 0;
        while (currNode) {
            listString += `( `;
            listString += currNode.getValue();
            listString += ` )`;
            if (currIndex <= this.size - 2) {
                listString += ` -> `;
            }
            currIndex++;
            currNode = currNode.nextNode;
        } 

        console.log(listString);
    }

}

let defaultNode = new Node();
defaultNode.print();

let newNode = new Node(1, defaultNode);
newNode.print();

let newList = new LinkedList();
newList.toString();

newList.append(2);
newList.toString();

newList.prepend(1);
newList.toString();

console.log(newList.head);
console.log(newList.tail);

console.log(newList.at(0));

console.log(newList.at(1));

console.log(newList.contains(2));
console.log(newList.find(2));

console.log(newList.pop());

console.log(newList.contains(2));
console.log(newList.find(2));

console.log(`Odin Linked List Demo`);
import './styles.css';
import { Node } from './node';


let defaultNode = new Node();
defaultNode.print();

let newNode = new Node(1, defaultNode);
newNode.print();

console.log(`Odin Linked List Demo`);
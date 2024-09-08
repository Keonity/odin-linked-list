class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    print() {
        console.log(this.value);
        console.log(this.nextNode);
    }
}

export { Node };
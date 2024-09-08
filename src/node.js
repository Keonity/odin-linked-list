class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }

    changeValue(newValue) {
        this.value = newValue;
    }

    changeNext(newNext) {
        this.nextNode = newNext;
    }

    getNext() {
        return this.nextNode;
    }

    getValue() {
        return this.value;
    }

    print() {
        console.log(`Node Value: ` + this.value);
        console.log(this.nextNode);
    }
}

export { Node };
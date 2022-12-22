type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        //Do we have an empty array, this.length ==== 0
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            //Create a new node
            this.tail = this.head = node;
        }

        // Take tail, a new one to the list an point to it
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        //Do we have a head?
        if (!this.head) {
            return undefined;
        }

        this.length--;

        //Update head to point ot next value and then return head
        const head = this.head;
        this.head = this.head.next;

        //Free head
        head.next = undefined;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

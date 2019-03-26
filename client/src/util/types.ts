import { shuffle } from './helper'
export class Queue<T> {
    private _queue: T[]

    constructor(queue?: T[]) {
        this._queue = queue || []
    }

    enqueue(item: T) {
        this._queue.push(item)
    }

    dequeue(): T | any {
        return this._queue.shift()
    }

    clear() {
        this._queue = []
    }

    get count(): number {
        return this._queue.length
    }

    shuffle() {
        shuffle<T>(this._queue)
    }
}

export class Stack<T> {
    private _stack: T[]

    constructor(stack?: T[]) {
        this._stack = stack || []
    }

    push(item: T) {
        this._stack.push(item)
    }

    pop(): T | undefined {
        return this._stack.pop()
    }

    empty() {
        this._stack = []
    }

    get count(): number {
        return this._stack.length
    }

    shuffle() {
        shuffle<T>(this._stack)
    }
}

export interface IChoice {
    body: String,
    correct: Boolean
}

export interface IQuestion {
    body: String,
    choices: IChoice
}


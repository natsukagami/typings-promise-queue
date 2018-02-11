// Type definitions for promise-queue 2.2.3
// Definitions by: Nguyen Pham Cao <https://github.com/natsukagami>

export as namespace promiseQueue;

declare class Queue<T> {
	constructor(maxPendingPromises?: number, maxQueuedPromises?: number);

	static configure(promiseFactory: typeof Promise): void;

	add(generator: () => Promise<T>): Promise<T>;
	getQueueLength(): number;
	getPendingLength(): number;
}

export = Queue;

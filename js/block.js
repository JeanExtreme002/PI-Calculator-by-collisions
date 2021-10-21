class Block {
	constructor(weight, velocity, size = 50, position = 0) {
		this.weight = weight;
		this.velocity = velocity;
		this.position = position;
		this.size = size;
		this.collisionCount = 0;
	}

	static calculateNextVelocity(block1, block2) {
		const w1 = block1.weight;
		const v1 = block1.velocity;
		const w2 = block2.weight;
		const v2 = block2.velocity;

		return ((w1 - w2) / (w1 + w2)) * v1 + (2 * w2 * v2) / (w1 + w2);
	}

	move() {
		this.position += this.velocity;
	}
}

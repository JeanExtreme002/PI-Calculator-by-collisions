class Cube {
	constructor(weight, velocity, position, size = 50, wall = 0) {
		this.weight = weight;
		this.velocity = velocity;
		this.position = position;
		this.size = size;
		this.wall = wall;
		this.collisionCount = 0;
	}

	static calculateNextVelocity(cube1, cube2) {
		const w1 = cube1.weight;
		const v1 = cube1.velocity;
		const w2 = cube2.weight;
		const v2 = cube2.velocity;

		return ((w1 - w2) / (w1 + w2)) * v1 + (2 * w2 * v2) / (w1 + w2);
	}

	move() {
		this.position += this.velocity;

		// Se colidiu com a parede, então a direção
		// do movimento do objeto é invertida.
		if (this.position <= this.wall) {
			this.position = this.wall;
			this.velocity *= -1;
			this.collisionCount += 1;
		}
	}
}

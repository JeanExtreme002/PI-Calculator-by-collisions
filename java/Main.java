public class Main {
	public static void main(String args[]) {

		if (args.length == 0) {
			throw new ArrayIndexOutOfBoundsException("Specify the number of digits to be calculated");
		}

		int exponent = Integer.parseInt(args[0]);

		if (exponent <= 0) {
			throw new IllegalArgumentException("The number of digits must be greater than zero");
		}

		double weight = Math.pow(100, exponent - 1);
		Block block1 = new Block(1, 0, 50);
		Block block2 = new Block(weight, -1.0, 100);

		while (block1.getCollisionCount() == 0 || block1.canCollide(block2)) {
			block1.move();
			block2.move();

			// Caso tenha colidido com a parede, seu sentido será invertido.
			if (block1.getPosition() <= 0) {
				block1.increaseCollisionCount();
				block1.setPosition(0);
				block1.setVelocity(block1.getVelocity() * -1);
			}

			// Caso tenha colidido com o outro bloco, a nova velocidade de
			// ambos os blocos será calculada.
			if (block1.getPosition() >= block2.getPosition()) {
				block1.setPosition(block2.getPosition());

				double v1 = Block.calculateNextVelocity(block1, block2);
				double v2 = Block.calculateNextVelocity(block2, block1);

				block1.setVelocity(v1);
				block2.setVelocity(v2);

				block1.increaseCollisionCount();
			}
		}
		System.out.println("Digits of PI: " + block1.getCollisionCount());
	}
}

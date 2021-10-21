public class Block {
	private int collisionCount = 0;
	private double weight;
	private double position;
	private double velocity;

	public Block(double weight, double velocity, double position) {
		this.weight = weight;
		this.velocity = velocity;
		this.position = position;
	}

	/**
	Calcula a próxima velocidade do primeiro corpo
	após uma colisão elástica com o segundo corpo.
	*/
	public static double calculateNextVelocity(Block block1, Block block2) {
		double w1 = block1.getWeight();
		double v1 = block1.getVelocity();
		double w2 = block2.getWeight();
		double v2 = block2.getVelocity();

		return ((w1 - w2) / (w1 + w2)) * v1 + (2 * w2 * v2) / (w1 + w2);
	}

	public boolean canCollide(Block block) {
		double velocity = block.getVelocity();

		// Pode colidir caso a velocidade do objeto seja negativa ou o outro objeto
		// esteja vindo em sentido contrário ou a velocidade do objeto seja maior
		// que a velocidade do outro objeto, tendo assim a chance de alcançá-lo.
		return ((this.velocity < 0 || velocity < 0) || this.velocity > velocity);
	}

	public int getCollisionCount() {
		return this.collisionCount;
	}

	public double getPosition() {
		return this.position;
	}

	public double getVelocity() {
		return this.velocity;
	}

	public double getWeight() {
		return this.weight;
	}

	public void increaseCollisionCount() {
		this.collisionCount++;
	}

	public void setPosition(double position) {
		this.position = position;
	}

	public void setVelocity(double velocity) {
		this.velocity = velocity;
	}

	public void move() {
		this.position += this.velocity;
	}
}

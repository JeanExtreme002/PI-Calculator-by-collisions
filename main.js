function drawObjects(context, cube1, cube2) {
	context.font = "20px Arial";

	context.fillStyle = "#f00";
	context.fillText(cube2.velocity.toFixed(2), cube2.position, 350);
	context.fillRect(cube2.position, context.canvas.height - cube2.size, cube2.size, cube2.size);

	context.fillStyle = "#00f";
	context.fillText(cube1.velocity.toFixed(2), cube1.position, 400);
	context.fillRect(cube1.position, context.canvas.height - cube1.size, cube1.size, cube1.size);
}

function drawCollisionCount(context, count) {
	context.fillStyle = "#fff";
	context.font = "30px Arial";
	context.fillText(count, 50, 50);
}

function startAnimation(context, cube1, cube2) {
	updateScreen(context, cube1, cube2)
	requestAnimationFrame(() => {startAnimation(context, cube1, cube2)});
}

function updateScreen(context, cube1, cube2) {
	cube1.move();
	cube2.move();

	if (cube1.position + cube1.size >= cube2.position) {
		cube1.position = cube2.position - cube1.size;

		const v1 = Cube.calculateNextVelocity(cube1, cube2);
		const v2 = Cube.calculateNextVelocity(cube2, cube1);

		cube1.velocity = v1;
		cube2.velocity = v2;
		cube1.collisionCount += 1;
	}

	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	drawCollisionCount(context, cube1.collisionCount);
	drawObjects(context, cube1, cube2);
}

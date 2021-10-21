function drawObjects(context, block1, block2) {
    context.fillStyle = "#f00";
    context.fillRect(block2.position, context.canvas.height - block2.size, block2.size, block2.size);

    context.fillStyle = "#00f";
    context.fillRect(block1.position, context.canvas.height - block1.size, block1.size, block1.size);
}

function drawData(context, block1, block2) {
    context.fillStyle = "#fff";
    context.font = "20px Arial";

    const pi = "Digits of PI: " + block1.collisionCount;
    const v1 = "V1: " + block1.velocity.toFixed(2);
    const v2 = "V2: " + block2.velocity.toFixed(2);

    context.fillText(`${pi}      |      ${v1}      ${v2}`, 50, 50);
}

function startAnimation(context, block1, block2, timeSteps) {
    for (let i = 0; i < timeSteps; i++) {
        move(block1, block2);
        updateScreen(context, block1, block2);
    }
    requestAnimationFrame(() => {startAnimation(context, block1, block2, timeSteps)});
}

function move(block1, block2) {
    block1.move();
    block2.move();

    // Se o bloco colidiu com a parede, seu sentido é invertido.
    if (block1.position <= 0) {
        block1.position = 0;
        block1.velocity *= -1;
        block1.collisionCount += 1;
    }

    // Se o bloco colidir com o outro bloco, suas novas velocidades serão calculadas.
    if (block1.position + block1.size >= block2.position) {
        block1.position = block2.position - block1.size;

        const v1 = Block.calculateNextVelocity(block1, block2);
        const v2 = Block.calculateNextVelocity(block2, block1);

        block1.velocity = v1;
        block2.velocity = v2;
        block1.collisionCount += 1;
    }
}

function updateScreen(context, block1, block2) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawData(context, block1, block2);
    drawObjects(context, block1, block2);
}

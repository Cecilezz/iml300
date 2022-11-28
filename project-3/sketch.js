let cols = 200;
let rows = 200;
let vertices = [];

function setup() {
    var myCanvas = createCanvas(600, 600, WEBGL);
    myCanvas.parent("p5jsplanet");
    
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100);
    imageMode(CENTER);

    noStroke();

    for (theta = 0; theta < rows; theta++) {
        vertices.push([]);
        for (phi = 0; phi < cols; phi++) {
            let noiseX = map(
                sin((theta * 180) / rows) * cos((phi * 360) / cols),
                -1,
                1,
                0,
                5
            );
            let noiseY = map(cos((theta * 180) / rows), -1, 1, 0, 5);
            let noiseZ = map(
                sin((theta * 180) / rows) * sin((phi * 360) / cols),
                -1,
                1,
                0,
                5
            );

            //let hue = map(noise(noiseX, noiseY, noiseZ), 0, 1, 150, 340);
            let saturation = map(noise(noiseX, noiseY, noiseZ), 0, 1, 15, 60);
            let pos = createVector(
                200 * sin((theta * 180) / rows) * cos((phi * 360) / cols),
                200 * cos((theta * 180) / rows),
                200 * sin((theta * 180) / rows) * sin((phi * 360) / cols)
            );

            vertices[theta].push([pos, saturation]);
        }
    }
}

function draw() {
    clear();
    orbitControl(4, 4);
    rotateX(frameCount * 0.03 % 360);
    rotateY(200 + frameCount * 0.5 % 360);

    light();
    planet();
}

function planet() {
    for (theta = 0; theta < vertices.length; theta++) {
        for (phi = 0; phi < vertices[theta].length; phi++) {

            //fill(vertices[theta][phi][1], 100, 100);
            fill(210, vertices[theta][phi][1], 100);

            if (theta < vertices.length - 1 && phi < vertices[theta].length - 1) {
                beginShape();
                vertex(
                    vertices[theta][phi][0].x,
                    vertices[theta][phi][0].y,
                    vertices[theta][phi][0].z
                );
                vertex(
                    vertices[theta + 1][phi][0].x,
                    vertices[theta + 1][phi][0].y,
                    vertices[theta + 1][phi][0].z
                );
                vertex(
                    vertices[theta + 1][phi + 1][0].x,
                    vertices[theta + 1][phi + 1][0].y,
                    vertices[theta + 1][phi + 1][0].z
                );
                vertex(
                    vertices[theta][phi + 1][0].x,
                    vertices[theta][phi + 1][0].y,
                    vertices[theta][phi + 1][0].z
                );
                endShape(CLOSE);
            } else if (theta < vertices.length - 1 && phi == vertices[theta].length - 1) {
                beginShape();
                vertex(
                    vertices[theta][phi][0].x,
                    vertices[theta][phi][0].y,
                    vertices[theta][phi][0].z
                );
                vertex(
                    vertices[theta][0][0].x,
                    vertices[theta][0][0].y,
                    vertices[theta][0][0].z
                );
                vertex(
                    vertices[theta + 1][0][0].x,
                    vertices[theta + 1][0][0].y,
                    vertices[theta + 1][0][0].z
                );
                vertex(
                    vertices[theta + 1][phi][0].x,
                    vertices[theta + 1][phi][0].y,
                    vertices[theta + 1][phi][0].z
                );
                endShape(CLOSE);
            } else if (theta == vertices.length - 1) {
                beginShape();
                for (let i = 0; i < phi; i++) {
                    vertex(
                        vertices[theta][i][0].x,
                        vertices[theta][i][0].y,
                        vertices[theta][i][0].z
                    );
                }
                endShape(CLOSE);
            }
        }
    }
}

function light() {
    pointLight(
        0, 0, 100,
        0, 0, 0
    );
}

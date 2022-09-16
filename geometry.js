class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract class can't be instantiated");
        }
    }

    luas() {
        throw new Error("Method 'luas()' must be implemented");
    }

    keliling() {
        throw new Error("Method 'keliling()' must be implemented");
    }

    draw() {
        throw new Error("Method 'draw()' must be implemented");
    }
}
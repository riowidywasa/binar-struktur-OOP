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

class Persegi extends Shape {
  constructor(sisi, nama, warna) {
    super();
    this.sisi = sisi;
    this.nama = nama;
    this.warna = warna;
  }

  luas() {
    return this.sisi ** 2;
  }

  keliling() {
    return this.sisi * 4;
  }

  draw() {
    const bangun = document.getElementById("shape");
    const newSquare = document.createElement('div');
    newSquare.id = 'square';
    bangun.appendChild(newSquare);
    const text = document.createElement('h1');
    text.innerHTML = this.nama;
    bangun.append(text);
    const square = document.getElementById('square');
    square.style.width = this.sisi + 'px';
    square.style.height = this.sisi + 'px';
    square.style.background = this.warna;
  }
}
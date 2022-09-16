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

class PersegiPanjang extends Shape {
  constructor(panjang, lebar, nama, warna) {
    super();
    this.panjang = panjang;
    this.lebar = lebar;
    this.nama = nama;
    this.warna = warna;
  }

  luas() {
    return this.panjang * this.lebar;
  }

  keliling() {
    return (this.panjang * 2) + (this.lebar * 2);
  }

  draw() {
    const bangun = document.getElementById("shape");
    const newRectangle = document.createElement('div');
    newRectangle.id = 'rectangle';
    bangun.appendChild(newRectangle);
    const text = document.createElement('h1');
    text.innerHTML = this.nama;
    bangun.append(text);
    const square = document.getElementById('rectangle');
    rectangle.style.width = this.panjang + 'px';
    rectangle.style.height = this.lebar + 'px';
    rectangle.style.background = this.warna;
  }
}

class SegitigaSamaSisi extends Shape {
  constructor(alas, tinggi, samping, nama, warna) {
    super();
    this.alas = alas;
    this.tinggi = tinggi;
    this.samping = samping;
    this.nama = nama;
    this.warna = warna;
  }

  luas() {
    return (this.alas * this.tinggi) / 2;
  }

  keliling() {
    return this.alas * 3;
  }
  
  draw() {
    const bangun = document.getElementById("shape");
    const newSegitigaSisi = document.createElement('div');
    newSegitigaSisi.id = 'segitigaSisi';
    bangun.appendChild(newSegitigaSisi);
    const text = document.createElement('h1');
    text.innerHTML = this.nama;
    bangun.append(text);
    const segitigaSisi = document.getElementById('segitigaSisi');
    segitigaSisi.style.width = '0';
    segitigaSisi.style.height = '0';
    segitigaSisi.style.borderBottom = `${this.alas}px solid ${this.warna}`;
    segitigaSisi.style.borderRight = `${this.tinggi}px solid transparent`;
    segitigaSisi.style.borderLeft = `${this.samping}px solid transparent`;
  }
}
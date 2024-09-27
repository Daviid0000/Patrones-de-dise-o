interface ICoche {
    marca: string;
    color: string;
    precio: number;
    conducir(): string;
}

class Toyota implements ICoche {
    marca: string;
    color: string;
    precio: number
    
    constructor(marca: string, color: string, precio: number) {
        this.marca = marca
        this.color = color
        this.precio = precio
    }
    conducir(): string {
        return `El coche ${this.marca} está avanzando...`
    };
}

class CeroKm implements ICoche {
    marca: string;
    color: string;
    precio: number
    
    constructor(marca: string, color: string, precio: number) {
        this.marca = marca
        this.color = color
        this.precio = precio
    }
    conducir(): string {
        return `El coche ${this.marca} está avanzando...`
    };
}

abstract class fabricaCoche {
    abstract crearCoche(marca: string, color: string, precio: number, conducir: string): ICoche 
}

class FabricaToyota extends fabricaCoche {
    crearCoche(marca: string, color: string, precio: number): ICoche {
        return new Toyota(marca, color, precio)
    }
}

class FabricaCeroKm extends fabricaCoche {
    crearCoche(marca: string, color: string, precio: number): ICoche {
        return new CeroKm(marca, color, precio)
    }
}

const main = () => {
    const creadorCoche1 = new FabricaToyota();
    const coche1 = creadorCoche1.crearCoche("Toyota", "Verde", 1999)
    console.log(coche1.conducir())

    const creadorCoche2 = new FabricaCeroKm();
    const coche2 = creadorCoche2.crearCoche("CeroKm", "Azul", 2000)
    console.log(coche2.conducir())
}

main()
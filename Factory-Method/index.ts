interface IEquipo {
    Tipo: string;
    Nombre: string;
    RAM: string;
    Procesador: string;
    detalles(): string;
}

class ModeloEquipo implements IEquipo {
    Tipo: string
    Nombre: string
    RAM: string 
    Procesador: string

    constructor(Tipo: string, Nombre: string, RAM: string, Procesador: string) {
        this.Tipo = Tipo;
        this.Nombre = Nombre;
        this.RAM = RAM;
        this.Procesador = Procesador;
    }

    detalles(): string {
        return `Tipo: ${this.Tipo}, Nombre: ${this.Nombre}, RAM: ${this.RAM}, Procesador: ${this.Procesador}`
    }
}

class EquipoFactory {
    crearEquipo(Tipo: string, Nombre: string, RAM: string, Procesador: string): IEquipo {
        if (Tipo === "Notebook") {
            return new FabricaNotebook(Nombre, RAM, Procesador);
        } else if (Tipo === "Desktop") {
            return new FabricaDesktop(Nombre, RAM, Procesador);
        } else if(Tipo === "Servidor") {
            return new FabricaServidor(Nombre, RAM, Procesador);
        } else {
            throw new Error("Tipo de equipo no válido");
        }
    }
}

class FabricaNotebook extends ModeloEquipo {
    constructor(Nombre: string, RAM: string, Procesador: string) {
        super("Notebook", Nombre, RAM, Procesador);
    }
}

class FabricaDesktop extends ModeloEquipo {
    constructor(Nombre: string, RAM: string, Procesador: string) {
        super("Desktop", Nombre, RAM, Procesador);
    }
}

class FabricaServidor extends ModeloEquipo {
    constructor(Nombre: string, RAM: string, Procesador: string) {
        super("Servidor", Nombre, RAM, Procesador)
    }
}

const fabrica = new EquipoFactory();
const equipo1 = fabrica.crearEquipo("Notebook", "Laptop", "4GB", "i3");
const equipo2 = fabrica.crearEquipo("Desktop", "PC", "16GB", "i7");
console.log(equipo1.detalles());
console.log(equipo2.detalles());
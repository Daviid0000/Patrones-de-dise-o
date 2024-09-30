interface Observador {
    actualizar(equipo: string): void;
}

class Soporte {
    constructor(private equipo: string) { }

    actualizar(estado: string): void {
        console.log(`Soporte notificado. Equipo ${this.equipo} a sido puesto en ${estado}`);
    }
}

class Equipo {
    public estado: string = ''

    private observadores: Observador[] = []
    
    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarEquipo(nuevoTipo: string): void {
        this.estado = nuevoTipo;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.estado));
    }
}

const equipo1 = new Soporte("Notebook");
const adminEquipos = new Equipo();
adminEquipos.agregarObservador(equipo1);
adminEquipos.cambiarEquipo("Reparación")
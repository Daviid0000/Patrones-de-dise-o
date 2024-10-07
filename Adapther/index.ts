interface Inventario {
    nombre: string,
    tipo: string,
    estado: string,
};

class InventarioViejo {

    public agregarItem(nombre: string, tipo: string, RAM: string, estado: string): string {
        return `${nombre}, ${tipo}, ${RAM}, ${estado}`
    }
}

class AdaptadorInventario {
    public nuevoEquipo: InventarioViejo;
    private inventario: Inventario[] = [];

    constructor(nuevoEquipo: InventarioViejo) {
        this.nuevoEquipo = nuevoEquipo;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        const nuevoItem: Inventario = {
            nombre,
            tipo,
            estado
        }

        this.inventario.push(nuevoItem)
    }

    public listarEquipos(): Inventario[] {
        return this.inventario;
     }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Asus", "Notebook", "disponible")
console.log(adaptador.listarEquipos());
interface objProducto { 
    equipo: string, 
    marca: string, 
    estado: string 
}

class gestionInventario {
    private static instancia: gestionInventario;
    
    private inventario: objProducto[] = [];

    private constructor() { }

    public static obtenerInstancia(): gestionInventario {
        if(!gestionInventario.instancia) {
            gestionInventario.instancia = new gestionInventario();
        }
        return gestionInventario.instancia;
    }

    public agregarEquipo(equipo: string, marca: string, estado: string): void {
        this.inventario.push({ equipo, marca, estado }) ;
    }

    public obtenerEstadoEquipo(): objProducto[] {
        return this.inventario;
    }
}
const nuevoEquipo = gestionInventario.obtenerInstancia();
nuevoEquipo.agregarEquipo("Notebook", "Asus", "Disponible");
console.log(nuevoEquipo.obtenerEstadoEquipo())
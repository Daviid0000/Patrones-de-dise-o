# APLICANDO PATRÓN SINGLETON

**Creación de interfaz de producto**

```Se crea una interfaz con sus propiedades definidas en tipo string```

```javascript
    interface objProducto { 
        equipo: string, 
        marca: string, 
        estado: string 
    };
```
**Uso de la interfaz de producto**

```La interfaz se utiliza de la siguiente manera para declarar que inventario sea un array de objetos y se inicialice como vacío```

```javascript
    private inventario: objProducto[] = [];
```

**Bloquear constructor para su uso fuera de la clase**
```javascript
    private constructor() { }
```

**Creando una única instancia de la clase**

```Es necesario crear una propiedad que almacene una única instancia de la clase para no tener que hacer una nueva instancia en el futuro```

```javascript
    private static instancia: gestionInventario;
```

**Función que retorna la instancia de la clase**

```Se crea un método capaz de ser usado desde fuera de la clase. El método evalúa si existe una instancia de la clase, si existe la devuelve, sino, la crea y la devuelve```

```obtenerInstancia(): gestionInventario significa que el método devuelve una instancia de la clase, en este caso solo existe una instancia```

```javascript
    public static obtenerInstancia(): gestionInventario {
        if(!gestionInventario.instancia) {
            gestionInventario.instancia = new gestionInventario();
        }
        return gestionInventario.instancia;
    }
```

**Método para crear equipos**

```El siguiente método se encarga de crear un equipo y recibe por parámetro tres valores que son strings los cuales son puestos dentro del arreglo inventario creado al inicio```

```Este método es público, por lo tanto puede ser usado desde fuera de la clase```

```javascript
public agregarEquipo(equipo: string, marca: string, estado: string): void {
        this.inventario.push({ equipo, marca, estado }) ;
    }
```

**Método para mostrar equipos**

```El siguiente método se encarga de mostrar un equipo. Este método utiliza la interfaz objProducto la cual indica que el método devuelve un array de objetos```

```Este método es público, por lo tanto puede ser usado desde fuera de la clase```

```javascript
public obtenerEstadoEquipo(): objProducto[] {
        return this.inventario;
    }
```

**Creación de nuevo objeto**

```Se extrae de la clase gestionInventario la instancia a esta misma clase para crear un nuevo objeto```

```javascript
const nuevoEquipo = gestionInventario.obtenerInstancia();
```

**Creación de nuevo equipo**

```Desde el nuevo objeto se hace uso del método agregarEquipo y se le pasan tres valores por parámetro```

```javascript
nuevoEquipo.agregarEquipo("Notebook", "Asus", "Disponible");
```

**Mostrar valores del arreglo inventario**

```Desde el nuevo objeto se hace uso del método obtenerEstadoEquipo el cual se encarga de devolver todos los valores que tiene el arreglo inventario```

```A través de un console.lo() se muestra el resultado por consola```

```javascript
console.log(nuevoEquipo.obtenerEstadoEquipo())
```

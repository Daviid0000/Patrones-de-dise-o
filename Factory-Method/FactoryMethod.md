# APLICANDO EL PATRÓN FACTORY METHOD

**Creación de interfaz de equipos**

```La siguiente interfaz representa las propiededes y métodos que poseerá cada equipo```

```javascript

    interface IEquipo {
        Tipo: string;
        Nombre: string;
        RAM: string;
        Procesador: string;
        detalles(): string;
    }
```

**Clase ModeloEquipo**

```A continuación creo la clase ModeloEquipo la cual implementa la estructura de un equipo con la interfaz IEquipo```

```Esta clase es la encargada de crear un equipo a partir de su constructor el cual recibe por parámetros las propiedades del equipo.```
```Además de eso también posee un método para visualizar los detalles de dicho equipo```

```javascript
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
```

**Clase EquipoFactory**

```La clase EquipoFactory únicamente posee un método el cual es crearEquipo, este utiliza la estructura de la interfaz IEquipo para lograrlo, recibe por parámetro las propiedades Tipo, Nombre, RAM y Procesador. Evalúa la propiedad Tipo para determinar si es de un equipo en específico y así utilizar la clase de dicho tipo de equipo para poder crearlo retornando una instancia de la clase y pasandole por parámetros los tres últimos valores, Nombre, RAM y Procesador```

```javascript
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
```

**Clase FabricaNotebook**

```La clase FabricaNotebook es un ejemplo de una posible clase encargada de crear un tipo de equipo a partir de la extención de la clase ModeloEquipo la cual contiene el constuctor necesario para hacerlo. Se utiliza la función super() para obtener el constructor de la clase ModeloEquipo, y desde esta función se pasan las tres últimas propiedades del equipo que se desea crear, es decir que desde la clase FabricaNotebook se estaría creando un equipo de tipo Notebook, por eso mismo se pasa el valor "Notebook" ya que se espera que así sea, al momento de que el usuario ingrese los datos```

```javascript
    class FabricaNotebook extends ModeloEquipo {
        constructor(Nombre: string, RAM: string, Procesador: string) {
            super("Notebook", Nombre, RAM, Procesador);
        }
    }
```

**Tests**

```A continuación se crea una instancia de la clase EquipoFactory la cual posee el método para crear equipos dependiendo del tipo que sean```


```javascript
    const fabrica = new EquipoFactory();

```

```Desde la instancia de esta clase se obtendrá acceso al método para crear equipos```

```javascript
    const equipo1 = fabrica.crearEquipo("Notebook", "Laptop", "4GB", "i3");
```

```Y por último también se tiene acceso al método para ver los detalles de un equipo ya creado```
```javascript
    console.log(equipo1.detalles());
```
type ElementoEnListaSimple = {
    title: string;
    icon: string;
}
type ElementoIndividual = {
    titulo: string;
    prioridad: number;
    fecha: Date;
    esDate: boolean;
    cantidad: number;
    simboloCantidad: string;
}

export let arregloDeListasSimple: ElementoEnListaSimple[] = [];

export let arregloDeListasDatos: ElementoIndividual[][]= []

export let dataListActual: ElementoIndividual[] = []

export let indexActual: number = 0;

// Métodos de la lista simple
export const aniadirNuevaListaSimple = (data: ElementoEnListaSimple) => {
    arregloDeListasSimple.push(data);
    aniadirNuevaListaDatos();
    // updateState
    renderLeft();    
}

export const handleEditTitleOnListaSimple = (index: number, newTitle: string) => {
    arregloDeListasSimple[index].title = newTitle;
    // updateState
    renderLeft();
}

export const handleDeleteListaSimple = (index: number) => {
    arregloDeListasSimple.splice(index,1);
    //update left
    renderLeft();
    handleDeleteListaDatos(index);
    seleccionarUnaListaDeDatos(index - 1);
}

// Métodos de la lista de datos
const aniadirNuevaListaDatos = () => {
    arregloDeListasDatos.push([]);
    seleccionarUnaListaDeDatos(arregloDeListasDatos.length - 1)
}

export const seleccionarUnaListaDeDatos = (index: number) => {
    indexActual = index;
    
    dataListActual = arregloDeListasDatos[index],
    
    // updateState
    renderRight();    
}

export const handleDeleteListaDatos = (index: number) => {
    arregloDeListasDatos.splice(index,1);
}

export const aniadeElementoNuevo = () => {
    const objConstructor = {
        titulo: '',
        prioridad: 0,
        fecha: new Date(),
        esDate: false,
        cantidad: 0,
        simboloCantidad: '$',
    }
    dataListActual.push(objConstructor);
    renderRight();
}

// Método que ejecuta el renderizado
const renderLeft = () => {
    const event = new CustomEvent("renderLeft", {});
    document.dispatchEvent(event)
}
const renderRight = () => {
    const event = new CustomEvent("renderRight", {});
    document.dispatchEvent(event)
}

// Creación de la primer lista en caso que no exista
if (arregloDeListasSimple.length === 0) {
    const obj = {
        title: '',
        icon:'',
    }
    aniadirNuevaListaSimple(obj);
    
}
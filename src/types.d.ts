export interface Product {
    id: string,
    nombre: string,
    descripcion: string,
    precio: number,
    imagen: string
}

export interface ProductWithCount extends Product {
    count: 1
}

interface NavDesplegableProps {
    isOpen: boolean;
}
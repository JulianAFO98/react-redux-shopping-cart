export interface Product {
    id: string,
    nombre: string,
    descripcion: string,
    precio: number,
    imagen: string
}

export interface ProductWithCount extends Product {
    count: number
}

interface NavDesplegableProps {
    isOpen: boolean;
}
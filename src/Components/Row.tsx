import React from 'react'

interface Product {
    id: number;
    name: string;
    year: number;
    color: string;
  }


interface Props {
  product: Product;
  onRowClick: (product: Product) => void;
}

const Row: React.FC<Props> = ({product, onRowClick}) => {
    return (
    <div className="tableLabel" onClick={() => onRowClick(product)} style={{ backgroundColor: product.color }}>
        <h3 className="id">{product.id}</h3>
        <h3 className="id">{product.name}</h3>
        <h3 className="name">{product.year}</h3>
    </div>
  )
}

export default Row
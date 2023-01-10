import React from 'react'

interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
}

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({product, isOpen, onClose }) => {

    if (!product) {
        return null;
      }
      
  return (
    <>
   {isOpen ? (
    <div className='modalContainer' >
        <div className='modal' style={{ backgroundColor: product.color }}>
            <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="close bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>       
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Year: {product.year}</p>
            <p>Color: {product.color}</p>
        </div>
    </div>
    ) : null}
  </>
  )
}

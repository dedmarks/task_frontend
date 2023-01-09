import React, { useState } from 'react';
import  {useNavigate}  from 'react-router-dom';
import { Modal } from '../Components/Modal';
import Paginate from '../Components/Paginate';
import Row from '../Components/Row';

interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
}

interface Props {
    filterProducts: Product[];
    filter: string;
    products: Product[];
}

const ProductTable: React.FC<Props> = ({ filterProducts, filter,  products}) => {

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [pageNumber, setPageNumber] = useState(0);
    const navigate = useNavigate()

    const itemsPerPage = 5
    const pagesVisited = pageNumber * itemsPerPage

    const displayItems = products.slice(pagesVisited, pagesVisited + itemsPerPage)

    const handleRowClick = (product: Product) => {
        setSelectedProduct(product);
      };
    
      const handleModalClose = () => {
        setSelectedProduct(null);
      };

      console.log(filter)

      const pageCount = Math.ceil(products.length/itemsPerPage)

      const changePage = (page: { selected: number }) => {
        setPageNumber(page.selected);
        navigate(`?page=${page.selected}&filter=${filter}`);
      }

  return (
    <div className='table'>
        {filterProducts.length === 0 ?  displayItems.map(item => (
          <Row product={item} onRowClick={handleRowClick}/>
        )) :  filterProducts.map(item => (
            <Row product={item} onRowClick={handleRowClick}/>
          ))}
          <Paginate 
           pageCount={pageCount} 
           changePage={changePage}
           />
           <Modal product={selectedProduct} isOpen={selectedProduct !== null} onClose={handleModalClose}/>
    </div>
  );
};

export default ProductTable;

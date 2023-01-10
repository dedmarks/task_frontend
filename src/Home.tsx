import axios, { isAxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from './Components/Error';
import Table from './Components/Table';


interface Product {
    id: number;
    name: string;
    year: number;
    color: string;
  }

  type MyExpectedResponseType = {
    thisIsANumber: number;
  };
  
  const Home: React.FC = () => {
  
    const [products, setProducts] = useState<Product[]>([]);
    const [filter, setFilter] = useState('');
    const [err, setErr] = useState<string | null>(null);
    const navigate = useNavigate()
  
    useEffect(() => {
      const fetch = async () => {
        try {
          const response = await axios.get('https://reqres.in/api/products');
          setProducts(response.data.data);
          console.log(response)
        } catch(error : unknown) {
            if (isAxiosError<MyExpectedResponseType>(error)) {
                console.log(error.message);  
                setErr(error.message);
          }
        }
      };
      fetch();
    }, []);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
        navigate(`?filter=${event.target.value}`);
      };
  
    const filteredProducts = products.filter(product => product.id === parseInt(filter));

  return (
    <>
    <div className='App'/>
          <input
            type='number'
            className='filter'
            value={filter}
            onChange={handleFilterChange}
            />
        {err && <Error msg={err} />}
        <div className='tableContainer'>
          <div className="tableLabel">
                <h3 className="id">Id</h3>
                <h3 className="id">Name</h3>
                <h3 className="name">Year</h3>
            </div>
            <Table products={products} filter={filter} filterProducts={filteredProducts}/>
    </div>
    </>
  );
};

export default Home;

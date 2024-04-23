import { useState } from 'react';
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from './data/db';
function App() {

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExistsIndex = cart.findIndex(guitar => guitar.id === item.id);
    if (itemExistsIndex >= 0) { // item already exists
      const updatedCart = [...cart]
      updatedCart[itemExistsIndex] = {...updatedCart[itemExistsIndex], quantity: updatedCart[itemExistsIndex].quantity + 1};
      setCart(updatedCart)
    } else {
      const newItem = {...item, quantity: 1}; // Create a new object with quantity property
    setCart([...cart, newItem]);
    }
  }

  return (
    <>
      <Header 
        cart={cart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}


        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
import { useState } from 'react';
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from './data/db';
function App() {

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id);
    if (itemExists >= 0) {
      console.log('Ya existe')
      //setCart(prevCart => [...prevCart, item])
    }

		setCart(prevCart => [...prevCart, item])
	}

  return (
    <>
      <Header />

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
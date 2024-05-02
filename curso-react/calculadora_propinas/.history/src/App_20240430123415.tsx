

import './App.css'
import MenuItem from './components/MenuItem'

function App() {

  return (
    <>
      <header className=' bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Calculadora de Propinas y Consumo</h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div>
          <h2 className='text-center text-4xl'>Menú</h2>

          {menuItems.map(item => (
            <MenuItem key={item.id}

            />
          ))}
        </div>
        <div>
          <h2 className='text-center text-4xl'>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App

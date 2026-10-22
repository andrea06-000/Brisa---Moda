import { useEffect, useState } from 'react'
import Encabezado from './components/Encabezado.jsx'
import Portada from './components/Portada.jsx'
import ListaProductos from './components/ListaProductos.jsx'
import PiePagina from './components/PiePagina.jsx'

function App() {
  // Productos que llegan del archivo public/productos.json
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [errorCatalogo, setErrorCatalogo] = useState('')

  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch('/productos.json')
        if (!respuesta.ok) {
          throw new Error(`La solicitud falló (${respuesta.status})`)
        }

        const datos = await respuesta.json()
        if (!Array.isArray(datos)) {
          throw new TypeError('El catálogo debe ser una lista de productos')
        }

        setProductos(datos)
      } catch (error) {
        console.error('No se pudo cargar el catálogo de productos:', error)
        setErrorCatalogo('No se pudo cargar el catálogo. Intenta recargar la página.')
      } finally {
        setCargando(false)
      }
    }

    cargarProductos()
  }, [])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <Encabezado />
      <Portada />
      <main id="catalogo" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
        <h2 className="font-titulo text-3xl font-bold text-mar-900">Catálogo</h2>
        <ListaProductos
          productos={productos}
          cargando={cargando}
          error={errorCatalogo}
        />
      </main>
      <PiePagina />
    </div>
  )
}

export default App

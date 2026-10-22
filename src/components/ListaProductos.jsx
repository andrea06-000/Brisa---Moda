import TarjetaProducto from './TarjetaProducto.jsx'

function ListaProductos({ productos, cargando, error }) {
  if (cargando) {
    return <p className="py-16 text-center text-stone-500">Cargando productos…</p>
  }

  if (error) {
    return <p className="py-16 text-center text-red-700">{error}</p>
  }

  if (productos.length === 0) {
    return <p className="py-16 text-center text-stone-500">Pronto tendremos productos disponibles.</p>
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {productos.map((p) => (
        <TarjetaProducto key={p.id} producto={p} />
      ))}
    </div>
  )
}

export default ListaProductos

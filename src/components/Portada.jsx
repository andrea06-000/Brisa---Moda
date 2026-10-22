function Portada() {
  return (
    <section className="relative isolate min-h-[420px] overflow-hidden bg-neutral-900">
      <img
        src="/img/estilos.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/60 md:bg-linear-to-r md:from-black/80 md:via-black/55 md:to-black/20"
      />
      <div className="mx-auto flex min-h-[420px] max-w-6xl items-center px-4 py-16">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-white/80 uppercase">
            Colección Caribe 2026
          </p>
          <h1 className="font-titulo text-4xl leading-tight font-bold text-white md:text-6xl">
            Tu estilo, tu esencia.
          </h1>
          <p className="mt-4 max-w-md text-white/85">
          Descubre nuestra nueva colección de ropa fresca y cómoda, diseñada para disfrutar con estilo y comodidad.
          </p>
          <a
            href="#catalogo"
            className="mt-6 inline-block rounded-full bg-marca-500 px-6 py-3 font-semibold
              text-white shadow transition hover:bg-marca-600"
          >
            Ver catálogo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portada

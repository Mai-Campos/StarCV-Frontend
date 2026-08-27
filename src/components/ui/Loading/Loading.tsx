import "./loading.css";

function Loading() {
  return (
    /*
     * ============================================================
     * CONTENEDOR PRINCIPAL
     * ============================================================
     *
     * flex:
     *     utilizamos Flexbox para centrar nuestra constelación.
     *
     * min-h-screen:
     *     ocupa como mínimo toda la altura de la pantalla.
     *
     * items-center:
     *     centra verticalmente.
     *
     * justify-center:
     *     centra horizontalmente.
     */
    <div className="flex min-h-screen items-center justify-center">
      {/*
       * ==========================================================
       * UNIVERSO DE LA CONSTELACIÓN
       * ==========================================================
       *
       * relative:
       *     Este elemento se convierte en nuestro sistema
       *     de coordenadas.
       *
       *     Los elementos con position: absolute que estén
       *     dentro de él podrán posicionarse respecto a él.
       *
       * h-32 / w-32:
       *     128px × 128px.
       */}
      <div className="relative h-32 w-32">
        {/*
         * ========================================================
         * CONEXIONES
         * ========================================================
         *
         * Utilizamos SVG porque SVG está diseñado para dibujar
         * elementos geométricos como líneas.
         *
         * absolute:
         *     colocamos el SVG sobre todo nuestro universo.
         *
         * inset-0:
         *     top: 0
         *     right: 0
         *     bottom: 0
         *     left: 0
         *
         * viewBox="0 0 128 128":
         *     establecemos un sistema de coordenadas de 128×128.
         *
         * Esto hace que sea mucho más fácil pensar dónde están
         * nuestros puntos.
         */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 128 128"
          fill="none"
        >
          {/*
           * ------------------------------------------------------
           * CONEXIÓN SUPERIOR
           * ------------------------------------------------------
           *
           * El centro de nuestra constelación está aproximadamente
           * en (64, 64).
           *
           * La línea comienza cerca del centro y termina cerca
           * del nodo superior.
           */}
          <line
            className="star-cv-connection star-cv-connection-delay-1"
            x1="64"
            y1="56"
            x2="64"
            y2="20"
            stroke="var(--color-border)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/*
           * ------------------------------------------------------
           * CONEXIÓN DERECHA
           * ------------------------------------------------------
           *
           * Desde el centro hacia el nodo derecho.
           */}
          <line
            className="star-cv-connection star-cv-connection-delay-2"
            x1="72"
            y1="64"
            x2="108"
            y2="64"
            stroke="var(--color-border)"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/*
           * ------------------------------------------------------
           * CONEXIÓN DIAGONAL
           * ------------------------------------------------------
           *
           * Desde el centro hacia el nodo inferior derecho.
           *
           * Como estamos usando SVG podemos especificar
           * directamente el punto inicial y final.
           */}
          <line
            className="star-cv-connection star-cv-connection-delay-3"
            x1="64"
            y1="71"
            x2="108"
            y2="108"
            stroke="var(--color-border)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        {/*
         * ========================================================
         * ESTRELLA CENTRAL
         * ========================================================
         *
         * Este contenedor se encarga EXCLUSIVAMENTE de posicionar
         * la estrella.
         *
         * left-1/2:
         *     coloca el borde izquierdo en el 50%.
         *
         * top-1/2:
         *     coloca el borde superior en el 50%.
         *
         * -translate-x-1/2:
         *     mueve la estrella hacia atrás la mitad de su ancho.
         *
         * -translate-y-1/2:
         *     mueve la estrella hacia atrás la mitad de su altura.
         *
         * Resultado:
         *     el CENTRO de la estrella queda exactamente
         *     en el centro del contenedor.
         */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/*
           * Este elemento solamente se preocupa por la apariencia
           * y la animación de la estrella.
           */}
          <div className="star-cv-core" />
        </div>

        {/*
         * ========================================================
         * NODO SUPERIOR
         * ========================================================
         *
         * El div exterior posiciona el nodo.
         *
         * El div interior contiene la animación.
         *
         * Separamos ambas responsabilidades para evitar que
         * transformaciones de posicionamiento interfieran con
         * las transformaciones de la animación.
         */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2">
          <div className="star-cv-node h-2 w-2 rounded-full bg-(--color-secondary)" />
        </div>

        {/*
         * ========================================================
         * NODO DERECHO
         * ========================================================
         */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="star-cv-node star-cv-node-delay-1 h-2 w-2 rounded-full bg-(--color-secondary)" />
        </div>

        {/*
         * ========================================================
         * NODO INFERIOR DERECHO
         * ========================================================
         */}
        <div className="absolute bottom-4 right-4">
          <div className="star-cv-node star-cv-node-delay-2 h-2 w-2 rounded-full bg-(--color-secondary)" />
        </div>
      </div>
    </div>
  );
}

export default Loading;

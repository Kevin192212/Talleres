const { useState, useEffect } = React;

// 1. Componente de Contador Incremental
function ContadorIncremental() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const incrementValue = Math.floor(count / 5) + 1;
        setCount(count + incrementValue);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Contador Incremental</h2>
            <button onClick={handleIncrement} disabled={count >= 100}>
                Incrementar
            </button>
            <p>Conteo: {count}</p>
        </div>
    );
}

// 2. Componente de Caja de Texto Reactiva
function CajaDeTextoReactiva() {
    const [texto, setTexto] = useState('');

    const handleBlur = (e) => {
        setTexto(e.target.value.toUpperCase());
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Caja de Texto Reactiva</h2>
            <input 
                type="text" 
                placeholder="Escribe aquí" 
                onBlur={handleBlur} 
            />
            <p>Texto en mayúsculas: {texto}</p>
        </div>
    );
}

// 3. Componente de Cambio de Imagen
function ImagenInteractiva() {
    const [imagen, setImagen] = useState("https://via.placeholder.com/150");

    const cambiarImagen = () => {
        const nuevaImagen = imagen === "https://via.placeholder.com/150" 
            ? "https://via.placeholder.com/150/0000FF/808080?text=Imagen+Nueva" 
            : "https://via.placeholder.com/150";
        setImagen(nuevaImagen);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Imagen Interactiva</h2>
            <img 
                src={imagen} 
                alt="Imagen Interactiva" 
                onMouseEnter={cambiarImagen} 
                onMouseLeave={cambiarImagen} 
                width="150" 
                height="150" 
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}

// Componente Principal (App)
function App() {
    return (
        <div>
            <ContadorIncremental />
            <CajaDeTextoReactiva />
            <ImagenInteractiva />
        </div>
    );
}

// Renderizar la aplicación en el elemento con id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

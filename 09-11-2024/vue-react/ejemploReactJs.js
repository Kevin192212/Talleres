// 1
function Counter() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
    );
  }
  
  ReactDOM.render(<Counter />, document.getElementById('root'));
  
  // 2
  function ColorChanger() {
    const [color, setColor] = React.useState('lightblue');
  
    const changeColor = () => {
      setColor(color === 'lightblue' ? 'lightgreen' : 'lightblue');
    };
  
    return (
      <div style={{ backgroundColor: color, padding: '20px' }}>
        <p>Haz clic para cambiar el color de fondo</p>
        <button onClick={changeColor}>Cambiar Color</button>
      </div>
    );
  }
  
  const colorDiv = document.createElement('div');
  document.body.appendChild(colorDiv);
  ReactDOM.render(<ColorChanger />, colorDiv);
  
  // 3
  function ItemList() {
    const [items, setItems] = React.useState(['Manzana', 'Banana', 'Naranja']);
    const [newItem, setNewItem] = React.useState('');
  
    const addItem = () => {
      if (newItem) {
        setItems([...items, newItem]);
        setNewItem('');
      }
    };
  
    return (
      <div>
        <h3>Lista de frutas</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input 
          type="text" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
          placeholder="Agregar fruta"
        />
        <button onClick={addItem}>Agregar</button>
      </div>
    );
  }
  
  const listDiv = document.createElement('div');
  document.body.appendChild(listDiv);
  ReactDOM.render(<ItemList />, listDiv);
  
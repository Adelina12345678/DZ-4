import { useState } from "react";

function App() {
  const [name, setName] = useState(""); // Поле ввода
  const [list, setList] = useState([]); // Список имен

  // Добавление имени
  const addName = () => {
    if (name.trim()) {
      setList([...list, name]);
      setName(""); // Очистка поля ввода
    }
  };

  // Изменение имени
  const changeName = (index) => {
    if (name.trim()) {
      const newList = [...list];
      newList[index] = name;
      setList(newList);
      setName("");
    }
  };

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Список имен</h2>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
        />
        <button onClick={addName} disabled={!name.trim()}>
          Добавить
        </button>

        {list.length === 0 ? (
            <p>Список пуст</p>
        ) : (
            <ul>
              {list.map((item, index) => (
                  <li key={index}>
                    {item}{" "}
                    <button onClick={() => changeName(index)} disabled={!name.trim()}>
                      Поменять
                    </button>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}

export default App;
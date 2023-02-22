// Select - O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.
const App = () => {
  const [select, setSelect] = React.useState('smartphone');

  return (
    <form>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};
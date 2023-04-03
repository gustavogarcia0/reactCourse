import './App.css';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Item from './components/Item';

function App() {


  return (

    <div className="App">
      <Pessoa nome='joao' idade ='32' profissao = 'banqueiro' foto= 'https://via.placeholder.com/150' alt ='foto do usuario' />
      <div>
        <Frase />
      </div>

      <List />
      <Item />
    </div>
  );
}

export default App;

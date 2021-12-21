
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import NavBar from './components/NavBar/NavBar';

function App(){
  return(
    <div>
    <NavBar></NavBar>
    <ItemListConteiner greeting='Hola soy itemlistcontainer'/>
    </div>
  );
}
export default App;
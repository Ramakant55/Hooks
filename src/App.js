
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserData from './Components/CustomHooks/UserData';
import Paginate from './Components/Task/Paginate';
import TaskList from './Components/Task/TaskList';
import Searchbar from './Components/UseCallback/Searchbar';
import FatchApi from './Components/UseEffectQuestions/FatchApi';
import Countsize from './Components/UselayoutEffect/Countsize';
import HeaderScroll from './Components/UselayoutEffect/HeaderScroll';
import ResizeWindow from './Components/UselayoutEffect/ResizeWindow';
import Card from './Components/Usememo/Card';
import ParentComponent from './Components/Usememo/ParentComponent';
import Counters from './Components/Usememo/Counters';
import CounterWithColor from './Components/Usememo/CounterWithColor';
import FactorialCalculator from './Components/Usememo/FactorialCalculator';
import NameSearch from './Components/Usememo/NameSearch';
import ProductList from './Components/Usememo/ProductList';
import Productslist from './Components/Usememo/Productslist';
import CounterReducer from './Components/UseReducer/CounterReducer';
import Todo from './Components/UseReducer/Todo';
import FocusForm from './Components/UseRef/Form';
import StopWatch from './Components/UseRef/StopWatch';
import BgChanger from './Components/UseStateQuestions/BgChanger';
import InputForm from './Components/UseStateQuestions/InputForm';
import ToggleVisible from './Components/UseStateQuestions/ToggleVisible';
import Counter from './Components/UseStateQuestions/Counter';

function App() {
 return (
  
<div>
  <Paginate/>
  <TaskList/>
  <Searchbar/>
  <FatchApi/>
  <Countsize/>
  <HeaderScroll/>
  <ResizeWindow/>
  <Card/>
  <ParentComponent/>
  <Counters/>
  <CounterWithColor/>
  <FactorialCalculator/>
  <NameSearch/>
  <ProductList/>
  <Productslist/>
  <CounterReducer/>
  <Todo/>
<FocusForm/>
<StopWatch/>
<BgChanger/>
<Counter/>
<InputForm/>
<ToggleVisible/>
  <UserData/>
 


</div>


);
}

export default App;

import { nanoid } from "nanoid";

import Tabs from "./components/Tabs";
import Title from './components/tasks/task-1';
import PostList from './components/tasks/task-2/PostList';
import Task from './components/tasks/task-3/src/Task';

import ProductList from './components/tasks/task-9-11/ProductList';
import Accordion from "./components/tasks/task-6/Accordion";
import ListCharacter from "./components/tasks/task-7/ListCharacter";
import Products from "./components/tasks/task-8/Products";
import GoodsList from "./components/tasks/task-9-12/GoodsList";

import items from './data/task-2/items.json'
import accordionList from './data/task-6/accordionList.json';
import theBoys from './data/task-7/boys.json';
import data from './data/task-8/data.json';

const elements = [
  {
    id: nanoid(),
    title: "Task 1. Title",
    content: <Title />,
  },
  {
    id: nanoid(),
    title: "Task 2. PostList",
    content: <PostList items={items}/>,
  },
  {
    id: nanoid(),
    title: "Task 3. LendingPage",
    content: <Task />,
  },
  {
    id: nanoid(),
    title: "Task 6. Accordion",
    content: <Accordion items={accordionList} />,
  },
  {
    id: nanoid(),
    title: "Task 7. The Boys",
    content: <ListCharacter boys={theBoys} /> ,
  },
  {
    id: nanoid(),
    title: "Task 8. Products",
    content: <Products data={data} />,
  },
  {
    id: nanoid(),
    title: "Task 9.11. ProductList",
    content: <ProductList />,
  },
  {
    id: nanoid(),
    title: "Task 9.12. GoodsList",
    content: <GoodsList />,
  }
];

function App() {
  return (
    <>
      <Tabs elements={elements} />
    </>
  );
}

export default App;

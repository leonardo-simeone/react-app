import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  // EXERCISE UPDATE STATE OBJECT
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // EXERCISE 2 UPDATE STATE OBJECT
  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Chesse"] });
  // };

  // EXERCISE 3 UPDATE STATE OBJECT
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });

  // const handleClick = () => {
  //   setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1 } : item)  })
  // }

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Chesse"] });
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);
  // const items = ["New York", "Los Angeles", "San Francisco"];
  // const [isVisible, setVisibility] = useState(false);
  // const [firstName, setFirstName] = useState(''); INSTEAD OF THIS USE AN OBJECT BECAUSE THE TWO STATES ARE RELATED, AVOID REDUNDANCY
  // const [lastName, setLastName] = useState(''); AVOID DEEPLY NESTED STRUCTURES THOUGH BECAUSE THEY'RE HARD TO UPDATE, STICK TO FLAT STRUCTURES
  // PERSON OBJECT
  // const [person, setPerson] = useState({
  //   firstName: "",
  //   lastName: "",
  // });
  // const [isLoading, setLoading] = useState(false);

  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // STATE OBJECTS ARE INMUTABLE, WE DON'T WANNA MODIFY THEM AS A NORMAL JS OBJECT
  // LIKE SO drink.price = 6; INSTAED WE WANT TO CREATE A COPY (brand new object) OF THE OBJECT AND IT'S PROPERTIES TO RERENDER
  // const handleClick = () => {
  // THIS WORK BECAUSE WE ONLY HAVE TWO PROPERTIES BUT IF WE HAVE MANY WE USE THE SPREAD OPERATOR(...)
  // WHICH WILL ALLOW US TO COPY ALL THE PROPERTIES OF THE OBJECT
  // const newDrink = {
  //   ...drink,
  //   price: 6,
  // };
  // setDrink(newDrink);
  // THIS WAY IS BETTER AND CREATES THE NEW OBJECT (without a name) WHAT'S IN THE BRACKETS IS A NEW OBJECT WITH THE COPIED PROPERTIES
  //   setDrink({ ...drink, price: 6 });
  // };

  // const handleClick = () => {
  //   setVisibility(true);
  //   console.log(isVisible);
  // };

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // };

  return (
    <div>
      <Form></Form>
      {/* <ExpandableText>Hello World!</ExpandableText> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => {}}>My Button</Button> */}
      {/* <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log("clicked")}
      /> */}
      {/* <BsFillCalendarFill color="red" size="40" /> */}
      {/* <Like onClick={() => console.log("clicked")} /> */}
      {/* <button onClick={handleClick}>Show</button> */}
      {/* {drink.price} */}
      {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
}

export default App;

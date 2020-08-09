const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Tuna",
      animal: "fish",
      breed: "aquatic",
    }),
    React.createElement(Pet, {
      name: "Muna",
      animal: "cat",
      breed: "mixed",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

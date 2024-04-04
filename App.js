const parent = React.createElement(
    "div",
    {id:"parent"}, 
    [React.createElement(
        "div",
        { id: "child"},
        [React.createElement(
            "h1",
            {},
            "Hello World"),
        React.createElement(
            "h2",
            {},
            "Hello World 2")]
        ),
    React.createElement(
        "div",
        { id: "child2"},
        [React.createElement(
            "h1",
            {},
            "Hello World 3"),
        React.createElement(
            "h2",
            {},
            "Hello World 4")]
        )
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
            
root.render(parent);
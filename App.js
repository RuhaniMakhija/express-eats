const heading=React.createElement("h1",{id:"heading"},"Hello World from REACT");
console.log(heading);


{/* <div id="parent">
        <div id="child1">
            <h1>I am child 1 heading h1</h1>
            <h2>I am child 1 heading h2</h2>
        </div>
        <div id="child2">
            <h1>I am child 2 heading h1</h1>
            <h2>I am child 2 heading h2</h2>
        </div>
</div> */}

// create react of above html code

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am child 1 heading h1"),
        React.createElement("h2",{},"I am child 1 heading h2"),
        ],
        
        ),

    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am child 2 heading h1"),
        React.createElement("h2",{},"I am child 2 heading h2"),
        ],
        
        )

    ]

        
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


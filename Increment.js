const Increment = () => {
    const [count, setCount] = React.useState(0)

    return (
        <div style={{
            background: "#fafafa",
            padding: "20px",
            textAlign: "center"
        }}>
            <h1 id="display">{count}</h1>
            <button style={{
                padding: "12px 20px",
                background: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "3px"
            }} onClick={() => setCount(count + 1)}> Increment+ </button>
        </div>
    )
}

ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
        <Increment />
        <Increment />
    </div>,
    document.getElementById('root')
)
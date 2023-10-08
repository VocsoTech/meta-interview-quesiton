export default function List() {
  const list = ["List 1", "List2", "List 3", "List 4", "List 5"];
  return (
    <div
      style={{
        minHeight: "150px",
        minWidth: "150px",
        border: "1px solid black"
      }}
    >
      {list.map((item, index) => (
        <div key={index}>
          <label htmlFor={index}>{item}</label>
          <input type="checkbox" id={index} />
        </div>
      ))}
    </div>
  );
}

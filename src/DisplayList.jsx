const DisplayList = () => {
  const items = ["Mango", "Apple", "Banana", "Orange", "Tomato"];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Below is with return on map</p>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default DisplayList;

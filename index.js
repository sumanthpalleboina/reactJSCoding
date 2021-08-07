function Button(props) {
  const { className, children } = props;
  return <button className={className}>{children}</button>;
}

const element = (
  <div className="bg-container">
    <div className="card">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button className="button1" children="Like" />
        <Button className="button2" children="Comment" />
        <Button className="button3" children="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

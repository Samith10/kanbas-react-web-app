import './index.css';

const NavigatingWithTabs = () => {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="/dummy-active">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/dummy-link-1">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/dummy-link-2">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="/dummy-link-3">Disabled</a>
  </li>
</ul>

      <div id="wd-css-navigating-with-cards">
  <h2>
    Cards
  </h2>
  <div className="card"
       style={{ width: "18rem" }}>
<img src="images/stacked.jpg" className="card-img-top" alt="" />

    <div className="card-body">
      <h5 className="card-title">
          Stacking Starship
      </h5>
      <p className="card-text">
        Stacking the most powerful rocket in history. Mars or bust!
      </p>
      <a href="/dummy-link-4" className="btn btn-primary">
        Boldly Go
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default NavigatingWithTabs;

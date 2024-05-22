const ListItem = (category) => (
  <li className="filter__type-item">
    <button className="filter__type-btn" type="button">{category}</button>
  </li>
)

export const ListType = (categories) => (
  <ul className="filter__type-list">
    {categories.map(ListItem)}
  </ul>
)

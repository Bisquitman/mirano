export const ListType = (categories) => (
  <ul class="filter__type-list">
    {categories.map((category) => (
      <li className="filter__type-item">
        <button className="filter__type-btn" type="button">{category}</button>
      </li>
    ))}
  </ul>
)

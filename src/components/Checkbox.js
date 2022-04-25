export default ({ value }) => {
  return (
    <label>
      <input type="checkbox" />
      {` Include ${value}`}
    </label>
  );
};

export default function form() {
  let element = document.createElement('div');
  element.innerHTML = `
    <form action="" method="get" accept-charset="utf-8">
      <label for="name">name</label>
      <input type="text" name="name" id="name" />
      <button type="submit">search</button>
    </form>
  `;
  return element;
}

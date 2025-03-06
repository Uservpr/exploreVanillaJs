export default function form() {
  let form = document.createElement('div');
  form.innerHTML = `
    <form action="" method="get" accept-charset="utf-8">
      <label for="name">name</label>
      <input type="text" name="name" id="name" />
      <button type="submit">search</button>
    </form>
    <br/>
  `;
  return form;
}

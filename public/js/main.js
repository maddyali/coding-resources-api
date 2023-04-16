const input = document.getElementById("keyword-input");
const btn = document.getElementById("keyword-btn");

btn.addEventListener("click", hitAPI);

async function hitAPI() {
  const keyword = input.value;

  try {
    const response = await fetch(
      `https://the-coding-resources-api.up.railway.app/api/${keyword}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

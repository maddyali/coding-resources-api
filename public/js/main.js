const input = document.getElementById("keyword-input");
const btn = document.getElementById("keyword-btn");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    hitAPI();
  }
});

btn.addEventListener("click", hitAPI);

async function hitAPI() {
  const keyword = input.value;

  try {
    const response = await fetch(
      `https://coding-resources-api.onrender.com/api/${keyword}`
    );
    const data = await response.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
  input.value = "";
}

function render(data) {
  const resultList = document.getElementById("result-list");
  resultList.innerHTML = "";

  if (data.length) {
    data.forEach((el) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <pre class="json">
        <code>
            {
                <div class="indent">
                    <p>name: '${el.name}',</p>
                    <p class="text-truncate">url: '<a href="${
                      el.url
                    }" target="_blank">${el.url}</a>',</p>
                    <p>description: '${el.description}',</p>
                    <p class="text-truncate">keywords: [${el.keywords
                      .map((keyword) => `"${keyword}"`)
                      .join(", ")}]</p>
                </div>
            },
        </code>
      </pre>
        `;

      resultList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.innerHTML = "No matches found.";
    resultList.appendChild(li);
  }
}

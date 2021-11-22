let count = 0;
let arr = new Array(25).fill("Masai Student");

let div = document.querySelector(".sub_container");
function test() {
  arr.map((el) => {
    let text = document.createElement("div");

    let span_masai = document.createElement("span");
    let span_count = document.createElement("span");

    span_masai.textContent = el;
    span_count.textContent = count;

    count++;
    text.setAttribute("class", "text");
    // text.innerHTML = el + count;
    text.append(span_masai, span_count);
    text.setAttribute("style", "padding:1%");
    div.append(text);
  });
}
test();

div.onscroll = () => {
  let top = div.scrollTop;
  console.log("top:", top);
  let height = div.scrollHeight;
  console.log("height:", height);
  let client = div.clientHeight;
  console.log("client:", client);

  let bottom = parseInt(height - top);

  if (bottom === client || bottom === client + 1 || bottom === client - 1) {
    test();
  }
  console.log("bottom:", bottom);
};

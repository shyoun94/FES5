  let allMemo = JSON.parse(localStorage.getItem('allMemo')) ?? [];

  const addBtn = document.querySelector(".add-btn");
  // const saveBtn = document.querySelector(".save-btn");
  render();

  // addBtn.addEventListener("click", (e)=>{
  //   const title = document.getElementById(".edit-note-title");
  //   const content = document.getElementById(".edit-note-content");
  // });
  const inputTitle = document.querySelector('#edit-note-title');
  const inputContent = document.querySelector('#edit-note-content');
  const outputTitle = document.querySelector('#output-title');
  const outputContent = document.querySelector('#output-content');
  let now = new Date();
  let newNow = now.toLocaleString("ko-KR");
  addBtn.addEventListener('click', (e) => {
    const title = document.getElementById("edit-note-title").value;
    const content = document.getElementById("edit-note-content").value;
    allMemo.push({ title, content, num: allMemo.length, newNow });
    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    render();
  });

  function render(){
    const display = document.getElementById("Memo-note");
    display.innerHTML = "";
  
    for (let i = allMemo.length; i > 0; i--) {
      const Memoboard = document.createElement("div");
      const saveTitle = document.createElement("h2");
      const saveContent = document.createElement("p");
      //const saveId = document.createElement("p");
      const saveTime = document.createElement("p");
      //const deleteBtn = document.createElement("button");
  
      saveTitle.textContent = allMemo[i - 1].title;
      saveContent.textContent = allMemo[i - 1].content;
      saveTime.textContent = allMemo[i - 1].newNow;
      //saveId.textContent = allMemo[i - 1].num + 1;
      // deleteBtn.textContent = "삭제";
      // deleteBtn.setAttribute("id", allMemo[i - 1].num);
      // deleteBtn.setAttribute("onclick", "askRemove()");
      Memoboard.classList.add("Memoboard");
      saveTitle.setAttribute("id","output-title");
      saveContent.setAttribute("id","output-content");
      Memoboard.setAttribute("id", allMemo[i - 1].num + 1);
      display.appendChild(Memoboard);
      //Memoboard.appendChild(saveId);
      Memoboard.appendChild(saveTitle);
      Memoboard.appendChild(saveContent);
      Memoboard.appendChild(saveTime);
      //Memoboard.appendChild(deleteBtn);
    }
  }
// inputTitle.addEventListener('input', (event) => {
  
//   const inputValue = event.target.value;

//   outputTitle.textContent = inputValue;
// });
// inputContent.addEventListener('input', (event) => {
  
//   const inputTxt = event.target.value;

//   outputContent.textContent = inputTxt;
// });
const MemoSection = document.querySelector("#Memo-note")
MemoSection.querySelectorAll(".Memoboard").forEach(noteListItem => {
  noteListItem.addEventListener("click", (e) => {
    
    const editTitle = e.currentTarget.querySelector('h2');
    const editContent = e.currentTarget.querySelector('p');
    inputTitle.value = editTitle.innerText;
    inputContent.value = editContent.innerText;

    inputTitle.focus();
    inputContent.focus();
  });
});
inputTitle.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  outputTitle.innerText = inputValue;
  console.log(outputTitle);
  // const title = document.getElementById("edit-note-title").value;
  //   const content = document.getElementById("edit-note-content").value;
  //   allMemo.push({ title, content, num: allMemo.length, newNow });
  //   localStorage.setItem("allMemo", JSON.stringify(allMemo));
});
  inputTitle.addEventListener('blur', () => {
    render();
  });
inputContent.addEventListener('input', (e) => {
  const inputTxt = e.target.value;
  outputContent.innerText = inputTxt;
  console.log(outputContent);
})
  inputContent.addEventListener('blur', () => {
  console.log(outputContent);
  render();

});

// const formElement = document.querySelector('.memo-form');
// formElement.addEventListener('blur', (e) => {
//   const target = e.target;
//   if(target.tagName === 'INPUT' || target.tagName === 'TEXTAREA'){
//     target.value = '';
//   }
// }, true);

document.addEventListener("DOMContentLoaded", () => {
  const form =document.getElementById('create-task-form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const task=document.getElementById('tasks');
    const p=document.createElement('p');
    const btn=document.createElement("button");
    const input=document.getElementById('new-task-description');
    p.textContent=e.target['new-task-description'].value
    btn.textContent="x";
    btn.addEventListener('click',()=>{
      btn.remove();
      p.remove();
    })
    task.appendChild(p);
    p.appendChild(btn);
    

    

  })
  // your code here
});



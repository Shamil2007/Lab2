document.addEventListener('DOMContentLoaded', () => {
    const inputs = [
      { inputId: 'addContact', listClass: 'contact-list' },
      { inputId: 'addEducation', listClass: 'education-list' },
      { inputId: 'addSkill', listClass: 'skills-list' },
      { inputId: 'addLang', listClass: 'languages-list' }
    ];
  
    for (let index = 0; index < inputs.length; index++) {
        const inputId = inputs[index].inputId
        const listClass = inputs[index].listClass
        const input = document.getElementById(inputId);
        const list = document.querySelector(`.${listClass}`);
    
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && input.value.trim() !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = input.value.trim();
            list.appendChild(newItem);
            input.value = '';
          }
        });
    }
  });
  
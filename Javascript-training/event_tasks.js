
const clickBtn = document.getElementById('clickBtn');
const statusParagraph = document.getElementById('statusParagraph');

clickBtn.addEventListener('click', () => {
  statusParagraph.textContent = 'Status successfully updated!';
});



const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
  charCount.textContent = textInput.value.length;
});

const registrationForm = document.getElementById('registrationForm');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const feedbackMessage = document.getElementById('feedbackMessage');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const nameValue = username.value.trim();
  const emailValue = useremail.value.trim();

  if (nameValue === '' || emailValue === '') {
    feedbackMessage.textContent = 'Error: All fields are required.';
    feedbackMessage.className = 'error';
  } else {
    feedbackMessage.textContent = 'Success: Form submitted successfully!';
    feedbackMessage.className = 'success';
  }
});
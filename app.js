const form = document.getElementById("ai-form");
const outputBox = document.getElementById("output-box");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("job-role").value;
  const company = document.getElementById("company-name").value;
  const skills = document.getElementById("skills").value;

  const letter = generateMockLetter(name, role, company, skills);

  result.value = letter;
  outputBox.style.display = "flex";
});

function generateMockLetter(name, role, company, skills) {
  return `Dear Hiring Manager at ${company},

I am writing to express my interest in the ${role} position. My name is ${name}, and I bring experience in ${skills}.

I am passionate about contributing my skills to ${company} and believe I would be a strong fit for your team.

Thank you for your time and consideration.

Sincerely,
${name}`;
}

function copyText() {
  result.select();
  navigator.clipboard.writeText(result.value);
  
  const btn = document.getElementById("copy-btn");
  btn.textContent = "Copied!";
  setTimeout(() => (btn.textContent = "Copy"), 1500);
}






































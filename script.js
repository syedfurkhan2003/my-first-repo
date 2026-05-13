const form = document.getElementById('employeeForm');
const progressContainer = document.getElementById('progressContainer');
const empDetails = document.getElementById('empDetails');
const stepsList = document.getElementById('stepsList');

// Static list of steps
const steps = [
  "Step 1: ID Verification",
  "Step 2: Background Check",
  "Step 3: Document Upload",
  "Step 4: Family verification (in case of politics)",
  "Step 5: Finger verification through Aadhaar",
  "Step 6: Thumb verification through Aadhaar",
  "Step 7: Iris verification through Aadhaar",
  "Step 8: ID card approval"
];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('empName').value.trim();
  const id = document.getElementById('empId').value.trim();
  if (!name || !id) return;

  empDetails.textContent = `${name} (ID: ${id}) — 7/8 Steps Completed`;

  stepsList.innerHTML = "";

  steps.forEach((step, index) => {
    const li = document.createElement('li');
    if (index < 7) {
      li.innerHTML = `✔ ${step}`;
      li.classList.add('completed');
    } else {
      li.innerHTML = `⏳ ${step} (Pending)`;
      li.classList.add('pending');
    }
    stepsList.appendChild(li);
  });

  progressContainer.classList.remove('hidden');
});

async function fetchAndDisplayCSV() {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRE_9xdJNgAT4WZpzND7NLhVYy8yOQqF0xeCyeQAx5y0c_XXcWKwmVxQl29VYu-oa-Xa5hcWCaIfQJg/pub?output=csv';
    const csvDisplay = document.getElementById('csvDisplay');
  
    try {
      const response = await fetch(csvUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const csvText = await response.text();
      csvDisplay.textContent = csvText;
    } catch (error) {
      console.error('Error fetching CSV:', error);
      alert('Error fetching CSV. Check console.');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('loadButton');
    if (loadButton) {
      loadButton.addEventListener('click', fetchAndDisplayCSV);
    }
  });
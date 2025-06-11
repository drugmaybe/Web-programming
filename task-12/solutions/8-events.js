export default () => {
  // BEGIN
        const button = document.getElementById('alert-generator');
        const alertsContainer = document.querySelector('.alerts');
        let alertCount = 0;

        button.addEventListener('click', () => {
            alertCount++;
            const newAlert = document.createElement('div');
            newAlert.className = 'alert alert-primary';
            newAlert.textContent = `Alert ${alertCount}`;
            alertsContainer.insertBefore(newAlert, alertsContainer.firstChild);
        });
    };
  // END
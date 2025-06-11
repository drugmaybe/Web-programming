// BEGIN
export default (companies) => {
    const container = document.querySelector('.container');
    let currentDescription = null;

    companies.forEach(company => {
        const button = document.createElement('button');
        button.className = 'btn btn-primary mr-2';
        button.textContent = company.name;

        button.addEventListener('click', () => {
            if (currentDescription && currentDescription.companyId === company.id) {
                container.removeChild(currentDescription.element);
                currentDescription = null;
                return;
            }

            if (currentDescription) {
                container.removeChild(currentDescription.element);
            }

            const descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'mt-3 p-3 border rounded';
            descriptionDiv.textContent = company.description;

            container.appendChild(descriptionDiv);
            currentDescription = {
                companyId: company.id,
                element: descriptionDiv
            };
        });

        container.appendChild(button);
    });
};
// END
export default () => {
  // BEGIN
    document.addEventListener('click', (e) => {
        const tabTrigger = e.target.closest('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');
        if (!tabTrigger) return;

        e.preventDefault();

        const targetId = tabTrigger.dataset.bsTarget;
        const targetContent = document.querySelector(targetId);
        if (!targetContent) return;

        const tabsContainer = tabTrigger.closest('.nav-tabs, .nav-pills');
        if (!tabsContainer) return;

        const allTriggers = tabsContainer.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]');
        const tabContent = document.querySelector(tabsContainer.getAttribute('aria-controls')) ||
            targetContent.closest('.tab-content') ||
            document.querySelector('.tab-content');

        if (!tabContent) return;

        const allContents = tabContent.querySelectorAll('.tab-pane');

        allTriggers.forEach(trigger => {
            trigger.classList.remove('active');
            trigger.setAttribute('aria-selected', 'false');
        });

        allContents.forEach(content => {
            content.classList.remove('active');
        });

        tabTrigger.classList.add('active');
        tabTrigger.setAttribute('aria-selected', 'true');
        targetContent.classList.add('active');
    });
  // END
};

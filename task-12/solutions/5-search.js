export default (document) => {
    // BEGIN
    const title = document.querySelector('.content h1').textContent;
    const description = document.querySelector('.content .description').textContent;

    const items = Array.from(document.querySelectorAll('.links > div')).map(item => {
        return {
            title: item.querySelector('h2 a').textContent,
            description: item.querySelector('p').textContent
        };
    });

    return {
        title,
        description,
        items
    };
    // END
};


    const tabsContainer = document.querySelector('.container--tabs');
    const contentContainer = document.querySelector('.container--content');


    fetch('/tabs.json')
    .then(response => response.json())
    .then(data => {
    //  Создание вкладок (li В ul)
    data.forEach((iphone, index) => {
        const tab = document.createElement('li');
        tab.className = 'tab' + (index == 0 ? ' tab--active' : '');
        tab.textContent = iphone.title;
        tabsContainer.appendChild(tab);

        // Создание контетной части
        const content = document.createElement('div');
        content.className = 'content' + (index == 0 ? ' content--active' : '');
        content.innerHTML = `
                        <h2>${iphone.title}</h2>
                        <p>${iphone.description}</p>
     `
        contentContainer.appendChild(content);
    });

    // Для каждой вкладки добавлю лисенеры по клику
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {

        tab.addEventListener('click', () => {
            // Сделаю все неактивным( и вкладка, и контент)
            tabs.forEach(tab => tab.classList.remove('tab--active'));
            const contents = document.querySelectorAll('.content');
            contents.forEach(content => content.classList.remove('content--active'));

            // Сделаю вкладку по которой кликнули активной, и соответсвующий (по индексу) ее контент тоже
            tab.classList.add('tab--active');
            const content = contents[index];
            content.classList.add('content--active');
        });
});
});

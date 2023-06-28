const list = document.querySelector('.output ul');
    list.innerHTML = '';

    const greetings = [
        'Que o amor de vocês seja eterno!',
        'Sejam todos bem-vindos à Celebração.',
        'Bem-vindos à Celebração da morte de Jesus Cristo, o nosso Salvador.',
        'A Celebração é o dia mais importante para toda a humanidade. Sejam bem-vindos!',
        'Melhore logo.',
    ];

    for (const greeting of greetings) {
        if (greeting.includes('Celebração')) {
            const listItem = document.createElement('li');
            listItem.textContent = greeting;
            list.appendChild(listItem);
        }
    }
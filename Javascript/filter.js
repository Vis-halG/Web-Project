document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filterButton');
    const productCards = document.querySelectorAll('.productCard');

    // Show all products by default
    productCards.forEach(function (card) {
        card.classList.add('show');
    });

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const filter = button.getAttribute('data-filter');

            // Toggle active state
            filterButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            // Show filtered products
            productCards.forEach(function (card) {
                if (filter === 'all') {
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                    if (card.classList.contains(filter)) {
                        card.classList.add('show');
                    }
                }
            });
        });
    });
});
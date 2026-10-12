document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('monGraphique').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Terrassement', 'Fondations', 'Gros Œuvre', 'Fluides & Réseaux', 'Second Œuvre', 'Finitions'],
            datasets: [{
                label: 'Budget Prévisionnel Initial (€)',
                data: [],
                borderColor: '#1e293b',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false
            },
            {
                label: 'Coût Réel Optimisé via Data & IA (€)',
                data: [],
                borderColor: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                borderWidth: 3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { title: { display: true, text: 'Montant (€)' } },
                x: { title: { display: true, text: 'Phases du Chantier' } }
            }
        }
    });
});


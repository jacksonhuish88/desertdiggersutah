document.addEventListener("DOMContentLoaded", function() {
    const services = [
        {
            icon: "fas fa-coins",
            title: "The Prospector",
            text: "Dive into mining with this introductory package that gives you and your team a taste of the prospector life. Perfect for smaller groups looking for a quick adventure.",
            cost: "$2000",
            group_size: "Up to 5",
            duration: "Half Day (4 hours)"
        },
        {
            icon: "fa-solid fa-trophy",
            title: "The Gold Rush",
            text: "Ready for a full day of exploration? This package is designed for larger groups and offers a complete mining experience, from drilling to excavation.",
            cost: "$4000",
            group_size: "Up to 10",
            duration: "Full Day (8 hours)"
        },
        {
            icon: "fa-solid fa-hand-holding-dollar",
            title: "The Mother Lode",
            text: "Go all in with our most extensive package. Spread over two days, the Mother Lode offers deep dives into mining techniques and lets your group unearth treasures with time to spare for a bit of competitive fun!",
            cost: "$7000",
            group_size: "Up to 15",
            duration: "Two Days"
        }

    ];

    const container = document.getElementById('services-container');
    services.forEach(service => {
        const serviceHTML = `
            <div class="col-md-4 mb-3" id="${service.title.toLowerCase().replace(/\s+/g, '-')}">
            <div class="card service-card">
                <div class="card-body text-center">
                <!-- Anchor link wrapping the icon and title -->
                    <div class="title-icon-wrapper-card">
                        <i class="${service.icon} fa-2x"></i>
                        <h3 class="card-title">${service.title}</h3>
                    </div>
                    <p class="card-text">${service.text}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cost: ${service.cost}</li>
                        <li class="list-group-item">Duration: ${service.duration}</li>
                        <li class="list-group-item">Group Size: ${service.group_size}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += serviceHTML;
    });
});

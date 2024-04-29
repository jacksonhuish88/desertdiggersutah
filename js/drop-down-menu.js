document.addEventListener("DOMContentLoaded", function() {
    const services = [
        {
            title: "The Prospector",
        },
        {
            title: "The Gold Rush",
        },
        {
            title: "The Mother Lode",
        },
    ];

    const dropdownMenu = document.getElementById("servicesDropdownMenu");

    services.forEach(service => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.classList.add("dropdown-item");
        link.href = `#${service.title.toLowerCase().replace(/\s+/g, '-')}`;
        link.innerHTML = service.title;
        listItem.appendChild(link);
        dropdownMenu.appendChild(listItem);
    });
});

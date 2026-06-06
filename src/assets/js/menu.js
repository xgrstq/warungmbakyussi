const menuItems = [
  {
    title: "Nasi Kuning",
    price: "7K",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    description:
      "Nasi kuning wangi bumbu alami dengan pelengkap telur dan sambal khas."
  },

  {
    title: "Nasi Urap",
    price: "7K",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    description:
      "Sayuran segar dengan kelapa berbumbu pedas manis yang bikin nagih."
  },

  {
    title: "Ayam Geprek",
    price: "7K",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    description:
      "Ayam crispy geprek sambal bawang pedas dengan nasi hangat."
  }
];

function renderMenuCards() {
  const menuContainer = document.getElementById("menuContainer");

  if (!menuContainer) return;

  menuContainer.innerHTML = menuItems
    .map(
      (item) => `
        <div class="group relative z-10 bg-matchaSoft rounded-[2.5rem] p-6 transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-matcha/10">

          <div class="absolute -top-4 -right-4 z-20 w-16 h-16 price-badge text-white rounded-full flex items-center justify-center font-bold shadow-lg">
            ${item.price}
          </div>

          <div class="aspect-video rounded-2xl mb-6 overflow-hidden">
            <img
                src="${item.image}"
                alt="${item.title}"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h3 class="text-xl font-bold mb-2">
            ${item.title}
          </h3>

          <p class="text-gray-500 text-sm">
            ${item.description}
          </p>

        </div>
      `
    )
    .join("");
}
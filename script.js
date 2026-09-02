const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");

const toast = document.getElementById("toast");

let cart = 0;


/* =========================
   MOBILE MENU
========================= */

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

  });

});


/* =========================
   ADD TO CART
========================= */

document.querySelectorAll(".add-btn").forEach(button => {

  button.addEventListener("click", () => {

    cart++;

    cartCount.textContent = cart;

    toast.textContent =
      `${button.dataset.name} added to cart ✓`;

    toast.classList.add("show");

    setTimeout(() => {

      toast.classList.remove("show");

    }, 1800);

  });

});


/* =========================
   CART
========================= */

cartBtn.addEventListener("click", () => {

  if (cart === 0) {

    alert("Your cart is empty.");

  } else {

    alert(
      `You have ${cart} item${cart > 1 ? "s" : ""} in your cart.`
    );

  }

});


/* =========================
   SEARCH
========================= */

document
  .getElementById("searchBtn")
  .addEventListener("click", () => {

    const search = prompt(
      "What are you looking for?"
    );

    if (search) {

      alert(
        `Searching Shoply for "${search}"...`
      );

    }

  });


/* =========================
   FILTER
========================= */

document
  .getElementById("filterBtn")
  .addEventListener("click", () => {

    const category = prompt(
      "Enter: fashion, electronics, home or accessories"
    );

    if (!category) return;

    const cards =
      document.querySelectorAll(".product-card");

    cards.forEach(card => {

      if (
        card.dataset.category ===
        category.toLowerCase()
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });


/* =========================
   DEAL BUTTON
========================= */

document
  .getElementById("dealBtn")
  .addEventListener("click", () => {

    document
      .getElementById("shop")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


/* =========================
   NEWSLETTER
========================= */

document
  .getElementById("newsletterForm")
  .addEventListener("submit", event => {

    event.preventDefault();

    document
      .getElementById("newsletterMessage")
      .textContent =
      "You're subscribed! Welcome to Shoply.";

    event.target.reset();

  });
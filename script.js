// ===== ELVARE - script.js =====

// ---------- CART (products.html) ----------
let count = 0;      // number of items
let total = 0;      // total price
let items = "";     // list of items (one per line)

// Add to Cart buttons call this
function addToCart(name, price) {
  count = count + 1;
  total = total + price;
  items = items + name + " - ₱" + price + "<br>";   // <br> = new line

  $("#cartCount").text(count);
  $("#cartItems").html(items);
  $("#cartTotal").text(total);
  $("#cartMessage").hide();
}

// Make the cart empty again
function resetCart() {
  count = 0;
  total = 0;
  items = "";
  $("#cartCount").text(0);
  $("#cartItems").text("Your cart is empty.");
  $("#cartTotal").text(0);
  $("#cartMessage").hide();
}

$("#clearBtn").on("click", resetCart);

$("#checkoutBtn").on("click", function () {
  if (count === 0) {
    $("#cartMessage").text("Your cart is empty.").show();
  } else {
    resetCart();
    $("#cartMessage").text("Thank you for shopping at elvare!").show();
  }
});


// ---------- FORM CHECKING ----------
// Empty field = red (is-invalid). Filled field = green (is-valid).
function checkField(id, className) {
  const field = document.getElementById(id);
  if (field.value.trim().length === 0) {
    field.className = className + " is-invalid";
    return false;
  } else {
    field.className = className + " is-valid";
    return true;
  }
}


// ---------- REVIEW FORM (reviews.html) ----------
$("#reviewForm").on("submit", function (event) {
  event.preventDefault();

  const okName = checkField("reviewName", "form-control");
  const okRating = checkField("reviewRating", "form-select");
  const okMessage = checkField("reviewMessage", "form-control");

  if (okName && okRating && okMessage) {
    $("#newName").text("— " + document.getElementById("reviewName").value);
    $("#newRating").text("Rating: " + document.getElementById("reviewRating").value + " / 5");
    $("#newMessage").text(document.getElementById("reviewMessage").value);
    $("#newReview").show();
    $("#reviewForm").hide();
    $("#reviewSuccess").show();
  }
});


// ---------- CONTACT FORM (contact.html) ----------
$("#contactForm").on("submit", function (event) {
  event.preventDefault();

  const okFirst = checkField("contactFirstName", "form-control");
  const okLast = checkField("contactLastName", "form-control");
  const okEmail = checkField("contactEmail", "form-control");
  const okSubject = checkField("contactSubject", "form-control");
  const okMessage = checkField("contactMessage", "form-control");

  if (okFirst && okLast && okEmail && okSubject && okMessage) {
    $("#contactForm").hide();
    $("#contactSuccess").show();
  }
});
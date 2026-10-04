// Configure the real EscalePay checkout URL here when it is available.
const CHECKOUT_URL = "";
const checkout = document.getElementById("checkout");
const note = document.getElementById("checkout-note");

if (CHECKOUT_URL) {
  checkout.href = CHECKOUT_URL;
  checkout.target = "_blank";
  checkout.rel = "noopener";
  note.textContent = "Pagamento processado através do checkout oficial.";
} else {
  checkout.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("checkout-config")?.scrollIntoView({behavior:"smooth", block:"center"});
    note.textContent = "O link do checkout EscalePay ainda precisa ser configurado.";
  });
  checkout.href = "#checkout-config";
}

// Small helper to send booking data to a WhatsApp number.
// Exposes `window.sendBookingToWhatsApp(data, phone)` so other scripts can reuse it.
(function () {
  function buildMessage(data) {
    return (
      "*New Service Booking Request*\n\n" +
      "Name: " +
      (data.name || "") +
      "\n" +
      "Phone: " +
      (data.phone || "") +
      "\n" +
      "Service: " +
      (data.service || "") +
      "\n" +
      "Address: " +
      (data.address || "")
    );
  }

  window.sendBookingToWhatsApp = function (data, phone) {
    try {
      var num = phone || "919140969179";
      var msg = buildMessage(data || {});
      var url = "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);
      console.log("[booking-submit] opening", url);
      window.open(url, "_blank");
    } catch (e) {
      console.error("sendBookingToWhatsApp failed", e);
    }
  };
})();

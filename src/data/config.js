// ============================================================
// CONFIGURACIÓN GENERAL DEL SITIO
// ============================================================

export const SITE = {
  brandName: "Market",
  brandNameAccent: "Arg",
  subtitle: "Catálogo Web",
  email: "contacto@marketarg.com",
  phoneDisplay: "+54 9 3700 00-0000",
  // Número de WhatsApp en formato internacional, SOLO NÚMEROS (sin +, espacios ni guiones)
  whatsappNumber: "5493700000000",
};

// Plantilla del mensaje que se genera al tocar "Consultar por WhatsApp".
// Podés editarla libremente; las variables disponibles son:
// {producto}, {cantidad}, {precioUnitario}, {precioTotal}
export const WHATSAPP_MESSAGE_TEMPLATE =
  "Hola! Quiero consultar por este producto:\n\n" +
  "🛍️ *{producto}*\n" +
  "Cantidad: {cantidad}\n" +
  "Precio unitario: {precioUnitario}\n" +
  "Total estimado: {precioTotal}";

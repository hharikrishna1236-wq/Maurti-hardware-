export const SHOW_HAFELE = false; // set true ONLY after owner confirms Häfele dealership
export const BIZ = {
  name: "Maruti Hardware",
  owner: "C/O Rajkumar Singhal",
  phone: "+91 98308 03966",
  tel: "+919830803966",
  wa: "919830803966",
  addressLines: ["Gate No. 5, 2nd Floor, Room 26,", "167/4 Lenin Sarani Road,", "Chandni Chowk, Kolkata,", "West Bengal – 700072."],
  addressFlat: "Gate No. 5, 2nd Floor, Room 26, 167/4 Lenin Sarani Road, Chandni Chowk, Kolkata, West Bengal 700072",
  maps: "https://maps.app.goo.gl/JJz6uvjMUFjKrnnU9",
  site: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
};
export const DEFAULT_MSG = "Hello Maruti Hardware, I am interested in your hardware products. Please share product details.";
export const waLink = (msg: string = DEFAULT_MSG) => `https://wa.me/${BIZ.wa}?text=${encodeURIComponent(msg)}`;
export const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BIZ.addressFlat)}`;
export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(BIZ.addressFlat)}&output=embed`;

// Drop real photos into /public/images and set `image` (e.g. "/images/kitchen.jpg"). Until then a branded visual is shown.
export const categories = [
  { id: "kitchen", title: "Kitchen Fittings", desc: "Smart, durable fittings for modular kitchens that work beautifully every day.", items: ["Pull-out Baskets", "Hinges", "Drawer Systems"], icon: "kitchen", image: "" },
  { id: "wardrobe", title: "Wardrobe & Furniture Fittings", desc: "Sliding systems and accessories that bring order and elegance to wardrobes and furniture.", items: ["Sliding Systems", "Wardrobe Accessories", "Furniture Fittings"], icon: "wardrobe", image: "" },
  { id: "handles", title: "Handles & Profiles", desc: "Refined handles and T-profiles that finish your cabinetry with character.", items: ["T-Profiles", "Cabinet Handles", "Modern Handles"], icon: "handles", image: "" },
  { id: "architectural", title: "Architectural Hardware", desc: "Locks, door fittings and accessories for secure, well-finished interiors.", items: ["Locks", "Door Fittings", "Accessories"], icon: "arch", image: "" },
];
export const products = [
  { name: "Kitchen Basket Systems", desc: "Pull-out basket solutions for organised modular kitchens.", icon: "basket", image: "" },
  { name: "Hydraulic Hinges", desc: "Soft-closing hinge options for cabinets and wardrobes.", icon: "hinge", image: "" },
  { name: "Wardrobe Sliding Systems", desc: "Smooth sliding solutions for modern wardrobes.", icon: "wardrobe", image: "" },
  { name: "Cabinet Handles", desc: "Handle designs to complement contemporary interiors.", icon: "handles", image: "" },
  { name: "Concealed Hinges", desc: "Clean-look hinges for seamless cabinet doors.", icon: "hinge", image: "" },
  { name: "Door Accessories", desc: "Locks and door fittings to complete your finish.", icon: "arch", image: "" },
];
export const why = [
  { t: "Quality Hardware Products", d: "Carefully selected hardware for lasting everyday performance." },
  { t: "Multiple Product Categories", d: "Kitchen, wardrobe, furniture and architectural hardware under one roof." },
  { t: "Professional Product Guidance", d: "Talk to us and we will help you find a suitable solution." },
  { t: "Convenient Market Location", d: "Easy to reach in the heart of Chandni Chowk, Kolkata." },
  { t: "Customer-Focused Service", d: "Your requirements and your project come first." },
];
export const nav = [["Home", "#home"], ["Products", "#products"], ["Brands", "#brands"], ["About Us", "#about"], ["Contact", "#contact"]] as const;

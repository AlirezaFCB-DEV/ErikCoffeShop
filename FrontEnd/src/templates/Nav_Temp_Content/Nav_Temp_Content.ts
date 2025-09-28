import type list_template_props from "../../Types/List_Template_Props.type";

export const nav_menu_items: list_template_props[] = [
  { id: 1, route: "/", title: "صفحه اصلی", active: true },
  { id: 2, route: "/products", title: "لیست محصولات", active: false },
  { id: 3, route: "/tutorials", title: "آموزش ها", active: false },
  { id: 4, route: "/about", title: "درباره", active: false },
  { id: 5, route: "/contact", title: "تماس باما", active: false },
];

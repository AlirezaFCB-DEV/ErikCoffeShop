interface categoriesItems {
  id: string;
  title: string;
  active: boolean;
}

export const specialOffsCategories: categoriesItems[] = [
  { id: crypto.randomUUID(), title: "دانه‌قهوه", active: true },
  { id: crypto.randomUUID(), title: "آسیاب قهوه", active: false },
  { id: crypto.randomUUID(), title: "ابزار باریستا", active: false },
  { id: crypto.randomUUID(), title: "بویلر آب‌جوش", active: false },
  { id: crypto.randomUUID(), title: "تجهیزات کافه و رستوران", active: false },
];

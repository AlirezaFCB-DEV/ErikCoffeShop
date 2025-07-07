interface categoriesItems {
  id: string;
  title: string;
  active: boolean;
}

export const BestSellerCategories: categoriesItems[] = [
  { id: crypto.randomUUID(), title: "آسیاب قهوه", active: true },
  { id: crypto.randomUUID(), title: "ابزار باریستا", active: false },
  { id: crypto.randomUUID(), title: "بویلر آب جوش", active: false },
  { id: crypto.randomUUID(), title: "بویلر آب‌جوش", active: false },
  { id: crypto.randomUUID(), title: "تجهیزات کافه و رستوران", active: false },
  { id: crypto.randomUUID(), title: "شو کیک", active: false },
];

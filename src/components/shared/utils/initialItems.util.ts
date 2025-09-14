export const initialItems = (icons: any[]) => {
  if (!icons || !Array.isArray(icons)) {
    return [];
  }

  const items = [...icons];

  const uniqueItems = items.filter((item, index, self) => 
    index === self.findIndex(i => i.name === item.name)
  );

  uniqueItems.sort((a: { name: string }, b: { name: string }) => {
    return a.name.localeCompare(b.name);
  });

  return uniqueItems;
};
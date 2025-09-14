export const filterIt = (terms: string, arr: any[]) => {
  if (!terms || terms.trim() === '' || terms.trim().length < 2) {
    return arr;
  }

  const searchTerm = terms.toLowerCase().trim();
  const words = searchTerm.match(/\w+|"[^"]+"/g);
  
  if (!words) {
    return arr;
  }

  const searchTerms = [...words, searchTerm];

  return arr.filter((item) => {
    const itemValues = Object.values(item);
    const searchableText = JSON.stringify(itemValues).toLowerCase();
    
    return searchTerms.some((term) => searchableText.includes(term.toLowerCase().replace(/"/g, '')));
  });
};
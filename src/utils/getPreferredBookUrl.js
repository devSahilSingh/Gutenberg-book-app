export const getPreferredBookUrl = (book) => {
    const formats = book.formats;
    const preferredOrder = [
      "text/html; charset=utf-8",
      "text/html",
      "application/pdf",
      "text/plain; charset=us-ascii",
      "text/plain"
    ];
  
    for (const type of preferredOrder) {
      if (formats[type] && !formats[type].endsWith(".zip")) {
        return formats[type];
      }
    }
  
    return null;
  };
  
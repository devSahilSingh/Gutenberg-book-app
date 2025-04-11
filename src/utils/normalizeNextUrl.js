// Replaces localhost in `next` URL with actual API host
export const normalizeNextUrl = (url) => {
    if (!url) return null;
  
    return url.replace(
      "http://localhost:8005",
      "http://skunkworks.ignitesol.com:8000"
    );
  };
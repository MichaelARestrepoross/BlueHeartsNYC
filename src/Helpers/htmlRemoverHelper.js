import parse from 'html-react-parser';
import he from 'he';

export function stripHtmlTagsAndDecode(str) {
  if (!str) return '';

  // Decode HTML strings
  str = he.decode(str);

  // Use html-react-parser to remove unwanted tags but keep the text content
  return parse(str, {
    replace: (domNode) => {
      if (domNode.type === 'text') {
        return domNode.data;
      }
      return null;
    }
  });
}

export function getRandomParkImage() {
  const parkImages = [
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623802/park1_dolcd0.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623801/park4_zkfdws.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623801/park3_ykj1qu.webp',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623801/park2_q7jum3.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623800/park9_zpumie.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623800/park5_iintwu.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623799/park6_z2fseh.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623799/park8_w5xbnq.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623798/park_10_luiota.jpg',
    'https://res.cloudinary.com/dm8xhvx4t/image/upload/v1717623799/park7_t7l8wc.jpg'
  ];

  const randomIndex = Math.floor(Math.random() * parkImages.length);
  return parkImages[randomIndex];
}

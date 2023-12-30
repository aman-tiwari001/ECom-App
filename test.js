const data = [
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    size: 'S',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    size: 'XL',
  },
  {
    id: 6,
    name: 'Casual Hoodie',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Casual Hoodie in blue.",
    price: '$45',
    color: 'Blue',
    size: 'XXL',
  },
  {
    id: 7,
    name: 'Slim Fit Jeans',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Slim Fit Jeans in gray.",
    price: '$50',
    color: 'Gray',
    size: 'M',
  },
  {
    id: 8,
    name: 'Graphic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Graphic Tee in white.",
    price: '$40',
    color: 'White',
    size: 'S',
  },
  {
    id: 9,
    name: 'Athletic Shorts',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-05.jpg',
    imageAlt: "Front of men's Athletic Shorts in black.",
    price: '$25',
    color: 'Black',
    size: 'L',
  },
  {
    id: 10,
    name: 'Leather Jacket',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-06.jpg',
    imageAlt: "Front of men's Leather Jacket in brown.",
    price: '$120',
    color: 'Brown',
    size: 'M',
  },

  {
    id: 35,
    name: 'Striped Polo Shirt',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-35.jpg',
    imageAlt: "Front of men's Striped Polo Shirt.",
    price: '$40',
    color: 'Striped',
    size: 'XL',
  },
];

const color = [... new Set([...data.map((item) => item.name)])];
const newarr = color.map((item) => {
  return {
    value: item,
    // value: item.toLowerCase().split(' ').join('-'),
    label: item,
    checked: false,
  };
});

console.log(newarr);

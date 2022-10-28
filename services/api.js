const API_URL = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  products: {
    getAllProducts: `${API_URL}/products`,
    getProduct: (id) => `${API_URL}/products/${id}`,
    getProductsByCategory: (category) =>
      `${API_URL}/products/category/${category}`,
    getActiveDay: `${API_URL}/products/day`,
    updateProduct: (id) => `${API_URL}/products/${id}`,
    changeDay: (id) => `${API_URL}/products/day/${id}`,
    deleteProduct: (id) => `${API_URL}/products/${id}`,
    createProduct: `${API_URL}/products`,
  },
  checkout: {
    getOrderTime: `${API_URL}/checkout/orderTime`,
    sendWhatsappMessage: `${API_URL}/checkout`,
  },
  user: {
    login: `${API_URL}/users/login`,
  },
};

export default endPoints;

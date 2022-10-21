const API_URL = process.env.NEXT_PUBLIC_API_URL;

const endPoints = {
  products: {
    getAllProducts: `${API_URL}/products`,
    getProduct: (id) => `${API_URL}/products/${id}`,
    getProductsByCategory: (category) =>
      `${API_URL}/products/category/${category}`,
    updateProduct: (id) => `${API_URL}/products/${id}`,
    deleteProduct: (id) => `${API_URL}/products/${id}`,
    createProduct: `${API_URL}/products`,
  },
};

export default endPoints;

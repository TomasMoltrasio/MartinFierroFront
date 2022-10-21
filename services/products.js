import endPoints from "./api";

const getAllProducts = async () => {
  try {
    const response = await fetch(endPoints.products.getAllProducts);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (id) => {
  try {
    const response = await fetch(endPoints.products.getProduct(id));
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      endPoints.products.getProductsByCategory(category)
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, product) => {
  try {
    const response = await fetch(endPoints.products.updateProduct(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await fetch(endPoints.products.deleteProduct(id), {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (product) => {
  try {
    const response = await fetch(endPoints.products.createProduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllProducts,
  getProduct,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
  createProduct,
};

import endPoints from "./api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const user = cookies.get("user");

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
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const changeActiveDay = async (id) => {
  try {
    const response = await fetch(endPoints.products.changeDay(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getActiveDay = async () => {
  try {
    const response = await fetch(endPoints.products.getActiveDay);
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
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
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
        Authorization: `Bearer ${user.token}`,
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
  changeActiveDay,
  getActiveDay,
};

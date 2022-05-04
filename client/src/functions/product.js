import axios from "axios";

export const getProducts = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/product`);
};
export const getProduct = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);
};
export const createProduct = async (category, authtoken) => {
  return await axios.post(`${process.env.REACT_APP_API}/product`, category, {
    headers: {
      authtoken,
    },
  });
};
export const updateProduct = async (slug, category, authtoken) => {
  return await axios.put(
    `${process.env.REACT_APP_API}/product/${slug}`,
    category,
    {
      headers: {
        authtoken,
      },
    }
  );
};
export const removeProduct = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/producty/${slug}`, {
    headers: {
      authtoken,
    },
  });

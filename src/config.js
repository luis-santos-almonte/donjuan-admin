const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const ALLCATEGORY_URL = `${API_BASE_URL}/categorias`;
export const CATEGORY_URL = id => `${API_BASE_URL}/categorias/${id}`;
export const ALLPRODUCT_URL = `${API_BASE_URL}/productos`;
export const PRODUCT_URL = id => `${API_BASE_URL}/productos/${id}`;
export const ALLROOM_URL = `${API_BASE_URL}/habitaciones`;
export const ROOM_URL = id => `${API_BASE_URL}/habitaciones/${id}`;

export default API_BASE_URL;
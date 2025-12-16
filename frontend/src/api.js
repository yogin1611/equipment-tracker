const BASE_URL = "http://localhost:5000/api/equipment";

const handleResponse = async (res) => {
  if (!res.ok) {
    throw new Error("API error");
  }
  return res.json();
};

export const getEquipment = async ({
  search = "",
  type = "",
  status = "",
  sortBy = "",
  order = "asc",
} = {}) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (type) params.append("type", type);
  if (status) params.append("status", status);
  if (sortBy) params.append("sortBy", sortBy);
  if (order) params.append("order", order);

  const res = await fetch(`${BASE_URL}?${params.toString()}`);
  return handleResponse(res);
};

export const addEquipment = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const updateEquipment = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const deleteEquipment = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return handleResponse(res);
};

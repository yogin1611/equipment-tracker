import "./App.css";
import { useEffect, useState } from "react";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import {
  getEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} from "./api";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [selected, setSelected] = useState(null);

  // Filters & sorting
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const loadEquipment = async () => {
    const data = await getEquipment({
      search,
      type: typeFilter,
      status: statusFilter,
      sortBy,
      order,
    });
    setEquipment(data);
  };

  useEffect(() => {
    loadEquipment();
  }, [search, typeFilter, statusFilter, sortBy, order]);

  const handleSubmit = async (formData) => {
    if (selected) {
      await updateEquipment(selected.id, formData);
    } else {
      await addEquipment(formData);
    }
    setSelected(null);
    loadEquipment();
  };

  const handleDelete = async (id) => {
    await deleteEquipment(id);
    loadEquipment();
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setOrder("asc");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Equipment Tracker</h2>

      <EquipmentForm onSubmit={handleSubmit} selected={selected} />

      <hr />

      {/* Filters */}
      <div style={{ marginBottom: "15px" }}>
        <input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </select>
      </div>

      <EquipmentTable
        data={equipment}
        onEdit={setSelected}
        onDelete={handleDelete}
        onSort={handleSort}
        sortBy={sortBy}
        order={order}
      />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function EquipmentForm({ onSubmit, selected }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    status: "",
    lastCleaned: "",
  });

  // If editing, fill form
  useEffect(() => {
    if (selected) {
      setForm(selected);
    }
  }, [selected]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.status) {
      alert("Please fill all required fields");
      return;
    }

    onSubmit(form);

    // Reset after submit
    setForm({
      name: "",
      type: "",
      status: "",
      lastCleaned: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selected ? "Edit Equipment" : "Add Equipment"}</h3>

      <input
        type="text"
        name="name"
        placeholder="Equipment Name"
        value={form.name}
        onChange={handleChange}
      />

      <select name="type" value={form.type} onChange={handleChange}>
        <option value="">Select Type</option>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="">Select Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        name="lastCleaned"
        value={form.lastCleaned}
        onChange={handleChange}
      />

      <br />
      <button type="submit">
        {selected ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default EquipmentForm;

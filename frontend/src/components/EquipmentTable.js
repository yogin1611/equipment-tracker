function EquipmentTable({ data, onEdit, onDelete, onSort, sortBy, order }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <h3>Equipment List</h3>

      <table border="1" cellPadding="8">
        <thead>
  <tr>
    <th onClick={() => onSort("name")}>
      Name {sortBy === "name" ? (order === "asc" ? "↑" : "↓") : ""}
    </th>
    <th onClick={() => onSort("type")}>
      Type {sortBy === "type" ? (order === "asc" ? "↑" : "↓") : ""}
    </th>
    <th onClick={() => onSort("status")}>
      Status {sortBy === "status" ? (order === "asc" ? "↑" : "↓") : ""}
    </th>
    <th onClick={() => onSort("lastCleaned")}>
      Last Cleaned {sortBy === "lastCleaned" ? (order === "asc" ? "↑" : "↓") : ""}
    </th>
    <th>Actions</th>
    </tr>
</thead>


        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No equipment found
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
                <td>{item.lastCleaned}</td>
                <td>
                  <button onClick={() => onEdit(item)}>Edit</button>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EquipmentTable;

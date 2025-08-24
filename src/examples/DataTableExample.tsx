import React, { useState } from 'react';
import { DataTable, Column } from '../components/DataTable/DataTable';

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: false },
];

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

export default function DataTableExample() {
  const [selected, setSelected] = useState<User[]>([]);
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <DataTable
        data={data}
        columns={columns}
        loading={false}
        selectable={true}
        onRowSelect={setSelected}
      />
      <div className="mt-4 text-sm text-gray-700">
        Selected: {selected.map(u => u.name).join(', ') || 'None'}
      </div>
    </div>
  );
}

import React from 'react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = React.useState<T[]>([]);
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortAsc, setSortAsc] = React.useState(true);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortAsc ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortAsc]);

  const handleSelectRow = (row: T) => {
    let updated;
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      // Default to single selection; for multiple, user can extend prop in future
      updated = selectable ? [...selectedRows, row] : [row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  return (
    <div className="w-full overflow-x-auto">
      {loading ? (
        <div className="py-8 text-center text-gray-500">Loading...</div>
      ) : data.length === 0 ? (
        <div className="py-8 text-center text-gray-500">No data available.</div>
      ) : (
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100">
            <tr>
              {selectable && <th className="p-2"></th>}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="p-2 text-left cursor-pointer select-none"
                  {...(col.sortable && sortKey === col.key ? { 'aria-sort': sortAsc ? 'ascending' : 'descending' } : {})}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  {col.title}
                  {col.sortable && (
                    <span className="ml-1">{sortKey === col.key ? (sortAsc ? '▲' : '▼') : '⇅'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                {selectable && (
                  <td className="p-2">
                    <input
                      type="checkbox"
                      aria-label="Select row"
                      checked={selectedRows.includes(row)}
                      onChange={() => handleSelectRow(row)}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="p-2">
                    {row[col.dataIndex] as any}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

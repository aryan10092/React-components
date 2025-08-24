import React from 'react';
import { DataTable, DataTableProps, Column } from '../components/DataTable/DataTable';
import { Meta, StoryObj } from '@storybook/react';

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
  { id: 1, name: 'Aryan', email: 'Aryan@example.com' },
  { id: 2, name: 'Testing', email: 'Testing@example.com' },
  { id: 3, name: 'Rahul', email: 'Rahul@example.com' },
];

const meta: Meta<DataTableProps<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: {
    data,
    columns,
    loading: false,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
    selectable: false,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    loading: false,
    selectable: false,
  },
};

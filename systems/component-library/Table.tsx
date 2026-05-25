import React from 'react';

interface TableColumn<T> {
  header: string;
  key: keyof T;
  render?: (value: any, row: T) => React.ReactNode;
}

interface TableProps<T extends Record<string, any>>
  extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: TableColumn<T>[];
  data: T[];
  striped?: boolean;
}

const Table = React.forwardRef<HTMLTableElement, TableProps<any>>(
  (
    {
      columns,
      data,
      striped = true,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="overflow-x-auto border border-secondary-200 rounded-lg">
        <table
          ref={ref}
          className={`w-full text-left text-sm ${className}`}
          {...props}
        >
          <thead className="bg-secondary-50 border-b border-secondary-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="px-6 py-3 font-semibold text-secondary-900"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-secondary-200 ${
                  striped && rowIndex % 2 === 1 ? 'bg-secondary-50' : ''
                } hover:bg-secondary-100 transition-colors`}
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 text-secondary-900"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';

export default Table;

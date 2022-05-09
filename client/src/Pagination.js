import { Table } from "antd";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      key: 1,
      title: "ID",
      dataIndex: "id",
    },
    {
      key: 2,
      title: "user ID",
      dataIndex: "userId",
      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      key: 3,
      title: "status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In progress"}</p>;
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];
  return (
    <div>
      <header>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            current: page,
            pageSize: pageSize,
            // total: 500,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        ></Table>
      </header>
    </div>
  );
};

export default Pagination;

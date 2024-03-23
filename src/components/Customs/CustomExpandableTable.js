import React from "react";
import { Table } from "antd";

class ExpandableTable extends React.Component {
  render() {
    const { dataSource, columns, expandedColumns } = this.props;
    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <Table
              columns={expandedColumns}
              dataSource={[record.details]} // Solo mostramos los detalles de la fila seleccionada
              pagination={false}
            />
          ),
        }}
      />
    );
  }
}

export default ExpandableTable;

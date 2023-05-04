import { useState, useMemo, useCallback} from 'react';
import DataGrid, { Column, RowDragging, Scrolling, Lookup, Selection } from 'devextreme-react/data-grid';
import dxDataGrid, { RowDraggingStartEvent, Column as DxColumn, RowDraggingAddEvent, Row } from 'devextreme/ui/data_grid';
import { DragTemplateData } from 'devextreme/ui/draggable';
import CustomStore from 'devextreme/data/custom_store';
import { Task, priorities } from './data';

interface GridDemoComponentProps {
  status?: number;
  tasksStore?: CustomStore;
  shouldClearSelection: boolean;
}

function draggedItemsRender(data: DragTemplateData) {
  const draggedItems = data.itemData.map((item: Task, rowIndex: number) => {
      const cellValues = (Object.keys(item) as (keyof Task)[]).map((key: keyof Task, dataIndex: number) =>
          <td key={"key" + dataIndex}>{item[key]}</td>
      );
      return (<tr key={"row" + rowIndex}>{cellValues}</tr>)
  });
  return (<table className="drag-container">
      <tbody>{draggedItems}</tbody>
  </table>);
}

function getVisibleRowValues(rowsData: Task[], grid: dxDataGrid) {
    const visibleColumns = grid.getVisibleColumns();
    const selectedData = rowsData.map((rowData: Task) => {
        const visibleValues: any = {};
        visibleColumns.forEach((column: DxColumn) => {
            if (column.dataField)
                visibleValues[column.dataField] = getVisibleCellValue(column, rowData);
        });
        return visibleValues;
    });
    return selectedData;
}

function getVisibleCellValue(column: DxColumn, rowData: Task) {
    if (column.dataField) {
        const propKey = column.dataField as (keyof Task);
        const cellValue = rowData[propKey];
        return column.lookup && column.lookup.calculateCellValue ? column.lookup.calculateCellValue(cellValue) : cellValue;
    }
}

export default function Grid({ status, tasksStore, shouldClearSelection }: GridDemoComponentProps) {
  const [updateInProgress, setUpdateInProgress] = useState(false);

  const filterExpr = useMemo(() => {
    return ['Status', '=', status];
  }, [status]);

  const dataSource = useMemo(() => {
    return {
      store: tasksStore,
      reshapeOnPush: true,
    };
  }, [tasksStore]);

  const canDrag = useCallback((e: RowDraggingStartEvent) => {
    if (updateInProgress) return false;
    const visibleRows = e.component.getVisibleRows();
    return visibleRows.some((r: Row) => r.isSelected && r.rowIndex === e.fromIndex);
  }, [updateInProgress]);

  const onDragStart = useCallback((e: RowDraggingStartEvent) => {
    const selectedData: Task[] = e.component.getSelectedRowsData();
    e.itemData = getVisibleRowValues(selectedData, e.component);
    e.cancel = !canDrag(e);
  }, [canDrag]);

  const onAdd = useCallback((e: RowDraggingAddEvent) => {
    const fromGrid = e.fromComponent as dxDataGrid;
    const toGrid = e.toComponent as dxDataGrid;
    const selectedRowKeys: (keyof Task)[] = fromGrid.getSelectedRowKeys();
    const updateProcess: (Promise<any> | undefined)[] = [];
    const changes: any[] = [];

    setUpdateInProgress(true);
    fromGrid.beginCustomLoading("Loading...");
    toGrid.beginCustomLoading("Loading...");
    for (let key of selectedRowKeys) {
      const values = { Status: e.toData };
      updateProcess.push(tasksStore?.update(key, values));
      changes.push({
        type: 'update',
        key,
        data: values,
      });
    }
    Promise.all(updateProcess).then(() => {
      tasksStore?.push(changes);
      fromGrid.endCustomLoading();
      toGrid.endCustomLoading();
      setUpdateInProgress(false);

      fromGrid.clearSelection();
      if (!shouldClearSelection) {
        toGrid.selectRows(selectedRowKeys, true);
      }
    });
  }, [tasksStore, shouldClearSelection]);

  return (
    <DataGrid
      dataSource={dataSource}
      height={440}
      showBorders={true}
      filterValue={filterExpr}
    >
      <RowDragging
        data={status}
        group="tasksGroup"
        onAdd={onAdd}
        onDragStart={onDragStart}
        dragRender={draggedItemsRender}
      />
      <Selection mode="multiple" />
      <Scrolling mode="virtual" />
      <Column
        dataField="Subject"
        dataType="string"
      />
      <Column
        dataField="Priority"
        dataType="number"
        width={80}
      >
        <Lookup
          dataSource={priorities}
          valueExpr="id"
          displayExpr="text"
        />
      </Column>
      <Column
        dataField="Status"
        dataType="number"
        visible={false}
      />

    </DataGrid>
  );
};
const typeList = ["String","Number","Date","Boolean", "MyCustomType"]
const defaultType = "String";
const defaultValue = "default string";

$(() => {
  $('#grid-custom-editors').dxDataGrid({
    dataSource: sampleData,
    keyExpr: 'ID',
    onInitNewRow(e) {
      const newKey = Math.max(...sampleData.map(item=>item.ID)) + 1;
      e.data.ID = newKey;
      e.data.Type = defaultType;
      e.data.DynamicValue = defaultValue;
    },
    columns: [
      {
        dataField: "ID",
        allowEditing: false
      },
      {
      dataField: 'DynamicValue',
      dataType: "object",
      editCellTemplate(container, cellInfo) {
        return renderDynamicEditComponent(cellInfo, container);
      },
      cellTemplate(container, cellInfo) {
        const text = getDynamicDisplayText(cellInfo);
        container.text(text)
      }
    }, {
      dataField: "Type",
      setCellValue(newData, type){
        newData.Type = type;
        newData.DynamicValue = null;
      },
      lookup:{
        dataSource: typeList,
      }
    }],
    showBorders: true,
    editing: {
      allowUpdating: true,
      allowAdding: true,
      mode: "form"
    },
  })
  
});

function getDynamicDisplayText(cellInfo) {
  const type = cellInfo.data.Type,
        value = cellInfo.data.DynamicValue;
  const formatterMap = {
        "_default" : "unknown data type",
          "String" : value,
          "Number" : value?.toString(),
         "Boolean" : value?.toString(),
            "Date" : new Date(value).toLocaleDateString(),
    "MyCustomType" : value ? value.Name : ""
  }
  return formatterMap[type || "_default"];
}

function renderDynamicEditComponent(cellInfo, container) {
  const valueType = cellInfo.data.Type;
  const editorMap = {
        "_default" : renderDefault,
          "String" : renderTextBox,
          "Number" : renderNumberBox,
            "Date" : renderDateBox,
         "Boolean" : renderCheckBox,
    "MyCustomType" : renderMyCustomEditor
  }
  const currentComponent = editorMap[valueType || '_default'];
  return currentComponent(cellInfo, container);
}

function renderTextBox(cellInfo, element){
  element.dxTextBox({
    value: cellInfo.value,
    onValueChanged(args) {
      cellInfo.setValue(args.value);
    }
  })
};

function renderNumberBox(cellInfo, element){
  element.dxNumberBox({
    value: cellInfo.value,
    onValueChanged(args) {
      cellInfo.setValue(args.value);
    }
  })
};

function renderDateBox(cellInfo, element){
  element.dxDateBox({
    value: cellInfo.value,
    onValueChanged(args) {
      cellInfo.setValue(args.value);
    }
  })
};

function renderCheckBox(cellInfo, element){
  element.dxCheckBox({
    value: cellInfo.value,
    onValueChanged(args) {
      cellInfo.setValue(args.value);
    }
  })
};

function renderMyCustomEditor(cellInfo, element){
  const dataSource = new DevExpress.data.DataSource({
    store: {
      type: "array",
      key: "ID",
      data: myDropdownData,
    }
  });
  element.dxSelectBox({
    dataSource: dataSource,
    value: cellInfo.value ? cellInfo.value.ID : undefined,
    valueExpr: 'ID',
    displayExpr: 'Name',
    onValueChanged(args){
      const store = args.component.getDataSource().store(),
            newItem = args.component.option("selectedItem");
      cellInfo.setValue(newItem);
    }
  })
}

function renderDefault(cellInfo, element){
  element.text("unknown type");
}
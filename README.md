<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/340354634/22.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1129779)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# How to handle different value types with editCellTemplate for the same column

This example describes a typical scenario where users want to have a dynamic column. For instance a column must handle strings/numbers/dates etc.

DataGrid's column data type is specified in the dataType property. If this property is not set it is auto-predicted based on the first row. So, this causes an issue for most customers where their input data is changed into a different data type. (e.g., input a string, but it gets casted to a date/number)

## Files to Review

- **jQuery**
    - [index.js](jQuery/src/index.js)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [Home.vue](Vue/src/components/HomeContent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
- **NetCore**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Implementation Details

Set your dynamic column's dataType property to "object". Then store data type in some data field, specify the editCellTemplate and check the data.Type field's value to render the related editor. Finally, use the setCellValue callback of the Type column to update your dynamic column and rerender the editCellTemplate 

## Documentation

- [DataGrid.columns.editCellTemplate](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate)
- [DataGrid.columns.cellTemplate](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate)
- [DataGrid.columns.setCellValue](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue)


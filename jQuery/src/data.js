class MyCustomType {
    constructor(props){
      this.ID = props?.ID || 0;
      this.Name = props?.Name || 'John Doe';
    }
}
  
const myDropdownData = [
    {
        ID: 0,
        Name: 'John Doe'
    },
    {
        ID: 1,
        Name: 'Jane Smith'
    }
]
  
const sampleData = [
    {
        ID: 1,
        DynamicValue: "Sample String",
        Type: "String"
    },
    {
        ID: 2,
        DynamicValue: 42,
        Type: "Number"
    },
    {
        ID: 3,
        DynamicValue: new Date(),
        Type: "Date"
    },
    {
        ID: 4,
        DynamicValue: true,
        Type: "Boolean"
    },
    {
        ID: 5,
        DynamicValue: new MyCustomType(),
        Type: "MyCustomType"
    }
]
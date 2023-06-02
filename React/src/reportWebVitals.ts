import { ReportHandler } from 'web-vitals';

function reportWebVitals(onPerfEntry?: ReportHandler): void {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }).catch((error) => console.log(error)); // eslint-disable-line no-console
  }
}

export default reportWebVitals;

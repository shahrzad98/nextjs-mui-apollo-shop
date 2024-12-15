export const printPageArea = areaRef => {
  var printContent = areaRef?.current;
  var WinPrint = window.open('', '', 'width=900,height=650');
  WinPrint.document.write(`<div dir="rtl">${printContent.innerHTML}</div>`);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
};

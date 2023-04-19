import {getLodop} from "../LodopFuncs";
// https://www.runoob.com/w3cnote/px-pt-em-convert-table.html
// 1in(英寸)=2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px
// pt = 1/72(英寸), px = 1/dpi(英寸)
// 因此 pt = px * dpi / 72
// 以 Windows 下的 96dpi 来计算，1 pt = px * 96/72 = px * 4/3


export const System = {
    // 打印code128条码

    printName: (code)=> {
        let LODOP = getLodop()//调用getLodop获取LODOP对象
        // 设置打印机名称
        LODOP.SET_PRINTER_INDEXA("ZDesigner GK888t")
        let str = LODOP.GET_PRINTER_NAME('1:PrintQuality');
        console.log("%c printName🚀", "color: red;font-size: 18px", str);
    }
}

import {getLodop} from "../LodopFuncs";
// 1in(英寸)=2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px

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

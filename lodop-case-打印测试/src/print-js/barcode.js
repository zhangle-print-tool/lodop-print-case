import {getLodop} from "../LodopFuncs";
// 1in(英寸)=2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px

export const Barcode = {

    // 打印code128条码
    code128: (code)=> {

        let LODOP = getLodop()//调用getLodop获取LODOP对象
        // 设置打印机名称
        LODOP.SET_PRINTER_INDEXA("ZDesigner GK888t")

        LODOP.PRINT_INIT("")
        // 💥特殊配置 start
        LODOP.PRINT_INITA('1.3mm','-0.1mm');  // LODOP.PRINT_INITA('1.1mm','-0.4mm');
        LODOP.ADD_PRINT_RECT("0","0","68mm","28.5mm",0,3);  // ADD_PRINT_RECT(Top, Left, Width, Height,intLineStyle, intLineWidth)
        // 💥特殊配置 end

        // LODOP.SET_PRINT_STYLEA(0,'ShowBarText',false)   //  文本是否显示
        // LODOP.SET_PRINT_STYLEA(0,'AlignJustify',3)  //  barcode条码文字”靠齐方式

        // LODOP.SET_PRINT_STYLEA(2,'FontName', '华文彩云')  //  barcode条码文字”靠齐方式
        LODOP.ADD_PRINT_BARCODE('2mm','2mm','60mm','10mm','128A','41345/BQAD1A1QY00001')  // ADD_PRINT_BARCODE(Top, Left,Width, Height, CodeType, CodeValue)
        LODOP.SET_PRINT_STYLEA(0,'ShowBarText',false)   //  文本是否显示
        // LODOP.SET_PRINT_STYLEA(0,'AlignJustify',2)  //  barcode条码文字”靠齐方式
        // LODOP.SET_PRINT_STYLEA(0,'FontName', '华文彩云')  //  barcode条码文字”靠齐方式

        // LODOP.PRINT_DESIGN()
        LODOP.PRINT()
    }
}

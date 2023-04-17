import {getLodop} from "../LodopFuncs";
export const PrintImage = {
    // 1in(英寸)=2.54cm(厘米)=25.4mm(毫米)=72pt(磅)=96px
    // 打印code128条码
    printImage: (code) => {
        let LODOP = getLodop()//调用getLodop获取LODOP对象
        // 设置打印机名称
        LODOP.SET_PRINTER_INDEXA("ZDesigner GK888t")

        LODOP.PRINT_INIT("")
        // 💥特殊配置 start
        LODOP.PRINT_INITA('1.3mm', '-0.1mm');  // LODOP.PRINT_INITA('1.1mm','-0.4mm');
        LODOP.ADD_PRINT_RECT("0", "0", "68mm", "28.5mm", 0, 3);  // ADD_PRINT_RECT(Top, Left, Width, Height,intLineStyle, intLineWidth)
        // 💥特殊配置 end

        let strBASE64Code = `data:image/jpg;base64,
/9j/4AAQSkZJRgABAgIAAAAAAAD//gAeQUNEIFN5c3RlbXMgRGlnaXRhbCBJbWFnaW5nAP/AABEI
AEIAYwMBIgACEQEDEQH/2wCEABQNDxEPDBQREBEWFRQXHjIgHhsbHj0rLiQySD9MS0c/RkRQWnNh
UFVsVkRGZIhlbHZ6gIKATWCNl4x9lnN+gHsBHyEhLSctWDAwWLl7aXu5ubm5ubm5ubm5ubm5ubm5
ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5uf/EAHkAAQADAQEBAAAAAAAAAAAAAAAD
BAUCAQYQAAICAgAFAgQDBwUAAAAAAAECAAMEEQUSIUFREzEiYXGBFDJCBiORobHB0VNykuHwAQEB
AQEAAAAAAAAAAAAAAAAAAgEDEQEBAQEBAAMAAAAAAAAAAAAAARECURIxQf/aAAwDAQACEQMRAD8A
+yiIgInk4stCnQ+JvAgdyNr0H5dsflIbXA+K5wo7Azmu2qwlUYEjrrWjqB22RZ2RR9TImzLl/Sh+
xnVhAEo5FoEC0vE9H46v+JlmnMotOg+m8N0mGOaw9JMMZiOsDeiZFGRdikBtvX4PuPpNSq1Lqw9b
BlPeB1ERA9iJTycglvSrP+4j+kDu6/ZKVnr3bxM7OsxMWotbUjOfYa6mT3WrjUc5GyeijyZm24L3
g35DHmPXqdBRKk1luK9V19p5lJrTsAdn+P8AaaWM93MLvT9RAvINNonyRv3HSVMDFe12X1GalTvm
+Xgf+6TSucVpoaAA0AO03q/hEFubW+1BIce6MNEfaVRzXWaEiy2W48rDm8fL6eJDZa+MPRFmwRtm
/Uo8b+cmTWtH8XjYxKDmtsHuKxvX1PsJE/GdflxT97BMay9iOVBpR7ASAu2+pl/GJ1sX8UutQhQl
W+4PMZ1wbP8AwmQK2Y+i50d9j5mMrmSKdysjNffRIOHMzcPoaz8xQb3LHScVqXEcr0VFSH94/fwJ
WxhsgSHJYNxC7mPVWA+2pPjuqsIFHJyUt4siOdVoDr7f9ybJrOfYtFbgoPisYb19we/9YowfVJJ9
MKrELbvZI34lxzVjU8lY0B1PknyZW+MxyxqxqRXWNKv85l5WSWJnmXl7JlFrOZpjUyuERrn9lG9e
ZnF2tcs56k7b6yXMt5itCnovVvr2kI6S+YmvXOh0kDHrJGBY6A3L2DwPLyiGKciHu3SVbjJFClHs
cIilmPYCfQcJ4NzMLL+oHYew/wAzSwODUYifEec9x7CaQAA0AAB2nO9eKwA0AANARESWsjjnDrrS
MvDIF6jTIfZx/kTFTihqBXIRqbAO46b+s+ylPM4bj5Y+NdN5ExUz6rIpyj6QFbhlA10O5Dk5bkEG
c5n7L2oS+HZyt5Q6mRdjcbxX1cllqeQm4lbefEt1pJMh/EcnXpvsJC5y2OjVdvwKyP7T2rhnEcht
VYd5B7ldD+cvHPXVR2CxOyfcy9gcOvzrNVp8I92PsJocJ/ZmxCLM5wB/pod/xM+lqrSqsJWgVR7A
CbevGYo4HB8bEAYqLLB+ojoPoJoT2JCiIiB5ERAREQEREBERAREQEREBERAREQP/2Q==`

        LODOP.ADD_PRINT_IMAGE('2mm', '2mm', "20mm", "20mm", strBASE64Code); // ADD_PRINT_IMAGE(Top,Left,Width,Height,strHtmlContent)

        LODOP.PRINT()
    }
}





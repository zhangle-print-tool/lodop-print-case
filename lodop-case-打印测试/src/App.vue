<template>
    <h1>Lodop打印</h1>
    <div>
        <button class="print-btn" v-on:click="btnClickPrint">直接打印</button>
        <button class="print-btn" v-on:click="btnClickPrintA">打印预览</button>
        <button class="print-btn" v-on:click="btnClickPrintB">打印维护</button>
        <button class="print-btn" v-on:click="btnClickPrintC">打印设计</button>
        <br>
        <div style="margin-top: 50px">
            <button class="print-btn" v-on:click="code128()">打印条码</button>
        </div>

        <br>
        <div style="margin-top: 50px">
            <button class="print-btn" v-on:click="printImage()">打印图片</button>
        </div>

        <br>
        <div style="margin-top: 50px">
            <button class="print-btn" v-on:click="printName()">系统相关信息</button>
        </div>
    </div>
</template>

<script>
// 样例说明
// http://www.c-lodop.com/LodopDemo.html
import { getLodop } from './LodopFuncs.js'
import {Barcode} from "./print-js/barcode"; //导入模块
import {PrintImage} from "./print-js/printImage.js"; //导入模块
import {System} from "./print-js/system";

export default {
    name: 'App',
    mounted() {
    },
    methods: {
        //  直接打印
        btnClickPrint() {
            for (let i = 0; i < 1; i++) {
                let LODOP = getLodop()//调用getLodop获取LODOP对象
                // LODOP.SET_PRINTER_INDEXA("TSC TE244")
                LODOP.SET_PRINTER_INDEXA("ZDesigner GK888t")

                LODOP.PRINT_INIT("")
                // Top,Left,Width,Height,strPrintName
                // 💥 特殊配置

                // LODOP.PRINT_INITA('1.1mm','-0.4mm');
                LODOP.PRINT_INITA('1.3mm','-0.1mm');

                // ADD_PRINT_RECT(Top, Left, Width, Height,intLineStyle, intLineWidth)
                LODOP.ADD_PRINT_RECT("0","0","68mm","28.5mm",0,3);
                // 💥 特殊配置

                LODOP.SET_PRINT_STYLE("FontSize",12);
                LODOP.SET_PRINT_STYLE("FontName",'Arial');
                LODOP.SET_PRINT_STYLE("Bold",1);
                LODOP.ADD_PRINT_TEXT(0, 0, 260, 39, "121231231cccc")

                //
                LODOP.SET_PRINT_STYLE("FontSize",20);
                LODOP.SET_PRINT_STYLE("FontName", '华文彩云');
                LODOP.SET_PRINT_STYLE("Bold",1);
                LODOP.ADD_PRINT_TEXT(70, 80, 260, 39, "中文M123ABCA")

                LODOP.PRINT()
            }
        },
        //  打印预览
        btnClickPrintA() {
            let LODOP = getLodop()//调用getLodop获取LODOP对象
            LODOP.PRINT_INIT("")
            LODOP.SET_PRINT_STYLE("FontSize",12);
            LODOP.SET_PRINT_STYLE("FontName",'Arial');
            LODOP.SET_PRINT_STYLE("Bold",1);
            LODOP.ADD_PRINT_TEXT(0, 0, 260, 39, "中文M123ABCA")

            LODOP.SET_PRINT_STYLE("FontSize",20);
            LODOP.SET_PRINT_STYLE("FontName", '华文彩云');
            LODOP.SET_PRINT_STYLE("Bold",1);
            LODOP.ADD_PRINT_TEXT(70, 80, 260, 39, "中文M123ABCA")

            LODOP.PREVIEW()
        },
        // 打印维护
        btnClickPrintB() {
            let LODOP = getLodop()//调用getLodop获取LODOP对象
            LODOP.PRINT_INIT("")

            LODOP.ADD_PRINT_TEXT(50, 51, 260, 39, "打印内容")
            LODOP.PRINT_SETUP()
        },
        //  打印设计
        btnClickPrintC() {
            let LODOP = getLodop()//调用getLodop获取LODOP对象
            LODOP.PRINT_INIT("")

            LODOP.ADD_PRINT_TEXT(50, 51, 260, 39, "打印内容")
            LODOP.PRINT_DESIGN()
        },

        // 打印条码相关案例
        ...Barcode,
        ...PrintImage,
        ...System
    }
}
</script>

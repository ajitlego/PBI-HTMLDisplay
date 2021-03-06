/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    "use strict";
    export class HTMLDisplay implements IVisual {
        private target: HTMLElement;
        private contentDiv: HTMLElement;

        constructor(options: VisualConstructorOptions) {
            //console.log('Visual constructor', options);
            this.target = options.element;
            if (typeof document !== "undefined") {
                const new_div: HTMLElement = document.createElement("div");
                this.target.appendChild(new_div);
                this.contentDiv = new_div;
            }
        }

        public update(options: VisualUpdateOptions) {
            //console.log('Visual update', options);
            const dataView: DataView = options
                && options.dataViews
                && options.dataViews[0];
            const HTMLString = dataView.single.value.toString();
            if (typeof this.contentDiv !== "undefined") {
                this.contentDiv.innerHTML = HTMLString;
            }
        }

        /** 
         * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the 
         * objects and properties you want to expose to the users in the property pane.
         * 
         */
        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
            let objectEnumeration: VisualObjectInstance[] = [];
            return objectEnumeration;
        }
    }
}
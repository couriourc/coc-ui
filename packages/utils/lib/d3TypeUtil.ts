import * as d3 from "d3";

/*增强版本的 d3 链式调用*/
export function _d3<T extends Element, Selection extends d3.Selection<d3.BaseType, any, d3.BaseType, any>>(deSelection: Selection)
    : Selection & {
    [key in keyof d3.BaseType]?: (attr?: number | string | Function) => Selection | number | string | boolean | unknown
} {
    return new Proxy(deSelection, {
        get(target, key: keyof HTMLElement) {
            //
            if (target[key]) {
                return target[key];
            }
            return (fn) => !!fn ? _d3(deSelection.attr(key, fn)) : deSelection.attr(key);
        }
    });

}

// 计算文本宽度

import * as d3 from "d3";

export const getTextBox = (
    text: string,
    fontWeight = 'normal',
    fontSize = '14px',
    fontFamily = '黑体') => {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `${fontWeight} ${fontSize} ${fontFamily}`;
    return context.measureText(text);
};
export const getTextWidth = (
    text: string,
    fontWeight = 'normal',
    fontSize = '14px',
    fontFamily = '黑体'
) => {
    const metrics = getTextBox(text, fontWeight, fontSize, fontFamily);
    return Math.ceil(metrics.width);
};

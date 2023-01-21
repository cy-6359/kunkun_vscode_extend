'use strict';
import * as vscode from 'vscode';
import Asset from './asset';

export class ReminderView {
    private static panel: vscode.WebviewPanel | undefined;

    public static show(context: vscode.ExtensionContext, ) {
        let asset: Asset = new Asset(context);

        const imagePath = asset.getImageUri();
        const title = asset.getTitle();

        if (this.panel) {
            this.panel.webview.html = this.generateHtml(imagePath, title);
            this.panel.reveal();
        } else {
            this.panel = vscode.window.createWebviewPanel("cxk", "坤坤の关怀", vscode.ViewColumn.Two, {
                enableScripts: true,
                retainContextWhenHidden: true,
            });
            this.panel.webview.html = this.generateHtml(imagePath, title);
            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }

    protected static generateHtml(imagePath: vscode.Uri|string, title: string): string {
        let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>坤坤の关怀~</title>
        </head>
        <body>
            <div><h1 style="width:70%;margin:0 auto;margin-top:5rem;text-align:center">坤坤提醒您，小哥哥写代码两小时啦，休息一下吧~</h1></div>
            <div style="width:70%;margin:0 auto;margin-top:2rem;">
                 <img style="width:100%" src="${imagePath}">
        
            </div>
        </body>
        </html>
        <script>
        alert('ss')
    
        </script>
        `;

        return html;
    }
}
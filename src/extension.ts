'use strict';
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
	// vscode.window.showInformationMessage('Hello 小黑粉!');
	// console.log('Hello 小黑粉!');

    const scheduler = new Scheduler(context);
    scheduler.start();

    context.subscriptions.push(vscode.commands.registerCommand('cxk.showReminderView', () => {
        ReminderView.show(context);
    }));
}

export function deactivate() {
}
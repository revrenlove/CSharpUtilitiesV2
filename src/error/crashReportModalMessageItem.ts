import * as vscode from 'vscode';

export interface CrashReportModalMessageItem extends vscode.MessageItem {
    value: boolean;
}

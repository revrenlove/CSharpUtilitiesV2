import * as os from "node:os";
import * as vscode from "vscode";
import { CrashReportModalMessageItem } from "./crashReportModalMessageItem";
import { GithubIssuePayload } from "./githubIssuePayload";
import { getExtensionVersion } from "../utilities/extensionOperations";
import { NewGithubIssueUrl } from "../constants";

async function errorCallback(e: Error): Promise<void> {

    const errorMessageResult = await showCrashReportModal();

    if (!errorMessageResult) {
        return;
    }

    const payload: GithubIssuePayload = {
        title: "BUG REPORT - Change this, please.",
        body: formatIssueBody(e),
        labels: "bug",
    };

    const queryString = new URLSearchParams(Object.entries(payload)).toString();

    const populatedNewIssueUri = vscode.Uri.parse(`${NewGithubIssueUrl}?${queryString}`);

    void vscode.env.openExternal(populatedNewIssueUri);
}

async function showCrashReportModal(): Promise<boolean> {

    const messageItems: CrashReportModalMessageItem[] = [
        {
            title: "Yes",
            value: true,
        },
        {
            title: "No",
            isCloseAffordance: true,
            value: false,
        },
    ];

    const message = "An Error Occurred. Would you like to create an issue on GitHub?";

    const errorMessageResult = await vscode.window.showErrorMessage(message, ...messageItems);

    if (!errorMessageResult?.value) {
        return false;
    }

    return true;
}

function formatIssueBody(e: Error): string {

    let body = "Please describe the steps that caused this error:\n\n";

    body += "=================================\n\n";

    body += `Extension Version: ${getExtensionVersion() ?? "Not available"}\n`;
    body += `Platform: ${os.platform()}\n`;
    body += `Release: ${os.release()}\n`;
    body += `Version: ${os.version() ? os.version() : "Not available"}\n\n`;

    body += "=================================\n\n";

    body += `Error Name:\n${e.name}\n\n`;

    body += `Error Message:\n${e.message}\n\n`;

    body += `Stack Trace:\n${e.stack ? e.stack : ""}`;

    return body;
}

export { errorCallback };

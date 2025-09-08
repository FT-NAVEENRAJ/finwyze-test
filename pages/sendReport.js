import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// ---- CONFIG ----
const REPORT_DIR = "playwright-report"; // change if your config uses a different folder
const EMAIL_USER = "naveenraj@fintuple.com";
const EMAIL_PASS = "c29ed8ec-5514-44c7-922e-80b5c6f5fc2e"; // use Office 365 App Password
const EMAIL_TO = "qa-team@example.com, dev-team@example.com";

// ---- FUNCTION TO GET LATEST REPORT ----
function getLatestReportFile(dir) {
  const reportPath = path.join(dir, "index.html");
  if (fs.existsSync(reportPath)) {
    return reportPath;
  }
  throw new Error("❌ No report found. Run tests first: npx playwright test");
}

// ---- SEND EMAIL ----
async function sendReport() {
  const reportPath = getLatestReportFile(REPORT_DIR);

  const transporter = nodemailer.createTransport({
    service: "hotmail", // Office 365/Outlook
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_TO,
    subject: "📊 Playwright Test Report",
    html: `<h2>Playwright Test Execution</h2><p>Report is attached.</p>`,
    attachments: [
      {
        filename: "playwright-report.html",
        path: reportPath,
      },
    ],
  };

  await transporter.sendMail(mailOptions);
  console.log("✅ Report sent successfully!");
}

sendReport().catch((err) => {
  console.error("❌ Failed to send report:", err.message);
});

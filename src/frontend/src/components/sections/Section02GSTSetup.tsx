import TallyPath from "../TallyPath";

const gstSteps = [
  {
    step: 1,
    action: "Access Features",
    detail:
      'From Gateway of Tally, press F11 (Features) or click on "Features" from the top menu.',
  },
  {
    step: 2,
    action: "Enable GST",
    detail:
      'Under Accounting Features, find "Enable Goods and Services Tax (GST)" and set it to YES.',
  },
  {
    step: 3,
    action: "Set GST Details",
    detail:
      'Click on "Set/Alter GST Details" which will appear after enabling GST.',
  },
  {
    step: 4,
    action: "Enter State",
    detail: "State: Gujarat (will auto-fill State Code: 24)",
  },
  {
    step: 5,
    action: "Registration Type",
    detail:
      "Registration Type: Regular (since Vasudev Textile is a regular GST taxpayer)",
  },
  {
    step: 6,
    action: "Enter GSTIN",
    detail:
      "GSTIN/UIN: 24AAABV1234C1ZX (replace with actual GSTIN after registration)",
  },
  {
    step: 7,
    action: "Applicable From Date",
    detail: "Applicable From: 01-04-2024 (GST registration effective date)",
  },
  {
    step: 8,
    action: "Enable e-Way Bill",
    detail:
      "Enable Generation of e-Way Bill: YES (required for goods movement > ₹50,000)",
  },
  {
    step: 9,
    action: "e-Invoice Setting",
    detail:
      "Enable e-Invoice: YES if annual turnover > ₹10 crore (else NO for small businesses)",
  },
  {
    step: 10,
    action: "Set Filing Frequency",
    detail:
      "GST Filing Frequency: Monthly (GSTR-1 by 11th, GSTR-3B by 20th of next month)",
  },
  {
    step: 11,
    action: "Save Settings",
    detail: "Press Ctrl+A to save all GST configuration settings.",
  },
];

const gstConfig = [
  { field: "State", value: "Gujarat", note: "State Code: 24" },
  { field: "GSTIN/UIN", value: "24AAABV1234C1ZX", note: "15-digit GST number" },
  { field: "Registration Type", value: "Regular", note: "Not Composition" },
  {
    field: "Applicable From",
    value: "01-04-2024",
    note: "Financial year start",
  },
  { field: "e-Way Bill", value: "Yes", note: "For goods > ₹50,000" },
  { field: "e-Invoice", value: "Yes/No", note: "If turnover > ₹10 crore" },
  {
    field: "GSTR-1 Frequency",
    value: "Monthly",
    note: "Due by 11th of next month",
  },
  {
    field: "GSTR-3B Frequency",
    value: "Monthly",
    note: "Due by 20th of next month",
  },
  {
    field: "Cotton Sarees < ₹1000 Rate",
    value: "5% GST",
    note: "CGST 2.5% + SGST 2.5%",
  },
  {
    field: "Cotton Sarees > ₹1000 Rate",
    value: "12% GST",
    note: "CGST 6% + SGST 6%",
  },
  {
    field: "Interstate Tax Rate",
    value: "5% or 12% IGST",
    note: "No CGST/SGST for interstate",
  },
];

const gstinFormat = [
  { pos: "1-2", char: "24", meaning: "State Code (Gujarat = 24)" },
  { pos: "3-12", char: "AAABV1234C", meaning: "PAN Number of the business" },
  { pos: "13", char: "1", meaning: "Registration count (1st registration)" },
  { pos: "14", char: "Z", meaning: "Default character (always Z)" },
  { pos: "15", char: "X", meaning: "Check digit (auto-generated)" },
];

export default function Section02GSTSetup() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > F11 (Features) > Enable GST: Yes > Set/Alter GST Details" />

      <div className="bg-amber-light border border-amber rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          📋 GSTIN Format for Gujarat
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead className="bg-amber/20">
              <tr>
                <th className="text-left px-3 py-2 font-semibold border-b border-amber/30">
                  Position
                </th>
                <th className="text-left px-3 py-2 font-semibold border-b border-amber/30">
                  Character
                </th>
                <th className="text-left px-3 py-2 font-semibold border-b border-amber/30">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {gstinFormat.map((row) => (
                <tr key={row.pos} className="border-b border-amber/20">
                  <td className="px-3 py-2 font-mono font-bold text-primary">
                    {row.pos}
                  </td>
                  <td className="px-3 py-2 font-mono font-bold">{row.char}</td>
                  <td className="px-3 py-2 text-text-body">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm font-semibold">
          Example GSTIN:{" "}
          <code className="bg-white border border-amber/30 px-2 py-0.5 rounded text-primary">
            24AAABV1234C1ZX
          </code>
        </p>
      </div>

      <h3 className="text-base font-bold text-foreground">
        Step-by-Step GST Configuration
      </h3>
      <div className="space-y-3">
        {gstSteps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">{s.step}</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground">
                {s.action}
              </p>
              <p className="text-sm text-text-body mt-0.5">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-8">
        GST Configuration — Reference Table
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Field
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Value
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Note
              </th>
            </tr>
          </thead>
          <tbody>
            {gstConfig.map((row, i) => (
              <tr
                key={row.field}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                data-ocid={`gst-config.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/50">
                  {row.field}
                </td>
                <td className="px-4 py-2.5 text-primary font-medium border-b border-border/50">
                  {row.value}
                </td>
                <td className="px-4 py-2.5 text-muted-foreground border-b border-border/50 text-xs">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg bg-success-light border border-success/30 p-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          ✅ GST Enabled Successfully
        </p>
        <p className="text-sm text-text-body">
          After enabling GST, all purchase and sales vouchers will automatically
          show GST fields. Input Tax Credit will be tracked, and GST reports
          (GSTR-1, GSTR-3B) will be available under Display More Reports &gt;
          GST Reports.
        </p>
      </div>
    </div>
  );
}

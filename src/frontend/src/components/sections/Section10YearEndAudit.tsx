import TallyPath from "../TallyPath";

const auditSteps = [
  {
    step: 1,
    title: "Physical Stock Verification",
    desc: "On 31st March, count all physical stock and compare with Tally stock. Pass adjustment entry for any difference.",
    path: "Vouchers > F7 Journal: Dr/Cr Closing Stock A/c & Trading A/c",
  },
  {
    step: 2,
    title: "Depreciation Entry",
    desc: "Calculate and pass depreciation for all fixed assets using WDV method (Written Down Value). See depreciation table below.",
    path: "Vouchers > F7 Journal: Dr Depreciation Expense A/c, Cr Asset A/c",
  },
  {
    step: 3,
    title: "Outstanding Expenses",
    desc: "Record expenses incurred but not yet paid (accruals): salary payable, rent payable, electricity accrual.",
    path: "Vouchers > F7 Journal: Dr Expense A/c, Cr Outstanding/Payable A/c",
  },
  {
    step: 4,
    title: "Prepaid Expenses Adjustment",
    desc: "Expenses paid in advance for next year must be adjusted. Example: insurance paid for April-May 2025.",
    path: "Vouchers > F7 Journal: Dr Prepaid Expense A/c, Cr Expense A/c",
  },
  {
    step: 5,
    title: "Bank Reconciliation Statement (BRS)",
    desc: "Compare bank statement with Tally bank book. Identify uncleared cheques, bank charges not recorded, interest credits.",
    path: "Display More Reports > Account Books > Bank Books > Reconcile",
  },
  {
    step: 6,
    title: "Sundry Debtors & Creditors Confirmation",
    desc: "Get balance confirmation from major customers and suppliers. Match with Tally ledger balances.",
    path: "Display More Reports > Account Books > Ledger Account",
  },
  {
    step: 7,
    title: "Trial Balance Verification",
    desc: "Check that all debit totals equal credit totals. No unposted entries should remain.",
    path: "Gateway of Tally > Display More Reports > Trial Balance",
  },
  {
    step: 8,
    title: "Trading Account Review",
    desc: "Calculate Gross Profit: Opening Stock + Purchases − Closing Stock = Cost of Goods Sold. Sales − COGS = Gross Profit.",
    path: "Display More Reports > Profit & Loss Account > F1 Detailed",
  },
  {
    step: 9,
    title: "Profit & Loss Account",
    desc: "Net Profit = Gross Profit + Other Income − All Indirect Expenses. Review thoroughly.",
    path: "Display More Reports > Profit & Loss Account",
  },
  {
    step: 10,
    title: "Balance Sheet Verification",
    desc: "Total Assets must equal Total Liabilities + Capital. Check all schedule-wise details.",
    path: "Gateway of Tally > Display More Reports > Balance Sheet",
  },
  {
    step: 11,
    title: "Audit Trail Review",
    desc: "Review all alterations and changes made to vouchers during the year. Check for unauthorized modifications.",
    path: "Gateway of Tally > Display More Reports > Audit & Analysis > Audit Trail",
  },
  {
    step: 12,
    title: "Close Financial Year",
    desc: "After audit is complete, create next year's books. Tally carries forward closing balances automatically.",
    path: "Gateway of Tally > Company > Split Company Data",
  },
];

const depreciationTable = [
  {
    asset: "Screen Printing Machinery",
    opening: "2,50,000",
    rate: "15%",
    depreciation: "37,500",
    closing: "2,12,500",
  },
  {
    asset: "Furniture & Fixtures",
    opening: "35,000",
    rate: "10%",
    depreciation: "3,500",
    closing: "31,500",
  },
  {
    asset: "Delivery Van (Vehicle)",
    opening: "4,50,000",
    rate: "20%",
    depreciation: "90,000",
    closing: "3,60,000",
  },
  {
    asset: "Computers & Equipment",
    opening: "45,000",
    rate: "40%",
    depreciation: "18,000",
    closing: "27,000",
  },
  {
    asset: "Old Machinery",
    opening: "1,20,000",
    rate: "15%",
    depreciation: "18,000",
    closing: "1,02,000",
  },
];

const totalDepreciation = depreciationTable.reduce(
  (s, r) => s + Number(r.depreciation.replace(/,/g, "")),
  0,
);

const pnlSummary = [
  { item: "Opening Stock", amount: "9,57,000", type: "Dr" },
  { item: "Add: Purchases (Net)", amount: "28,40,500", type: "Dr" },
  { item: "Less: Closing Stock", amount: "(12,45,000)", type: "" },
  { item: "Cost of Goods Sold", amount: "25,52,500", type: "Dr" },
  { item: "Total Sales", amount: "38,72,000", type: "Cr" },
  { item: "Gross Profit", amount: "13,19,500", type: "Cr" },
  { item: "Less: Indirect Expenses", amount: "(8,42,050)", type: "" },
  { item: "Net Profit (Before Tax)", amount: "4,77,450", type: "Cr" },
];

export default function Section10YearEndAudit() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > Display More Reports > Trial Balance" />

      <div className="bg-amber-light border border-amber rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          🗓️ Year-End Checklist for Vasudev Textile (31 March 2025)
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
          {[
            "Stock Verification",
            "Depreciation",
            "Outstanding Expenses",
            "Prepaid Adjustments",
            "BRS",
            "Trial Balance",
            "P&L Account",
            "Balance Sheet",
            "Audit Trail",
            "GSTR-9 Filing",
            "Income Tax Return",
            "Books Closed",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs">
              <span className="w-4 h-4 rounded border border-amber flex-shrink-0 flex items-center justify-center text-amber">
                ✓
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-base font-bold text-foreground">
        Year-End Audit Steps
      </h3>
      <div className="space-y-3">
        {auditSteps.map((s) => (
          <div
            key={s.step}
            className="p-4 rounded-lg border border-border bg-card"
          >
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xs font-bold">{s.step}</span>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-foreground">
                  {s.title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                <code className="text-xs text-primary bg-tally-bg border border-tally-border rounded px-2 py-0.5 inline-block mt-1.5">
                  {s.path}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        Depreciation Schedule — FY 2024-25 (WDV Method)
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Asset Name
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Opening Value (₹)
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                Rate
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Depreciation (₹)
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Closing Value (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            {depreciationTable.map((row, i) => (
              <tr
                key={row.asset}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`depreciation.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                  {row.asset}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  ₹{row.opening}
                </td>
                <td className="px-4 py-2.5 text-center border-b border-border/40">
                  <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    {row.rate}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-right font-mono font-bold text-red-600 border-b border-border/40">
                  ₹{row.depreciation}
                </td>
                <td className="px-4 py-2.5 text-right font-mono font-bold text-primary border-b border-border/40">
                  ₹{row.closing}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-primary/5">
            <tr>
              <td colSpan={3} className="px-4 py-3 text-right font-bold">
                Total Depreciation:
              </td>
              <td className="px-4 py-3 text-right font-mono font-bold text-red-600">
                ₹{totalDepreciation.toLocaleString("en-IN")}
              </td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        P&L Summary — FY 2024-25
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Particulars
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Amount (₹)
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                Dr/Cr
              </th>
            </tr>
          </thead>
          <tbody>
            {pnlSummary.map((row, i) => (
              <tr
                key={row.item}
                className={
                  row.item.includes("Profit")
                    ? "bg-green-50"
                    : i % 2 === 0
                      ? "bg-card"
                      : "bg-muted/20"
                }
                data-ocid={`pnl.row.${i + 1}`}
              >
                <td
                  className={`px-4 py-2.5 border-b border-border/40 ${row.item.includes("Profit") ? "font-bold text-foreground" : "font-medium text-foreground"}`}
                >
                  {row.item}
                </td>
                <td
                  className={`px-4 py-2.5 text-right font-mono border-b border-border/40 ${row.item.includes("Net Profit") ? "font-bold text-green-700" : ""}`}
                >
                  ₹{row.amount}
                </td>
                <td className="px-4 py-2.5 text-center border-b border-border/40">
                  {row.type && (
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${row.type === "Dr" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}
                    >
                      {row.type}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

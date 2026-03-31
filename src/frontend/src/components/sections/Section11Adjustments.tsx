import TallyPath from "../TallyPath";

const adjustmentTypes = [
  {
    type: "Journal Voucher Adjustment",
    voucherType: "Journal (F7)",
    debit: "Any A/c with error",
    credit: "Correct A/c",
    when: "To correct wrong entries, reclassify expenses",
    steps: [
      "Gateway of Tally > Vouchers > F7 (Journal)",
      "Enter date, narration, debit account, credit account",
      "Press Ctrl+A to save",
    ],
  },
  {
    type: "Debit Note (Purchase Return)",
    voucherType: "Debit Note (Alt+F9)",
    debit: "Supplier A/c",
    credit: "Purchase Return A/c",
    when: "Returning goods to supplier; reduces purchase amount",
    steps: [
      "Gateway of Tally > Vouchers > Alt+F9 (Debit Note)",
      "Select supplier, enter original invoice no.",
      "Add returned items, GST auto-reversed",
      "Press Ctrl+A to save",
    ],
  },
  {
    type: "Credit Note (Sales Return)",
    voucherType: "Credit Note (Alt+F6)",
    debit: "Sales Return A/c",
    credit: "Customer A/c",
    when: "Customer returns goods; reduces sales amount",
    steps: [
      "Gateway of Tally > Vouchers > Alt+F6 (Credit Note)",
      "Select customer, reference original sales bill",
      "Add returned items, quantity, GST auto-reversed",
      "Press Ctrl+A to save",
    ],
  },
  {
    type: "Contra Entry",
    voucherType: "Contra (F4)",
    debit: "Bank A/c (for deposit)",
    credit: "Cash A/c",
    when: "Cash deposit to bank OR cash withdrawal from bank",
    steps: [
      "Gateway of Tally > Vouchers > F4 (Contra)",
      "For deposit: Dr Bank A/c, Cr Cash A/c",
      "For withdrawal: Dr Cash A/c, Cr Bank A/c",
      "Enter amount and press Ctrl+A",
    ],
  },
  {
    type: "TDS Adjustment",
    voucherType: "Journal (F7)",
    debit: "TDS Payable A/c",
    credit: "Income Tax Dept A/c",
    when: "Depositing TDS deducted to government before 7th of next month",
    steps: [
      "Deduct TDS at time of payment (auto in Tally if TDS enabled)",
      "F11 > Enable TDS: Yes",
      "Create TDS ledger under 'Duties & Taxes'",
      "Pay TDS via F5 Payment: Dr TDS Payable, Cr Bank A/c",
    ],
  },
  {
    type: "GST ITC Reversal",
    voucherType: "Journal (F7)",
    debit: "GST Expense A/c",
    credit: "CGST/SGST Input A/c",
    when: "When ITC is not eligible (blocked credits, exempt supplies)",
    steps: [
      "Identify ineligible ITC as per Section 17(5)",
      "Journal: Dr GST Reversal A/c, Cr CGST Input A/c, Cr SGST Input A/c",
      "Report in GSTR-3B Table 4(B)",
    ],
  },
  {
    type: "RCM (Reverse Charge Mechanism)",
    voucherType: "Journal (F7)",
    debit: "RCM Input Credit A/c",
    credit: "RCM GST Payable A/c",
    when: "Services received from unregistered persons (job work, transport)",
    steps: [
      "Identify RCM applicable transactions",
      "Pass journal entry: Dr RCM Input, Cr RCM Payable",
      "Pay RCM via cash ledger (no ITC setoff for payment)",
      "Claim ITC in next month's GSTR-3B",
    ],
  },
  {
    type: "Department / Cost Centre",
    voucherType: "Any Voucher",
    debit: "Expense A/c (allocated)",
    credit: "Cash / Bank",
    when: "Tracking expenses and income by department for better analysis",
    steps: [
      "F11 > Accounting Features > Enable Cost Centres: Yes",
      "Gateway of Tally > Accounts Info > Cost Centres > Create",
      "Create: Production, Sales, Admin, Accounts departments",
      "In vouchers, allocate amount to specific cost centre",
    ],
  },
];

const departments = [
  {
    dept: "Production",
    examples: "Wages, Electricity, Dye/Chemical, Machine maintenance, Job work",
  },
  {
    dept: "Sales",
    examples:
      "Salary (sales staff), Vehicle expenses, Advertising, Discount allowed",
  },
  {
    dept: "Admin",
    examples:
      "Office rent, Printing & stationery, Telephone, Professional fees",
  },
  {
    dept: "Accounts",
    examples: "Bank charges, CA fees, Audit fees, TDS filing, GST returns",
  },
];

export default function Section11Adjustments() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > Vouchers > (Select appropriate voucher type)" />

      <div className="bg-amber-light border border-amber rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          🔄 Types of Adjustments in Tally Prime
        </p>
        <p className="text-sm text-text-body">
          Adjustments are entries that correct, reallocate, or reverse existing
          accounting records. Each type of adjustment uses a specific voucher
          type in Tally Prime.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border mb-6">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                #
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Adjustment Type
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Voucher
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Debit
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Credit
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                When to Use
              </th>
            </tr>
          </thead>
          <tbody>
            {adjustmentTypes.map((adj, i) => (
              <tr
                key={adj.type}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`adjustments.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 text-muted-foreground text-xs border-b border-border/40">
                  {i + 1}
                </td>
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                  {adj.type}
                </td>
                <td className="px-4 py-2.5 border-b border-border/40">
                  <code className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                    {adj.voucherType}
                  </code>
                </td>
                <td className="px-4 py-2.5 text-xs text-blue-700 border-b border-border/40">
                  {adj.debit}
                </td>
                <td className="px-4 py-2.5 text-xs text-green-700 border-b border-border/40">
                  {adj.credit}
                </td>
                <td className="px-4 py-2.5 text-xs text-muted-foreground border-b border-border/40">
                  {adj.when}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-base font-bold text-foreground">
        Detailed Steps for Each Adjustment
      </h3>
      <div className="space-y-4">
        {adjustmentTypes.map((adj, i) => (
          <div
            key={adj.type}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-foreground">
                  {adj.type}
                </h4>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                  {adj.voucherType}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="text-xs bg-blue-50 rounded p-2">
                <span className="font-semibold text-blue-800">Debit:</span>{" "}
                <span className="text-blue-700">{adj.debit}</span>
              </div>
              <div className="text-xs bg-green-50 rounded p-2">
                <span className="font-semibold text-green-800">Credit:</span>{" "}
                <span className="text-green-700">{adj.credit}</span>
              </div>
            </div>
            <ol className="space-y-1.5">
              {adj.steps.map((step, stepIdx) => (
                <li key={step} className="flex gap-2 text-xs text-text-body">
                  <span className="flex-shrink-0 font-bold text-primary">
                    {stepIdx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <TallyPath
        path="Gateway of Tally > Accounts Info > Cost Centres > Create"
        description="Required to allocate expenses to departments"
      />

      <h3 className="text-base font-bold text-foreground mt-2">
        Department / Cost Centre Setup
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Department
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Expenses Allocated
              </th>
            </tr>
          </thead>
          <tbody>
            {departments.map((d, i) => (
              <tr
                key={d.dept}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`departments.row.${i + 1}`}
              >
                <td className="px-4 py-3 font-bold text-primary border-b border-border/40">
                  {d.dept}
                </td>
                <td className="px-4 py-3 text-text-body text-sm border-b border-border/40">
                  {d.examples}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

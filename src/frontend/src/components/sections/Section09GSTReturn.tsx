import TallyPath from "../TallyPath";

const gstr1Steps = [
  {
    step: 1,
    title: "Open GST Reports",
    desc: "Gateway of Tally > Display More Reports > GST Reports > GSTR-1",
  },
  {
    step: 2,
    title: "Select Period",
    desc: "Choose the tax period: From 01-Apr-2024 To 30-Apr-2024",
  },
  {
    step: 3,
    title: "Review B2B Invoices",
    desc: "Check all registered business (B2B) sales with GSTIN of buyers",
  },
  {
    step: 4,
    title: "Review B2C Summary",
    desc: "Verify unregistered customer (B2C) sales summary by state",
  },
  {
    step: 5,
    title: "Check HSN Summary",
    desc: "Verify HSN-wise summary: quantity, taxable value, CGST, SGST, IGST",
  },
  {
    step: 6,
    title: "Export to JSON/Excel",
    desc: "Press Alt+E to export GSTR-1 data in JSON format for GST portal upload",
  },
  {
    step: 7,
    title: "Login to GST Portal",
    desc: "Go to https://www.gst.gov.in > Login with GSTIN & password",
  },
  {
    step: 8,
    title: "Upload on Portal",
    desc: "File Returns > GSTR-1 > Select Period > Upload JSON file from Tally",
  },
  {
    step: 9,
    title: "Submit & File",
    desc: "Review data on portal > Proceed to File > Sign with DSC or EVC > File GSTR-1",
  },
];

const gstr3bSteps = [
  {
    step: 1,
    title: "Open GSTR-3B Report",
    desc: "Gateway of Tally > Display More Reports > GST Reports > GSTR-3B",
  },
  { step: 2, title: "Select Period", desc: "Choose period: April 2024" },
  {
    step: 3,
    title: "Table 3.1 — Outward Supplies",
    desc: "Verify total taxable value, IGST, CGST, SGST, Cess for all sales",
  },
  {
    step: 4,
    title: "Table 4 — ITC Available",
    desc: "Check Input Tax Credit: ITC on Inputs, Capital Goods, Input Services",
  },
  {
    step: 5,
    title: "Calculate Net Tax",
    desc: "Net Tax = Output GST − Input Tax Credit (ITC). Pay the difference.",
  },
  {
    step: 6,
    title: "Generate Payment Challan",
    desc: "If net tax > 0, create PMT-06 challan on GST portal for payment",
  },
  {
    step: 7,
    title: "Make GST Payment",
    desc: "Pay via Net Banking / NEFT / RTGS to GST Electronic Cash Ledger",
  },
  {
    step: 8,
    title: "File GSTR-3B on Portal",
    desc: "Login to GST portal > File Returns > GSTR-3B > Enter data > Submit before 20th",
  },
];

const monthlyGST = [
  {
    month: "April 2024",
    output: "24,500",
    itc: "14,500",
    net: "10,000",
    dueDate: "20-May-2024",
    status: "Filed",
  },
  {
    month: "May 2024",
    output: "28,200",
    itc: "16,800",
    net: "11,400",
    dueDate: "20-Jun-2024",
    status: "Filed",
  },
  {
    month: "June 2024",
    output: "31,500",
    itc: "18,200",
    net: "13,300",
    dueDate: "20-Jul-2024",
    status: "Filed",
  },
  {
    month: "July 2024",
    output: "26,800",
    itc: "15,600",
    net: "11,200",
    dueDate: "20-Aug-2024",
    status: "Filed",
  },
  {
    month: "August 2024",
    output: "29,400",
    itc: "17,400",
    net: "12,000",
    dueDate: "20-Sep-2024",
    status: "Filed",
  },
  {
    month: "September 2024",
    output: "33,600",
    itc: "19,200",
    net: "14,400",
    dueDate: "20-Oct-2024",
    status: "Filed",
  },
  {
    month: "October 2024",
    output: "35,200",
    itc: "20,400",
    net: "14,800",
    dueDate: "20-Nov-2024",
    status: "Filed",
  },
  {
    month: "November 2024",
    output: "30,100",
    itc: "17,600",
    net: "12,500",
    dueDate: "20-Dec-2024",
    status: "Filed",
  },
  {
    month: "December 2024",
    output: "38,500",
    itc: "22,000",
    net: "16,500",
    dueDate: "20-Jan-2025",
    status: "Filed",
  },
  {
    month: "January 2025",
    output: "32,000",
    itc: "18,500",
    net: "13,500",
    dueDate: "20-Feb-2025",
    status: "Filed",
  },
  {
    month: "February 2025",
    output: "27,800",
    itc: "16,200",
    net: "11,600",
    dueDate: "20-Mar-2025",
    status: "Filed",
  },
  {
    month: "March 2025",
    output: "42,500",
    itc: "24,200",
    net: "18,300",
    dueDate: "20-Apr-2025",
    status: "Pending",
  },
];

const totalOutput = monthlyGST.reduce(
  (s, m) => s + Number(m.output.replace(/,/g, "")),
  0,
);
const totalITC = monthlyGST.reduce(
  (s, m) => s + Number(m.itc.replace(/,/g, "")),
  0,
);
const totalNet = monthlyGST.reduce(
  (s, m) => s + Number(m.net.replace(/,/g, "")),
  0,
);

export default function Section09GSTReturn() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
          <h3 className="font-bold text-sm text-primary mb-1">
            GSTR-1 (Outward Supplies)
          </h3>
          <p className="text-xs text-muted-foreground">
            Details of all sales made. Due by 11th of next month.
          </p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <h3 className="font-bold text-sm text-green-700 mb-1">
            GSTR-3B (Monthly Summary)
          </h3>
          <p className="text-xs text-muted-foreground">
            Summary return with net tax payment. Due by 20th of next month.
          </p>
        </div>
      </div>

      <TallyPath path="Gateway of Tally > Display More Reports > GST Reports > GSTR-1" />

      <h3 className="text-base font-bold text-foreground">
        GSTR-1 Filing — Step by Step
      </h3>
      <div className="space-y-3">
        {gstr1Steps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">{s.step}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{s.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <TallyPath path="Gateway of Tally > Display More Reports > GST Reports > GSTR-3B" />

      <h3 className="text-base font-bold text-foreground mt-4">
        GSTR-3B Filing — Step by Step
      </h3>
      <div className="space-y-3">
        {gstr3bSteps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[oklch(0.65_0.14_145)] flex items-center justify-center">
              <span className="text-white text-xs font-bold">{s.step}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{s.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        Monthly GST Summary — FY 2024-25
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Month
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Output GST (₹)
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Input ITC (₹)
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Net Payable (₹)
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Due Date
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {monthlyGST.map((row, i) => (
              <tr
                key={row.month}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`gst-returns.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                  {row.month}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  ₹{row.output}
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-green-700 border-b border-border/40">
                  ₹{row.itc}
                </td>
                <td className="px-4 py-2.5 text-right font-mono font-bold text-primary border-b border-border/40">
                  ₹{row.net}
                </td>
                <td className="px-4 py-2.5 text-sm text-muted-foreground border-b border-border/40">
                  {row.dueDate}
                </td>
                <td className="px-4 py-2.5 text-center border-b border-border/40">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      row.status === "Filed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-primary/5 font-bold">
            <tr>
              <td className="px-4 py-3 font-bold">Annual Total (FY 2024-25)</td>
              <td className="px-4 py-3 text-right font-mono font-bold">
                ₹{totalOutput.toLocaleString("en-IN")}
              </td>
              <td className="px-4 py-3 text-right font-mono font-bold text-green-700">
                ₹{totalITC.toLocaleString("en-IN")}
              </td>
              <td className="px-4 py-3 text-right font-mono font-bold text-primary">
                ₹{totalNet.toLocaleString("en-IN")}
              </td>
              <td colSpan={2} />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

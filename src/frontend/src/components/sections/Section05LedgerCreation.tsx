import TallyPath from "../TallyPath";

interface LedgerEntry {
  name: string;
  group: string;
  openingBalance: string;
  type: "Dr" | "Cr" | "";
}

const ledgers: LedgerEntry[] = [
  {
    name: "Vasudev Textile Capital A/c",
    group: "Capital Account",
    openingBalance: "10,00,000",
    type: "Cr",
  },
  {
    name: "Owner's Drawings A/c",
    group: "Capital Account",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Ramesh Textile Mills A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Kiran Chemicals Pvt Ltd A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Sanjay Traders A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Mehta Printing Works A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Surat Fabric Mill A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Gujarat Spinners Ltd A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Raj Chemicals A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Color World Suppliers A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Suresh Textiles A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Jay Transport A/c",
    group: "Sundry Creditors",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "CGST Payable A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "SGST Payable A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "IGST Payable A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "CGST Input Tax Credit A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "SGST Input Tax Credit A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "IGST Input Tax Credit A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "TDS Payable A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "RCM GST Payable A/c",
    group: "Duties & Taxes",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Salary Payable A/c",
    group: "Current Liabilities",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Advance from Customer A/c",
    group: "Current Liabilities",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Landlord A/c",
    group: "Current Liabilities",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Outstanding Expenses A/c",
    group: "Current Liabilities",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Bank Loan A/c (SBI)",
    group: "Loans (Liability)",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Vehicle Loan A/c",
    group: "Loans (Liability)",
    openingBalance: "2,40,000",
    type: "Cr",
  },
  {
    name: "HDFC OD A/c",
    group: "Loans (Liability)",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Machinery A/c",
    group: "Fixed Assets",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Furniture & Fixtures A/c",
    group: "Fixed Assets",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Vehicles A/c",
    group: "Fixed Assets",
    openingBalance: "4,50,000",
    type: "Dr",
  },
  {
    name: "Computers & Equipment A/c",
    group: "Fixed Assets",
    openingBalance: "45,000",
    type: "Dr",
  },
  {
    name: "Old Machinery A/c",
    group: "Fixed Assets",
    openingBalance: "1,20,000",
    type: "Dr",
  },
  {
    name: "Mahesh Saree Centre A/c",
    group: "Sundry Debtors",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Jaipur Saree House A/c",
    group: "Sundry Debtors",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Bharat Saree Store A/c",
    group: "Sundry Debtors",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Rajkot Textiles A/c",
    group: "Sundry Debtors",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Vijay Textiles A/c",
    group: "Sundry Debtors",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Export Customer A/c",
    group: "Sundry Debtors",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Cash in Hand A/c",
    group: "Cash-in-Hand",
    openingBalance: "50,000",
    type: "Dr",
  },
  {
    name: "SBI Current A/c",
    group: "Bank Accounts",
    openingBalance: "1,20,000",
    type: "Dr",
  },
  {
    name: "HDFC Current A/c",
    group: "Bank Accounts",
    openingBalance: "35,000",
    type: "Dr",
  },
  {
    name: "FD Investment A/c",
    group: "Investments",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Advance Tax A/c",
    group: "Loans & Advances (Asset)",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Advance to Suppliers A/c",
    group: "Loans & Advances (Asset)",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Prepaid Insurance A/c",
    group: "Loans & Advances (Asset)",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Prepaid Expenses A/c",
    group: "Loans & Advances (Asset)",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Purchase (Cotton Fabric) A/c",
    group: "Purchase Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Purchase (Dyes & Chemicals) A/c",
    group: "Purchase Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Purchase (Packing Material) A/c",
    group: "Purchase Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Purchase (Accessories) A/c",
    group: "Purchase Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Purchase Return A/c",
    group: "Purchase Accounts",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Freight Inward A/c",
    group: "Purchase Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Job Work Expense A/c",
    group: "Purchase Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Sales (Local - Cotton Sarees) A/c",
    group: "Sales Accounts",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Sales (Interstate) A/c",
    group: "Sales Accounts",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Export Sales A/c",
    group: "Sales Accounts",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Sales Return A/c",
    group: "Sales Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Discount Allowed A/c",
    group: "Sales Accounts",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Salary Expense A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Wages Expense A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Electricity Expense A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Rent Expense A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Insurance Expense A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Telephone Expense A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Vehicle Expenses A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Printing & Stationery A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Bank Charges A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Bank OD Interest A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Depreciation Expense A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Professional Fees A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Repair & Maintenance A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Misc. Expenses A/c",
    group: "Indirect Expenses",
    openingBalance: "0",
    type: "Dr",
  },
  {
    name: "Interest Received A/c",
    group: "Indirect Income",
    openingBalance: "0",
    type: "Cr",
  },
  {
    name: "Discount Received A/c",
    group: "Indirect Income",
    openingBalance: "0",
    type: "Cr",
  },
];

const groupColors: Record<string, string> = {
  "Capital Account": "bg-purple-100 text-purple-800",
  "Sundry Creditors": "bg-red-100 text-red-800",
  "Duties & Taxes": "bg-yellow-100 text-yellow-800",
  "Current Liabilities": "bg-orange-100 text-orange-800",
  "Loans (Liability)": "bg-pink-100 text-pink-800",
  "Fixed Assets": "bg-blue-100 text-blue-800",
  "Sundry Debtors": "bg-green-100 text-green-800",
  "Cash-in-Hand": "bg-emerald-100 text-emerald-800",
  "Bank Accounts": "bg-teal-100 text-teal-800",
  Investments: "bg-cyan-100 text-cyan-800",
  "Loans & Advances (Asset)": "bg-sky-100 text-sky-800",
  "Purchase Accounts": "bg-indigo-100 text-indigo-800",
  "Sales Accounts": "bg-violet-100 text-violet-800",
  "Indirect Expenses": "bg-amber-100 text-amber-800",
  "Indirect Income": "bg-lime-100 text-lime-800",
};

const ledgerCreationSteps = [
  {
    step: 1,
    action: "Navigate to Accounts Info",
    detail: "Gateway of Tally > Accounts Info > Ledgers",
  },
  {
    step: 2,
    action: "Choose Create",
    detail: "Select 'Create' from the Ledgers menu to create a single ledger",
  },
  {
    step: 3,
    action: "Enter Ledger Name",
    detail: "Type the ledger name exactly as shown in the table below",
  },
  {
    step: 4,
    action: "Select Group",
    detail:
      "Choose the appropriate Group from the dropdown (e.g., Sundry Creditors, Fixed Assets)",
  },
  {
    step: 5,
    action: "Set Opening Balance",
    detail: "Enter the opening balance if applicable. Set Dr/Cr accordingly",
  },
  {
    step: 6,
    action: "Configure GST",
    detail: "For purchase/sales ledgers, set GST Applicability and Taxability",
  },
  {
    step: 7,
    action: "Save Ledger",
    detail: "Press Ctrl+A or Enter to save. Repeat for each ledger",
  },
];

const groups = Array.from(new Set(ledgers.map((l) => l.group)));

export default function Section05LedgerCreation() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > Accounts Info > Ledgers > Create" />

      <h3 className="text-base font-bold text-foreground">
        Ledger Creation Steps
      </h3>
      <div className="space-y-3">
        {ledgerCreationSteps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">{s.step}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">
                {s.action}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 my-4">
        {groups.map((g) => (
          <span
            key={g}
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${groupColors[g] || "bg-gray-100 text-gray-700"}`}
          >
            {g}
          </span>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground">
        Complete Ledger List ({ledgers.length} Ledgers)
      </h3>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border w-8">
                #
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Ledger Name
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Group
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Opening Balance (₹)
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                Dr/Cr
              </th>
            </tr>
          </thead>
          <tbody>
            {ledgers.map((ledger, i) => (
              <tr
                key={ledger.name}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`ledger.row.${i + 1}`}
              >
                <td className="px-4 py-2 text-muted-foreground text-xs border-b border-border/40">
                  {i + 1}
                </td>
                <td className="px-4 py-2 font-medium text-foreground border-b border-border/40 text-sm">
                  {ledger.name}
                </td>
                <td className="px-4 py-2 border-b border-border/40">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${groupColors[ledger.group] || "bg-gray-100 text-gray-700"}`}
                  >
                    {ledger.group}
                  </span>
                </td>
                <td className="px-4 py-2 text-right font-mono font-medium border-b border-border/40">
                  {ledger.openingBalance !== "0"
                    ? `₹${ledger.openingBalance}`
                    : "—"}
                </td>
                <td className="px-4 py-2 text-center border-b border-border/40">
                  {ledger.type && (
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${ledger.type === "Dr" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}
                    >
                      {ledger.type}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-primary/5">
            <tr>
              <td
                colSpan={5}
                className="px-4 py-3 text-sm font-semibold text-foreground"
              >
                Total: {ledgers.length} Ledgers across {groups.length} Groups
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

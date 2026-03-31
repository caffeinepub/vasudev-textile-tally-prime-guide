import TallyPath from "../TallyPath";

interface JournalEntry {
  no: number;
  date: string;
  particulars: string;
  debit: string;
  credit: string;
  amount: string;
  narration: string;
  category: string;
}

const entries: JournalEntry[] = [
  // Purchase Entries (1-12)
  {
    no: 1,
    date: "05-Apr-2024",
    particulars: "Purchase of Grey Cotton Fabric",
    debit: "Purchase (Cotton Fabric) A/c",
    credit: "Ramesh Textile Mills A/c",
    amount: "85,000",
    narration: "1000m @ ₹85/m from Surat",
    category: "Purchase",
  },
  {
    no: 2,
    date: "08-Apr-2024",
    particulars: "Purchase of Synthetic Dye",
    debit: "Purchase (Dyes & Chemicals) A/c",
    credit: "Kiran Chemicals Pvt Ltd A/c",
    amount: "35,000",
    narration: "100 KG @ ₹350/kg",
    category: "Purchase",
  },
  {
    no: 3,
    date: "10-Apr-2024",
    particulars: "Purchase of Packing Material",
    debit: "Purchase (Packing Material) A/c",
    credit: "Sanjay Traders A/c",
    amount: "12,500",
    narration: "Polybags 2000 pcs & boxes 500 pcs",
    category: "Purchase",
  },
  {
    no: 4,
    date: "12-Apr-2024",
    particulars: "Job Work — Screen Printing",
    debit: "Job Work Expense A/c",
    credit: "Mehta Printing Works A/c",
    amount: "18,000",
    narration: "Printing 500 sarees @ ₹36/pc",
    category: "Purchase",
  },
  {
    no: 5,
    date: "14-Apr-2024",
    particulars: "Freight Inward on Cotton Fabric",
    debit: "Freight Inward A/c",
    credit: "Jay Transport A/c",
    amount: "3,200",
    narration: "Transport from Surat to Jetpur",
    category: "Purchase",
  },
  {
    no: 6,
    date: "16-Apr-2024",
    particulars: "Interstate Purchase of Fabric",
    debit: "Purchase (Cotton Fabric) A/c",
    credit: "Surat Fabric Mill A/c (IGST)",
    amount: "1,20,000",
    narration: "1500m @ ₹80/m from Surat (IGST 5%)",
    category: "Purchase",
  },
  {
    no: 7,
    date: "18-Apr-2024",
    particulars: "Advance Payment to Supplier",
    debit: "Advance to Suppliers A/c",
    credit: "SBI Current A/c",
    amount: "20,000",
    narration: "Advance to Kiran Chemicals for order",
    category: "Purchase",
  },
  {
    no: 8,
    date: "20-Apr-2024",
    particulars: "Purchase Return — Defective Fabric",
    debit: "Ramesh Textile Mills A/c",
    credit: "Purchase Return A/c",
    amount: "5,000",
    narration: "Defective grey fabric returned",
    category: "Purchase",
  },
  {
    no: 9,
    date: "22-Apr-2024",
    particulars: "Purchase of Chemical Fixative",
    debit: "Purchase (Dyes & Chemicals) A/c",
    credit: "Raj Chemicals A/c",
    amount: "14,000",
    narration: "50 KG @ ₹280/kg",
    category: "Purchase",
  },
  {
    no: 10,
    date: "24-Apr-2024",
    particulars: "Purchase of Screen Printing Ink",
    debit: "Purchase (Dyes & Chemicals) A/c",
    credit: "Color World Suppliers A/c",
    amount: "22,500",
    narration: "50 KG @ ₹450/kg",
    category: "Purchase",
  },
  {
    no: 11,
    date: "26-Apr-2024",
    particulars: "Purchase of Cotton Yarn",
    debit: "Purchase (Cotton Fabric) A/c",
    credit: "Gujarat Spinners Ltd A/c",
    amount: "65,000",
    narration: "Raw cotton yarn for border work",
    category: "Purchase",
  },
  {
    no: 12,
    date: "28-Apr-2024",
    particulars: "Purchase of Thread & Accessories",
    debit: "Purchase (Accessories) A/c",
    credit: "Suresh Textiles A/c",
    amount: "8,500",
    narration: "Borders, zari, thread accessories",
    category: "Purchase",
  },
  // Sales Entries (13-22)
  {
    no: 13,
    date: "01-Apr-2024",
    particulars: "Cash Sales of Cotton Sarees",
    debit: "Cash in Hand A/c",
    credit: "Sales (Local) A/c",
    amount: "45,000",
    narration: "60 sarees @ avg ₹750 — local market",
    category: "Sales",
  },
  {
    no: 14,
    date: "03-Apr-2024",
    particulars: "Credit Sales — Mahesh Saree Centre",
    debit: "Mahesh Saree Centre A/c",
    credit: "Sales (Local) A/c",
    amount: "53,200",
    narration: "50 sarees + 12% GST = ₹53,200",
    category: "Sales",
  },
  {
    no: 15,
    date: "06-Apr-2024",
    particulars: "Interstate Sales — Jaipur Retailer",
    debit: "Jaipur Saree House A/c",
    credit: "Sales (Interstate) A/c",
    amount: "72,000",
    narration: "80 sarees to Rajasthan (IGST 12%)",
    category: "Sales",
  },
  {
    no: 16,
    date: "09-Apr-2024",
    particulars: "Export Sales",
    debit: "Export Customer A/c",
    credit: "Export Sales A/c",
    amount: "1,50,000",
    narration: "200 sarees — USD 1800 (Zero rated)",
    category: "Sales",
  },
  {
    no: 17,
    date: "11-Apr-2024",
    particulars: "Advance Received from Customer",
    debit: "SBI Current A/c",
    credit: "Advance from Customer A/c",
    amount: "25,000",
    narration: "Advance from Bharat Saree Store",
    category: "Sales",
  },
  {
    no: 18,
    date: "13-Apr-2024",
    particulars: "Sales Return — Credit Note",
    debit: "Sales Return A/c",
    credit: "Vijay Textiles A/c",
    amount: "8,000",
    narration: "10 pieces returned — quality issue",
    category: "Sales",
  },
  {
    no: 19,
    date: "15-Apr-2024",
    particulars: "Discount Allowed to Customer",
    debit: "Discount Allowed A/c",
    credit: "Sundry Debtors A/c",
    amount: "3,500",
    narration: "Trade discount on bulk purchase",
    category: "Sales",
  },
  {
    no: 20,
    date: "17-Apr-2024",
    particulars: "Credit Sales — Rajkot Dealer",
    debit: "Rajkot Textiles A/c",
    credit: "Sales (Local) A/c",
    amount: "38,500",
    narration: "45 sarees @ ₹855 including GST",
    category: "Sales",
  },
  {
    no: 21,
    date: "19-Apr-2024",
    particulars: "Cash Sales — Jetpur Weekend Market",
    debit: "Cash in Hand A/c",
    credit: "Sales (Local) A/c",
    amount: "28,000",
    narration: "Weekend market sales — cash",
    category: "Sales",
  },
  {
    no: 22,
    date: "21-Apr-2024",
    particulars: "Credit Sales — Ahmedabad Dealer",
    debit: "Bharat Saree Store A/c",
    credit: "Sales (Local) A/c",
    amount: "62,000",
    narration: "70 designer sarees, net 30 days",
    category: "Sales",
  },
  // Expense Entries (23-34)
  {
    no: 23,
    date: "01-Apr-2024",
    particulars: "Salary to Staff",
    debit: "Salary Expense A/c",
    credit: "Salary Payable A/c",
    amount: "45,000",
    narration: "5 staff members @ ₹9,000 average",
    category: "Expenses",
  },
  {
    no: 24,
    date: "01-Apr-2024",
    particulars: "Wages to Factory Workers",
    debit: "Wages Expense A/c",
    credit: "Cash in Hand A/c",
    amount: "38,000",
    narration: "8 daily workers — April wages",
    category: "Expenses",
  },
  {
    no: 25,
    date: "05-Apr-2024",
    particulars: "Electricity Bill Payment",
    debit: "Electricity Expense A/c",
    credit: "DGVCL A/c",
    amount: "8,500",
    narration: "Factory electricity — April bill",
    category: "Expenses",
  },
  {
    no: 26,
    date: "05-Apr-2024",
    particulars: "Factory Rent Payment",
    debit: "Rent Expense A/c",
    credit: "Landlord A/c",
    amount: "15,000",
    narration: "Monthly factory rent — April",
    category: "Expenses",
  },
  {
    no: 27,
    date: "07-Apr-2024",
    particulars: "Insurance Premium Payment",
    debit: "Insurance Expense A/c",
    credit: "New India Assurance A/c",
    amount: "5,200",
    narration: "Factory & stock insurance installment",
    category: "Expenses",
  },
  {
    no: 28,
    date: "10-Apr-2024",
    particulars: "Telephone & Internet Bill",
    debit: "Telephone Expense A/c",
    credit: "Reliance Jio A/c",
    amount: "2,800",
    narration: "Monthly telephone & data charges",
    category: "Expenses",
  },
  {
    no: 29,
    date: "15-Apr-2024",
    particulars: "Vehicle Maintenance",
    debit: "Vehicle Expenses A/c",
    credit: "Singh Auto Garage A/c",
    amount: "3,500",
    narration: "Delivery van servicing & oil change",
    category: "Expenses",
  },
  {
    no: 30,
    date: "18-Apr-2024",
    particulars: "Printing & Stationery",
    debit: "Printing & Stationery A/c",
    credit: "Cash in Hand A/c",
    amount: "1,800",
    narration: "Office stationery & printed materials",
    category: "Expenses",
  },
  {
    no: 31,
    date: "20-Apr-2024",
    particulars: "Miscellaneous Expenses",
    debit: "Misc. Expenses A/c",
    credit: "Cash in Hand A/c",
    amount: "2,500",
    narration: "Tea, cleaning, sundry factory expenses",
    category: "Expenses",
  },
  {
    no: 32,
    date: "25-Apr-2024",
    particulars: "Bank Charges — April",
    debit: "Bank Charges A/c",
    credit: "SBI Current A/c",
    amount: "850",
    narration: "Monthly bank service charges SBI",
    category: "Expenses",
  },
  {
    no: 33,
    date: "28-Apr-2024",
    particulars: "Professional Fees — CA",
    debit: "Professional Fees A/c",
    credit: "CA Prakash & Associates A/c",
    amount: "8,000",
    narration: "Quarterly CA services — GST + accounts",
    category: "Expenses",
  },
  {
    no: 34,
    date: "30-Apr-2024",
    particulars: "Repair & Maintenance",
    debit: "Repair & Maintenance A/c",
    credit: "Local Labor A/c",
    amount: "4,200",
    narration: "Workshop repair — machine maintenance",
    category: "Expenses",
  },
  // Bank/Finance Entries (35-42)
  {
    no: 35,
    date: "02-Apr-2024",
    particulars: "Bank Loan Received from SBI",
    debit: "SBI Current A/c",
    credit: "Bank Loan A/c (SBI)",
    amount: "5,00,000",
    narration: "Term loan for factory expansion",
    category: "Bank/Finance",
  },
  {
    no: 36,
    date: "05-Apr-2024",
    particulars: "EMI Payment — Machinery Loan",
    debit: "Bank Loan A/c (SBI)",
    credit: "SBI Current A/c",
    amount: "18,500",
    narration: "Monthly EMI: ₹15,000 principal + ₹3,500 interest",
    category: "Bank/Finance",
  },
  {
    no: 37,
    date: "10-Apr-2024",
    particulars: "Bank Interest Credited",
    debit: "SBI Current A/c",
    credit: "Interest Received A/c",
    amount: "1,250",
    narration: "FD interest credit for March 2024",
    category: "Bank/Finance",
  },
  {
    no: 38,
    date: "12-Apr-2024",
    particulars: "Cheque Deposit to Bank",
    debit: "SBI Current A/c",
    credit: "Cash in Hand A/c",
    amount: "80,000",
    narration: "Cash sales deposited to SBI",
    category: "Bank/Finance",
  },
  {
    no: 39,
    date: "15-Apr-2024",
    particulars: "Fund Transfer SBI to HDFC",
    debit: "HDFC Current A/c",
    credit: "SBI Current A/c",
    amount: "50,000",
    narration: "NEFT transfer between company accounts",
    category: "Bank/Finance",
  },
  {
    no: 40,
    date: "20-Apr-2024",
    particulars: "Cash Withdrawal from Bank",
    debit: "Cash in Hand A/c",
    credit: "SBI Current A/c",
    amount: "30,000",
    narration: "Petty cash withdrawal for factory",
    category: "Bank/Finance",
  },
  {
    no: 41,
    date: "25-Apr-2024",
    particulars: "Fixed Deposit Investment",
    debit: "FD Investment A/c",
    credit: "SBI Current A/c",
    amount: "1,00,000",
    narration: "1-year FD @ 7.5% p.a. in SBI",
    category: "Bank/Finance",
  },
  {
    no: 42,
    date: "30-Apr-2024",
    particulars: "Overdraft Interest Paid",
    debit: "Bank OD Interest A/c",
    credit: "HDFC OD A/c",
    amount: "3,200",
    narration: "April OD interest charges HDFC",
    category: "Bank/Finance",
  },
  // GST Entries (43-50)
  {
    no: 43,
    date: "20-Apr-2024",
    particulars: "IGST Input on Interstate Purchase",
    debit: "IGST Input Tax Credit A/c",
    credit: "SBI Current A/c",
    amount: "6,000",
    narration: "IGST paid on Surat fabric purchase",
    category: "GST",
  },
  {
    no: 44,
    date: "20-Apr-2024",
    particulars: "CGST Input on Local Purchase",
    debit: "CGST Input Tax Credit A/c",
    credit: "SBI Current A/c",
    amount: "4,250",
    narration: "CGST 2.5% on local cotton purchase",
    category: "GST",
  },
  {
    no: 45,
    date: "20-Apr-2024",
    particulars: "SGST Input on Local Purchase",
    debit: "SGST Input Tax Credit A/c",
    credit: "SBI Current A/c",
    amount: "4,250",
    narration: "SGST 2.5% on local cotton purchase",
    category: "GST",
  },
  {
    no: 46,
    date: "20-Apr-2024",
    particulars: "ITC Adjustment — IGST Setoff",
    debit: "GST Payable (IGST) A/c",
    credit: "IGST Input Tax Credit A/c",
    amount: "6,000",
    narration: "ITC setoff against IGST output liability",
    category: "GST",
  },
  {
    no: 47,
    date: "20-Apr-2024",
    particulars: "GST Payment — GSTR-3B",
    debit: "GST Payable A/c",
    credit: "SBI Current A/c",
    amount: "12,500",
    narration: "Net GST paid via challan — April 2024",
    category: "GST",
  },
  {
    no: 48,
    date: "20-Apr-2024",
    particulars: "RCM Entry on Job Work",
    debit: "RCM GST Payable A/c",
    credit: "RCM Input Credit A/c",
    amount: "3,240",
    narration: "18% GST under Reverse Charge on job work",
    category: "GST",
  },
  {
    no: 49,
    date: "25-Apr-2024",
    particulars: "TDS Deducted on CA Fees",
    debit: "TDS Payable A/c",
    credit: "CA Prakash & Associates A/c",
    amount: "800",
    narration: "10% TDS u/s 194J on ₹8,000 professional fee",
    category: "GST",
  },
  {
    no: 50,
    date: "28-Apr-2024",
    particulars: "Advance Tax Payment — Q1",
    debit: "Advance Tax A/c",
    credit: "SBI Current A/c",
    amount: "15,000",
    narration: "Q1 FY 2024-25 advance income tax",
    category: "GST",
  },
  // Asset Entries (51-56)
  {
    no: 51,
    date: "01-Apr-2024",
    particulars: "Machinery Purchase",
    debit: "Machinery A/c",
    credit: "SBI Current A/c",
    amount: "2,50,000",
    narration: "New screen printing machine + installation",
    category: "Assets",
  },
  {
    no: 52,
    date: "05-Apr-2024",
    particulars: "Furniture for Showroom",
    debit: "Furniture & Fixtures A/c",
    credit: "Cash in Hand A/c",
    amount: "35,000",
    narration: "Display racks, chairs, reception furniture",
    category: "Assets",
  },
  {
    no: 53,
    date: "31-Mar-2025",
    particulars: "Depreciation on Machinery",
    debit: "Depreciation Expense A/c",
    credit: "Machinery A/c",
    amount: "37,500",
    narration: "15% depreciation WDV method on ₹2,50,000",
    category: "Assets",
  },
  {
    no: 54,
    date: "15-Apr-2024",
    particulars: "Old Machine Disposal",
    debit: "SBI Current A/c",
    credit: "Old Machinery A/c",
    amount: "18,000",
    narration: "Sale of old printing machine (scrap value)",
    category: "Assets",
  },
  {
    no: 55,
    date: "01-Apr-2024",
    particulars: "Capital Introduction by Owner",
    debit: "SBI Current A/c",
    credit: "Vasudev Textile Capital A/c",
    amount: "10,00,000",
    narration: "Opening capital for FY 2024-25",
    category: "Assets",
  },
  {
    no: 56,
    date: "31-Mar-2025",
    particulars: "Owner's Drawings — Annual",
    debit: "Owner's Drawings A/c",
    credit: "SBI Current A/c",
    amount: "80,000",
    narration: "Annual drawings by owner",
    category: "Assets",
  },
  // Month-End Entries (57-60)
  {
    no: 57,
    date: "30-Apr-2024",
    particulars: "Closing Stock Adjustment",
    debit: "Closing Stock A/c",
    credit: "Trading A/c",
    amount: "4,85,000",
    narration: "Physical stock count — April closing stock",
    category: "Month-End",
  },
  {
    no: 58,
    date: "30-Apr-2024",
    particulars: "Prepaid Insurance Adjustment",
    debit: "Prepaid Insurance A/c",
    credit: "Insurance Expense A/c",
    amount: "1,200",
    narration: "2 months advance premium for May-June",
    category: "Month-End",
  },
  {
    no: 59,
    date: "30-Apr-2024",
    particulars: "Outstanding Salary Payable",
    debit: "Salary Expense A/c",
    credit: "Salary Payable A/c",
    amount: "12,000",
    narration: "2 workers salary unpaid — April accrual",
    category: "Month-End",
  },
  {
    no: 60,
    date: "30-Apr-2024",
    particulars: "Bank Reconciliation Adjustment",
    debit: "Bank Charges A/c",
    credit: "Bank Reconciliation A/c",
    amount: "450",
    narration: "Bank charges not recorded — April BRS",
    category: "Month-End",
  },
];

const categoryColors: Record<string, string> = {
  Purchase: "bg-blue-50 text-blue-700 border-blue-200",
  Sales: "bg-green-50 text-green-700 border-green-200",
  Expenses: "bg-orange-50 text-orange-700 border-orange-200",
  "Bank/Finance": "bg-purple-50 text-purple-700 border-purple-200",
  GST: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Assets: "bg-pink-50 text-pink-700 border-pink-200",
  "Month-End": "bg-gray-50 text-gray-700 border-gray-200",
};

const categories = [
  "Purchase",
  "Sales",
  "Expenses",
  "Bank/Finance",
  "GST",
  "Assets",
  "Month-End",
];
const categoryCounts: Record<string, string> = {
  Purchase: "1–12",
  Sales: "13–22",
  Expenses: "23–34",
  "Bank/Finance": "35–42",
  GST: "43–50",
  Assets: "51–56",
  "Month-End": "57–60",
};

export default function Section04MonthlyEntries() {
  return (
    <div className="space-y-6">
      <TallyPath
        path="Gateway of Tally > Vouchers > F5 (Payment) / F6 (Receipt) / F7 (Journal) / F8 (Sales) / F9 (Purchase)"
        description="Use the appropriate voucher type for each entry. Press the function key or click the voucher name."
      />

      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <span
            key={cat}
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[cat]}`}
          >
            {cat} ({categoryCounts[cat]})
          </span>
        ))}
      </div>

      <div className="bg-amber-light border border-amber rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground">
          📌 Important Note
        </p>
        <p className="text-sm text-text-body mt-1">
          These 60 entries represent a typical month (April 2024) for Vasudev
          Textile. Similar entries should be created for each month of the
          financial year (April 2024 to March 2025). Always verify amounts with
          actual invoices before entering.
        </p>
      </div>

      <h3 className="text-base font-bold text-foreground">
        All 60 Monthly Journal Entries — April 2024
      </h3>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-xs" style={{ minWidth: "1000px" }}>
          <thead className="bg-primary/10 sticky top-0">
            <tr>
              <th className="text-left px-3 py-3 font-semibold text-foreground border-b border-border w-10">
                No.
              </th>
              <th className="text-left px-3 py-3 font-semibold text-foreground border-b border-border w-24">
                Date
              </th>
              <th className="text-left px-3 py-3 font-semibold text-foreground border-b border-border">
                Particulars
              </th>
              <th className="text-left px-3 py-3 font-semibold text-foreground border-b border-border">
                Debit Account
              </th>
              <th className="text-left px-3 py-3 font-semibold text-foreground border-b border-border">
                Credit Account
              </th>
              <th className="text-right px-3 py-3 font-semibold text-foreground border-b border-border w-24">
                Amount (₹)
              </th>
              <th className="text-left px-3 py-3 font-semibold text-foreground border-b border-border">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.no}
                className="border-b border-border/40 hover:bg-primary/5 transition-colors"
                data-ocid={`entries.row.${entry.no}`}
              >
                <td className="px-3 py-2.5">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                    {entry.no}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-muted-foreground font-mono whitespace-nowrap">
                  {entry.date}
                </td>
                <td className="px-3 py-2.5">
                  <p className="font-semibold text-foreground">
                    {entry.particulars}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {entry.narration}
                  </p>
                </td>
                <td className="px-3 py-2.5 text-blue-700 font-medium">
                  {entry.debit}
                </td>
                <td className="px-3 py-2.5 text-green-700 font-medium">
                  {entry.credit}
                </td>
                <td className="px-3 py-2.5 text-right font-mono font-bold text-foreground">
                  ₹{entry.amount}
                </td>
                <td className="px-3 py-2.5">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryColors[entry.category]}`}
                  >
                    {entry.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-primary/5">
            <tr>
              <td
                colSpan={5}
                className="px-3 py-3 font-bold text-foreground text-right"
              >
                Total Entries: 60
              </td>
              <td className="px-3 py-3 text-right font-mono font-bold text-primary">
                Varies
              </td>
              <td className="px-3 py-3" />
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="rounded-lg bg-success-light border border-success/30 p-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          ✅ Entry Tips in Tally Prime
        </p>
        <ul className="text-sm text-text-body space-y-1 mt-2">
          <li>
            • Use <strong>F8</strong> for Sales Voucher, <strong>F9</strong> for
            Purchase Voucher
          </li>
          <li>
            • Use <strong>F7</strong> (Journal) for adjustments, depreciation,
            GST entries
          </li>
          <li>
            • Use <strong>F5</strong> (Payment) for expenses paid by cash/bank
          </li>
          <li>
            • Use <strong>F6</strong> (Receipt) for customer payment received
          </li>
          <li>
            • Press <strong>Alt+F5</strong> for Debit Note (Purchase Return)
          </li>
          <li>
            • Press <strong>Alt+F6</strong> for Credit Note (Sales Return)
          </li>
        </ul>
      </div>
    </div>
  );
}

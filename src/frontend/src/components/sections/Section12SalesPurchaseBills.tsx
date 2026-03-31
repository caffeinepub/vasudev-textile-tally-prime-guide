import TallyPath from "../TallyPath";

const purchaseBillFields = [
  { field: "Voucher Type", value: "Purchase" },
  { field: "Bill No.", value: "PB/2024-25/001" },
  { field: "Date", value: "05-04-2024" },
  { field: "Supplier Name", value: "Ramesh Textile Mills" },
  { field: "Supplier City", value: "Surat" },
  { field: "Supplier State", value: "Gujarat" },
  { field: "Supplier GSTIN", value: "24AABCR1234D1ZX" },
  { field: "Transport Mode", value: "By Road" },
  { field: "Distance", value: "195 km (Surat to Jetpur)" },
  { field: "Vehicle No.", value: "GJ-05-AB-1234" },
  { field: "e-Way Bill No.", value: "EWB/2024/0001234 (required > ₹50,000)" },
  { field: "Item: Grey Cotton Fabric", value: "1,000 Meters" },
  { field: "Rate per Meter", value: "₹85" },
  { field: "Taxable Value", value: "₹85,000" },
  { field: "CGST @ 2.5%", value: "₹2,125" },
  { field: "SGST @ 2.5%", value: "₹2,125" },
  { field: "Total GST", value: "₹4,250" },
  { field: "Total Bill Amount", value: "₹89,250" },
  { field: "Payment Terms", value: "Net 30 days" },
];

const salesBillFields = [
  { field: "Voucher Type", value: "Sales" },
  { field: "Bill No.", value: "SB/2024-25/001" },
  { field: "Date", value: "10-04-2024" },
  { field: "Customer Name", value: "Mahesh Saree Centre" },
  { field: "Customer City", value: "Ahmedabad" },
  { field: "Customer State", value: "Gujarat" },
  { field: "Customer GSTIN", value: "24AABCM5678E1ZX" },
  { field: "Transport Mode", value: "By Road" },
  { field: "Distance", value: "232 km (Jetpur to Ahmedabad)" },
  { field: "Vehicle No.", value: "GJ-01-CD-5678" },
  { field: "e-Way Bill No.", value: "EWB/2024/0001240 (required > ₹50,000)" },
  { field: "Item: Cotton Printed Saree", value: "50 Pieces" },
  { field: "Rate per Piece", value: "₹950" },
  { field: "Taxable Value", value: "₹47,500" },
  { field: "CGST @ 6%", value: "₹2,850" },
  { field: "SGST @ 6%", value: "₹2,850" },
  { field: "Total GST", value: "₹5,700" },
  { field: "Total Bill Amount", value: "₹53,200" },
  { field: "Payment Terms", value: "Net 30 days" },
];

const purchaseEntrySteps = [
  { step: 1, desc: "Gateway of Tally > Vouchers > F9 (Purchase)" },
  { step: 2, desc: "Enter Date: 05-04-2024" },
  { step: 3, desc: "Party A/c: Select or create Ramesh Textile Mills" },
  { step: 4, desc: "Reference No. (Supplier's Bill No.): PB/2024-25/001" },
  {
    step: 5,
    desc: "Under 'Supplier Invoice No.': Enter supplier's original bill number",
  },
  {
    step: 6,
    desc: "Add stock item: Grey Cotton Fabric > Qty: 1000 Meters > Rate: ₹85",
  },
  {
    step: 7,
    desc: "GST auto-calculates: CGST ₹2,125 + SGST ₹2,125 = Total ₹89,250",
  },
  {
    step: 8,
    desc: "Scroll down to Additional Details: Enter vehicle no., e-Way Bill no., distance",
  },
  {
    step: 9,
    desc: "Set Nature of Transaction: Purchase (Taxable) for local; Interstate Purchase for Surat",
  },
  { step: 10, desc: "Press Ctrl+A to save the purchase entry" },
];

const salesEntrySteps = [
  { step: 1, desc: "Gateway of Tally > Vouchers > F8 (Sales)" },
  { step: 2, desc: "Enter Date: 10-04-2024" },
  { step: 3, desc: "Party A/c: Select or create Mahesh Saree Centre" },
  { step: 4, desc: "Sales Ledger: Select 'Sales (Local - Cotton Sarees)'" },
  {
    step: 5,
    desc: "Add stock item: Cotton Printed Saree > Qty: 50 Pcs > Rate: ₹950",
  },
  {
    step: 6,
    desc: "GST auto-calculates: CGST ₹2,850 + SGST ₹2,850 = Total ₹53,200",
  },
  { step: 7, desc: "In Additional Details: Enter vehicle no. GJ-01-CD-5678" },
  { step: 8, desc: "Enter e-Way Bill No.: EWB/2024/0001240" },
  { step: 9, desc: "Enter distance: 232 km, destination: Ahmedabad" },
  {
    step: 10,
    desc: "Press Ctrl+A to save the sales entry. Invoice prints automatically.",
  },
];

const eWayBillInfo = [
  { rule: "Value Threshold", detail: "Required for goods movement > ₹50,000" },
  { rule: "Registration", detail: "Register at ewaybillgst.gov.in with GSTIN" },
  {
    rule: "Validity",
    detail: "1 day per 100 km. Distance 232 km = 3 days validity",
  },
  {
    rule: "Generation",
    detail:
      "Can generate from Tally Prime directly (if e-Way Bill enabled in F11)",
  },
  {
    rule: "Cancellation",
    detail: "Can cancel within 24 hours if goods not dispatched",
  },
  {
    rule: "Transporter",
    detail: "Transporter can also generate e-Way Bill using Transporter ID",
  },
];

const multipleItems = [
  {
    item: "Cotton Printed Saree (Plain)",
    qty: "30 Pcs",
    rate: "₹750",
    taxable: "₹22,500",
    cgst: "₹562.50",
    sgst: "₹562.50",
    total: "₹23,625",
  },
  {
    item: "Cotton Printed Saree (Designer)",
    qty: "20 Pcs",
    rate: "₹1,200",
    taxable: "₹24,000",
    cgst: "₹1,440",
    sgst: "₹1,440",
    total: "₹26,880",
  },
  {
    item: "Cotton Dress Material",
    qty: "50 Meters",
    rate: "₹120",
    taxable: "₹6,000",
    cgst: "₹150",
    sgst: "₹150",
    total: "₹6,300",
  },
];

export default function Section12SalesPurchaseBills() {
  return (
    <div className="space-y-8">
      {/* Purchase Bill */}
      <div>
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            🛋️
          </span>
          Purchase Bill — PB/2024-25/001
        </h3>
        <div className="rounded-xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-blue-600 text-white px-5 py-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">PURCHASE BILL</p>
                <p className="text-blue-100 text-sm">
                  Bill No.: PB/2024-25/001 · Date: 05-04-2024
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold">Vasudev Textile</p>
                <p className="text-blue-100 text-xs">GSTIN: 24AAABV1234C1ZX</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {purchaseBillFields.map((row, i) => (
                  <tr
                    key={row.field}
                    className={`border-b border-blue-100 ${i % 2 === 0 ? "bg-blue-50/30" : "bg-white"} ${
                      row.field.includes("Total Bill")
                        ? "bg-blue-100 font-bold"
                        : ""
                    }`}
                    data-ocid={`purchase-bill.row.${i + 1}`}
                  >
                    <td className="px-4 py-2.5 text-muted-foreground font-medium w-48">
                      {row.field}
                    </td>
                    <td
                      className={`px-4 py-2.5 font-medium ${row.field.includes("Total Bill") ? "text-blue-800 text-base font-bold" : "text-foreground"}`}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sales Bill */}
      <div>
        <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold">
            📝
          </span>
          Sales Bill — SB/2024-25/001
        </h3>
        <div className="rounded-xl border-2 border-green-200 overflow-hidden">
          <div className="bg-green-600 text-white px-5 py-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg">SALES INVOICE</p>
                <p className="text-green-100 text-sm">
                  Bill No.: SB/2024-25/001 · Date: 10-04-2024
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold">Vasudev Textile</p>
                <p className="text-green-100 text-xs">GSTIN: 24AAABV1234C1ZX</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {salesBillFields.map((row, i) => (
                  <tr
                    key={row.field}
                    className={`border-b border-green-100 ${i % 2 === 0 ? "bg-green-50/30" : "bg-white"} ${
                      row.field.includes("Total Bill")
                        ? "bg-green-100 font-bold"
                        : ""
                    }`}
                    data-ocid={`sales-bill.row.${i + 1}`}
                  >
                    <td className="px-4 py-2.5 text-muted-foreground font-medium w-48">
                      {row.field}
                    </td>
                    <td
                      className={`px-4 py-2.5 font-medium ${row.field.includes("Total Bill") ? "text-green-800 text-base font-bold" : "text-foreground"}`}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Multiple Items Bill */}
      <div>
        <h3 className="text-base font-bold text-foreground mb-4">
          Sales Bill with Multiple Items — SB/2024-25/002
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-primary/10">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                  Item Description
                </th>
                <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                  Qty
                </th>
                <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                  Rate (₹)
                </th>
                <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                  Taxable Value
                </th>
                <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                  CGST
                </th>
                <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                  SGST
                </th>
                <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                  Total (₹)
                </th>
              </tr>
            </thead>
            <tbody>
              {multipleItems.map((item, i) => (
                <tr
                  key={item.item}
                  className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                  data-ocid={`multi-bill.row.${i + 1}`}
                >
                  <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                    {item.item}
                  </td>
                  <td className="px-4 py-2.5 text-center border-b border-border/40">
                    {item.qty}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                    {item.rate}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                    {item.taxable}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-blue-700 border-b border-border/40">
                    {item.cgst}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono text-blue-700 border-b border-border/40">
                    {item.sgst}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono font-bold text-primary border-b border-border/40">
                    {item.total}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-primary/5">
              <tr>
                <td colSpan={3} className="px-4 py-3 text-right font-bold">
                  Grand Total:
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold">
                  ₹52,500
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-blue-700">
                  ₹2,152.50
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-blue-700">
                  ₹2,152.50
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-primary">
                  ₹56,805
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Tally Entry Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <TallyPath path="Gateway of Tally > Vouchers > F9 (Purchase)" />
          <h4 className="font-bold text-sm text-foreground mb-3">
            Purchase Entry Steps in Tally
          </h4>
          <div className="space-y-2">
            {purchaseEntrySteps.map((s) => (
              <div key={s.step} className="flex gap-3 items-start text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
                <span className="text-text-body">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <TallyPath path="Gateway of Tally > Vouchers > F8 (Sales)" />
          <h4 className="font-bold text-sm text-foreground mb-3">
            Sales Entry Steps in Tally
          </h4>
          <div className="space-y-2">
            {salesEntrySteps.map((s) => (
              <div key={s.step} className="flex gap-3 items-start text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
                <span className="text-text-body">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* e-Way Bill Info */}
      <div>
        <h3 className="text-base font-bold text-foreground mb-4">
          🚶 e-Way Bill Rules & Generation
        </h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-amber/20">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-amber/30">
                  Rule
                </th>
                <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-amber/30">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {eWayBillInfo.map((row, i) => (
                <tr
                  key={row.rule}
                  className={i % 2 === 0 ? "bg-card" : "bg-amber-light/50"}
                  data-ocid={`eway-bill.row.${i + 1}`}
                >
                  <td className="px-4 py-2.5 font-semibold text-amber border-b border-amber/20">
                    {row.rule}
                  </td>
                  <td className="px-4 py-2.5 text-text-body border-b border-amber/20">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg bg-success-light border border-success/30 p-5">
        <p className="text-sm font-bold text-foreground mb-2">
          ✅ Complete Bill Details Checklist
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            "Voucher Type (Purchase/Sales)",
            "Bill No. (Sequential)",
            "Date of Invoice",
            "Supplier/Customer Name",
            "City & State",
            "GSTIN of Both Parties",
            "Transport Mode",
            "Vehicle Number",
            "Distance (for e-Way Bill)",
            "e-Way Bill Number",
            "Item Description",
            "HSN Code per Item",
            "Quantity & Unit",
            "Rate per Unit",
            "Taxable Value",
            "CGST / SGST / IGST",
            "Total Invoice Value",
            "Payment Terms",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs text-text-body"
            >
              <span className="text-success font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

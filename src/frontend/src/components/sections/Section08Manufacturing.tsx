import TallyPath from "../TallyPath";

const bomSteps = [
  {
    step: 1,
    title: "Enable Manufacturing Journal",
    desc: "Go to F11 (Features) > Inventory Features > Enable Job Order Processing: Yes",
  },
  {
    step: 2,
    title: "Open Bill of Materials",
    desc: "Gateway of Tally > Inventory Info > Bill of Materials > Create",
  },
  {
    step: 3,
    title: "Select Finished Product",
    desc: 'Choose finished goods item: "Cotton Printed Saree" (1 Piece)',
  },
  {
    step: 4,
    title: "Add Raw Materials",
    desc: "List all raw materials required to produce 1 piece of Cotton Printed Saree",
  },
  {
    step: 5,
    title: "Enter Quantities",
    desc: "Enter exact quantities of each raw material (see BOM table below)",
  },
  {
    step: 6,
    title: "Save BOM",
    desc: "Press Ctrl+A to save. The BOM is now linked to the finished product.",
  },
];

const bom = [
  {
    material: "Grey Cotton Fabric",
    unit: "Meters",
    qty: "5.50",
    cost: "85",
    totalCost: "467.50",
    notes: "For one saree including edges",
  },
  {
    material: "Synthetic Dye",
    unit: "KG",
    qty: "0.05",
    cost: "350",
    totalCost: "17.50",
    notes: "Mixed for printing",
  },
  {
    material: "Chemical Fixative",
    unit: "KG",
    qty: "0.03",
    cost: "280",
    totalCost: "8.40",
    notes: "For color fixing",
  },
  {
    material: "Screen Printing Ink",
    unit: "KG",
    qty: "0.04",
    cost: "450",
    totalCost: "18.00",
    notes: "Pattern printing",
  },
  {
    material: "Cotton Thread & Accessories",
    unit: "Roll",
    qty: "0.01",
    cost: "180",
    totalCost: "1.80",
    notes: "Borders and finishing",
  },
  {
    material: "Polybag (Saree Pack)",
    unit: "Pcs",
    qty: "1.00",
    cost: "5",
    totalCost: "5.00",
    notes: "Final packing",
  },
];

const mfgJournalSteps = [
  {
    step: 1,
    title: "Open Manufacturing Journal",
    path: "Gateway of Tally > Vouchers > Alt+F7 (Manufacturing Journal)",
  },
  {
    step: 2,
    title: "Select Finished Product",
    path: "Choose product: Cotton Printed Saree",
  },
  {
    step: 3,
    title: "Enter Quantity",
    path: "Quantity to Manufacture: 100 Pieces",
  },
  {
    step: 4,
    title: "Set Date",
    path: "Enter manufacturing date (e.g., 15-Apr-2024)",
  },
  {
    step: 5,
    title: "Tally Auto-Fills Materials",
    path: "Tally loads BOM and shows raw materials required: 550m fabric, 5KG dye, 3KG fixative...",
  },
  {
    step: 6,
    title: "Verify Stock",
    path: "Check that sufficient raw material stock is available",
  },
  {
    step: 7,
    title: "Enter Labor/Overhead (Optional)",
    path: "Add additional costs if required (job work, wages)",
  },
  {
    step: 8,
    title: "Save Journal",
    path: "Press Ctrl+A to confirm. Raw materials auto-deducted, finished goods increased.",
  },
];

const bomTotal = bom.reduce((sum, item) => sum + Number(item.totalCost), 0);

const beforeStock = [
  {
    item: "Grey Cotton Fabric",
    before: "5,000 m",
    after: "4,450 m",
    change: "-550 m",
  },
  { item: "Synthetic Dye", before: "200 KG", after: "195 KG", change: "-5 KG" },
  {
    item: "Chemical Fixative",
    before: "100 KG",
    after: "97 KG",
    change: "-3 KG",
  },
  {
    item: "Screen Printing Ink",
    before: "150 KG",
    after: "146 KG",
    change: "-4 KG",
  },
  {
    item: "Polybag (Saree Pack)",
    before: "2,000 Pcs",
    after: "1,900 Pcs",
    change: "-100 Pcs",
  },
  {
    item: "Cotton Printed Saree",
    before: "300 Pcs",
    after: "400 Pcs",
    change: "+100 Pcs",
  },
];

export default function Section08Manufacturing() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > Inventory Info > Bill of Materials > Create" />

      <div className="bg-amber-light border border-amber rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground">
          🏭 What is Manufacturing Journal?
        </p>
        <p className="text-sm text-text-body mt-1">
          A Manufacturing Journal in Tally Prime allows you to record production
          activities. When you manufacture sarees, it automatically deducts raw
          materials from stock and adds finished goods — based on the Bill of
          Materials (BOM) you define.
        </p>
      </div>

      <h3 className="text-base font-bold text-foreground">
        Step 1: Create Bill of Materials (BOM)
      </h3>
      <div className="space-y-3">
        {bomSteps.map((s) => (
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

      <h3 className="text-base font-bold text-foreground mt-4">
        Bill of Materials — Cotton Printed Saree (1 Piece)
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                #
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Raw Material
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                Unit
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Qty per Saree
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Cost/Unit (₹)
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Cost/Saree (₹)
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {bom.map((item, i) => (
              <tr
                key={item.material}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`bom.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 text-muted-foreground border-b border-border/40">
                  {i + 1}
                </td>
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                  {item.material}
                </td>
                <td className="px-4 py-2.5 text-center text-muted-foreground border-b border-border/40">
                  {item.unit}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  {item.qty}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  ₹{item.cost}
                </td>
                <td className="px-4 py-2.5 text-right font-mono font-bold text-primary border-b border-border/40">
                  ₹{item.totalCost}
                </td>
                <td className="px-4 py-2.5 text-xs text-muted-foreground border-b border-border/40">
                  {item.notes}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-primary/5">
            <tr>
              <td
                colSpan={5}
                className="px-4 py-3 text-right font-bold text-foreground"
              >
                Total Raw Material Cost per Saree:
              </td>
              <td className="px-4 py-3 text-right font-mono font-bold text-primary">
                ₹{bomTotal.toFixed(2)}
              </td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        Step 2: Manufacturing Journal Entry (100 Sarees)
      </h3>
      <div className="space-y-3">
        {mfgJournalSteps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[oklch(0.65_0.14_145)] flex items-center justify-center">
              <span className="text-white text-xs font-bold">{s.step}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{s.title}</p>
              <code className="text-xs text-primary bg-tally-bg border border-tally-border rounded px-2 py-0.5 inline-block mt-1">
                {s.path}
              </code>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        Before & After Stock (Manufacturing 100 Sarees)
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Item
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Before Production
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                After Production
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {beforeStock.map((row, i) => (
              <tr
                key={row.item}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`mfg-stock.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                  {row.item}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  {row.before}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  {row.after}
                </td>
                <td
                  className={`px-4 py-2.5 text-right font-mono font-bold border-b border-border/40 ${row.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                >
                  {row.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

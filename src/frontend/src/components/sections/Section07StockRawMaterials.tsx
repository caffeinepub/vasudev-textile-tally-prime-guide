import TallyPath from "../TallyPath";

const stockGroups = [
  {
    name: "Raw Material",
    parent: "Primary",
    desc: "Basic inputs: grey fabric, dyes, chemicals",
  },
  {
    name: "Semi-Finished Goods",
    parent: "Primary",
    desc: "Fabric cut/printed but not fully processed",
  },
  {
    name: "Finished Goods",
    parent: "Primary",
    desc: "Ready-to-sell cotton printed sarees",
  },
  {
    name: "Packing Material",
    parent: "Primary",
    desc: "Polybags, boxes, labels for packaging",
  },
];

const stockItems = [
  {
    item: "Grey Cotton Fabric",
    group: "Raw Material",
    unit: "Meters",
    openQty: "5,000",
    rate: "85",
    openValue: "4,25,000",
    hsn: "5208",
  },
  {
    item: "Synthetic Dye",
    group: "Raw Material",
    unit: "KG",
    openQty: "200",
    rate: "350",
    openValue: "70,000",
    hsn: "3204",
  },
  {
    item: "Chemical Fixative",
    group: "Raw Material",
    unit: "KG",
    openQty: "100",
    rate: "280",
    openValue: "28,000",
    hsn: "3824",
  },
  {
    item: "Screen Printing Ink",
    group: "Raw Material",
    unit: "KG",
    openQty: "150",
    rate: "450",
    openValue: "67,500",
    hsn: "3215",
  },
  {
    item: "Cotton Thread & Accessories",
    group: "Raw Material",
    unit: "Roll",
    openQty: "50",
    rate: "180",
    openValue: "9,000",
    hsn: "5401",
  },
  {
    item: "Cotton Saree (Semi-Finished)",
    group: "Semi-Finished Goods",
    unit: "Pcs",
    openQty: "500",
    rate: "280",
    openValue: "1,40,000",
    hsn: "6211",
  },
  {
    item: "Cotton Printed Saree",
    group: "Finished Goods",
    unit: "Pcs",
    openQty: "300",
    rate: "750",
    openValue: "2,25,000",
    hsn: "6211",
  },
  {
    item: "Designer Cotton Saree",
    group: "Finished Goods",
    unit: "Pcs",
    openQty: "100",
    rate: "1,100",
    openValue: "1,10,000",
    hsn: "6211",
  },
  {
    item: "Polybag (Saree Pack)",
    group: "Packing Material",
    unit: "Pcs",
    openQty: "2,000",
    rate: "5",
    openValue: "10,000",
    hsn: "4819",
  },
  {
    item: "Box (Gift Pack)",
    group: "Packing Material",
    unit: "Pcs",
    openQty: "500",
    rate: "35",
    openValue: "17,500",
    hsn: "4819",
  },
  {
    item: "Price Tag / Labels",
    group: "Packing Material",
    unit: "Pcs",
    openQty: "3,000",
    rate: "1",
    openValue: "3,000",
    hsn: "4821",
  },
];

const createStockSteps = [
  {
    step: 1,
    action: "Create Stock Groups",
    path: "Gateway of Tally > Inventory Info > Stock Groups > Create",
    detail:
      "Create groups: Raw Material, Semi-Finished Goods, Finished Goods, Packing Material",
  },
  {
    step: 2,
    action: "Create Units of Measure",
    path: "Gateway of Tally > Inventory Info > Units of Measure > Create",
    detail: "Create: Meters (m), Kilograms (KG), Pieces (Pcs), Rolls",
  },
  {
    step: 3,
    action: "Create Stock Items",
    path: "Gateway of Tally > Inventory Info > Stock Items > Create",
    detail:
      "Enter item name, select group, select unit, set HSN code and GST rate",
  },
  {
    step: 4,
    action: "Enter Opening Stock",
    path: "Opening Stock Entry via F7 Journal on 01-Apr-2024",
    detail:
      "Credit Trading A/c, Debit each stock item with opening quantity and value",
  },
  {
    step: 5,
    action: "Set Godown (Optional)",
    path: "Gateway of Tally > Inventory Info > Godowns > Create",
    detail: "Create godowns: Main Warehouse, Showroom Floor, Dispatch Area",
  },
  {
    step: 6,
    action: "Enable Stock Valuation",
    path: "F11 Features > Inventory Features",
    detail:
      "Set Valuation Method: FIFO or Weighted Average (recommended: Weighted Average)",
  },
];

const groupColors: Record<string, string> = {
  "Raw Material": "bg-blue-100 text-blue-800",
  "Semi-Finished Goods": "bg-yellow-100 text-yellow-800",
  "Finished Goods": "bg-green-100 text-green-800",
  "Packing Material": "bg-purple-100 text-purple-800",
};

const totalValue = stockItems.reduce(
  (sum, item) => sum + Number(item.openValue.replace(/,/g, "")),
  0,
);

export default function Section07StockRawMaterials() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > Inventory Info > Stock Groups > Create" />

      <h3 className="text-base font-bold text-foreground">Stock Setup Steps</h3>
      <div className="space-y-3">
        {createStockSteps.map((s) => (
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
                  {s.action}
                </p>
                <code className="text-xs bg-tally-bg border border-tally-border rounded px-2 py-0.5 inline-block mt-1 text-primary">
                  {s.path}
                </code>
                <p className="text-sm text-muted-foreground mt-1.5">
                  {s.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">Stock Groups</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stockGroups.map((g) => (
          <div
            key={g.name}
            className={`rounded-lg p-4 border ${g.name === "Raw Material" ? "border-blue-200" : g.name === "Semi-Finished Goods" ? "border-yellow-200" : g.name === "Finished Goods" ? "border-green-200" : "border-purple-200"}`}
          >
            <p className={`font-bold text-sm ${groupColors[g.name]}`}>
              {g.name}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{g.desc}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Parent: <span className="font-medium">{g.parent}</span>
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        Opening Stock — Complete List
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                #
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Item Name
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Group
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                Unit
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Opening Qty
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Rate/Unit (₹)
              </th>
              <th className="text-right px-4 py-3 font-semibold text-foreground border-b border-border">
                Value (₹)
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                HSN
              </th>
            </tr>
          </thead>
          <tbody>
            {stockItems.map((item, i) => (
              <tr
                key={item.item}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`stock.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 text-muted-foreground text-xs border-b border-border/40">
                  {i + 1}
                </td>
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                  {item.item}
                </td>
                <td className="px-4 py-2.5 border-b border-border/40">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${groupColors[item.group]}`}
                  >
                    {item.group}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center text-muted-foreground border-b border-border/40">
                  {item.unit}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  {item.openQty}
                </td>
                <td className="px-4 py-2.5 text-right font-mono border-b border-border/40">
                  ₹{item.rate}
                </td>
                <td className="px-4 py-2.5 text-right font-mono font-bold text-primary border-b border-border/40">
                  ₹{item.openValue}
                </td>
                <td className="px-4 py-2.5 text-center font-mono text-xs text-muted-foreground border-b border-border/40">
                  {item.hsn}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-primary/5">
            <tr>
              <td
                colSpan={6}
                className="px-4 py-3 text-right font-bold text-foreground"
              >
                Total Opening Stock Value:
              </td>
              <td className="px-4 py-3 text-right font-mono font-bold text-primary">
                ₹{totalValue.toLocaleString("en-IN")}
              </td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

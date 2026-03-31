import TallyPath from "../TallyPath";

const hsnItems = [
  {
    item: "Cotton Printed Saree (< ₹1000)",
    hsn: "6211",
    gst: "5%",
    cgst: "2.5%",
    sgst: "2.5%",
    igst: "5%",
    category: "Finished Goods",
  },
  {
    item: "Cotton Printed Saree (> ₹1000)",
    hsn: "6211",
    gst: "12%",
    cgst: "6%",
    sgst: "6%",
    igst: "12%",
    category: "Finished Goods",
  },
  {
    item: "Grey Cotton Fabric",
    hsn: "5208",
    gst: "5%",
    cgst: "2.5%",
    sgst: "2.5%",
    igst: "5%",
    category: "Raw Material",
  },
  {
    item: "Cotton Dress Material",
    hsn: "5208",
    gst: "5%",
    cgst: "2.5%",
    sgst: "2.5%",
    igst: "5%",
    category: "Raw Material",
  },
  {
    item: "Synthetic Dye",
    hsn: "3204",
    gst: "18%",
    cgst: "9%",
    sgst: "9%",
    igst: "18%",
    category: "Raw Material",
  },
  {
    item: "Chemical Fixative",
    hsn: "3824",
    gst: "18%",
    cgst: "9%",
    sgst: "9%",
    igst: "18%",
    category: "Raw Material",
  },
  {
    item: "Screen Printing Ink",
    hsn: "3215",
    gst: "18%",
    cgst: "9%",
    sgst: "9%",
    igst: "18%",
    category: "Raw Material",
  },
  {
    item: "Polybag (Saree Pack)",
    hsn: "4819",
    gst: "12%",
    cgst: "6%",
    sgst: "6%",
    igst: "12%",
    category: "Packing Material",
  },
  {
    item: "Box (Gift Pack)",
    hsn: "4819",
    gst: "12%",
    cgst: "6%",
    sgst: "6%",
    igst: "12%",
    category: "Packing Material",
  },
  {
    item: "Cotton Thread & Accessories",
    hsn: "5401",
    gst: "12%",
    cgst: "6%",
    sgst: "6%",
    igst: "12%",
    category: "Raw Material",
  },
];

const stockItemSteps = [
  {
    step: 1,
    title: "Open Stock Items",
    desc: "Gateway of Tally > Inventory Info > Stock Items > Create",
  },
  {
    step: 2,
    title: "Enter Item Name",
    desc: 'Enter the stock item name (e.g., "Cotton Printed Saree")',
  },
  {
    step: 3,
    title: "Select Stock Group",
    desc: "Choose the appropriate group: Raw Material / Finished Goods / Packing Material",
  },
  {
    step: 4,
    title: "Set Units of Measurement",
    desc: "Select unit: Meters (for fabric), KG (for chemicals), Pcs/Nos (for sarees, boxes)",
  },
  {
    step: 5,
    title: "Set HSN/SAC Code",
    desc: 'Under "Statutory Information", enter HSN Code (e.g., 6211 for cotton sarees)',
  },
  {
    step: 6,
    title: "Set GST Rate",
    desc: 'Set "GST Applicable: Yes", "Taxability: Taxable", enter the GST slab rate',
  },
  {
    step: 7,
    title: "Set CGST/SGST",
    desc: "Tally auto-splits GST into CGST + SGST (local) or IGST (interstate)",
  },
  {
    step: 8,
    title: "Enter Opening Quantity & Rate",
    desc: "Enter opening stock quantity and rate per unit for the beginning of the year",
  },
  {
    step: 9,
    title: "Save Stock Item",
    desc: "Press Ctrl+A to save. Repeat for each item.",
  },
];

const gstSlabSteps = [
  {
    step: 1,
    action: "Open GST Rate Configuration",
    detail:
      "Gateway of Tally > F11 Features > Enable GST > Set/Alter GST Rate Details",
  },
  {
    step: 2,
    action: "Create GST Classification",
    detail:
      'You can create classifications like "Cotton Saree 5%", "Cotton Saree 12%", "Chemical 18%"',
  },
  {
    step: 3,
    action: "Set Nature of Transaction",
    detail:
      "For each voucher, set: Purchase Taxable, Sale Taxable, Interstate Sale, Export",
  },
  {
    step: 4,
    action: "Configure Tax Ledgers",
    detail:
      "Create separate ledgers: CGST Output, SGST Output, IGST Output, CGST Input, SGST Input, IGST Input",
  },
  {
    step: 5,
    action: "Link GST to Stock Items",
    detail:
      "Each stock item must have HSN code and GST % linked. Tally uses this to auto-calculate tax.",
  },
  {
    step: 6,
    action: "Test Entry",
    detail:
      "Create a test sales voucher and verify GST is auto-calculated correctly",
  },
];

const gstRateColors: Record<string, string> = {
  "5%": "bg-green-100 text-green-800",
  "12%": "bg-yellow-100 text-yellow-800",
  "18%": "bg-orange-100 text-orange-800",
};

const categoryColors: Record<string, string> = {
  "Finished Goods": "bg-blue-100 text-blue-800",
  "Raw Material": "bg-purple-100 text-purple-800",
  "Packing Material": "bg-teal-100 text-teal-800",
};

export default function Section06GSTHSNSetup() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > Inventory Info > Stock Items > Create/Alter" />

      <div className="bg-amber-light border border-amber rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          📋 GST Rate Summary for Vasudev Textile
        </p>
        <div className="grid grid-cols-3 gap-3 mt-2">
          <div className="bg-white rounded-lg p-3 border border-green-200">
            <p className="text-2xl font-bold text-green-700">5%</p>
            <p className="text-xs text-muted-foreground mt-1">
              Cotton sarees &lt; ₹1000 &amp; grey fabric
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-yellow-200">
            <p className="text-2xl font-bold text-yellow-700">12%</p>
            <p className="text-xs text-muted-foreground mt-1">
              Cotton sarees &gt; ₹1000 &amp; packing
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-orange-200">
            <p className="text-2xl font-bold text-orange-700">18%</p>
            <p className="text-xs text-muted-foreground mt-1">
              Dyes, chemicals, printing ink
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-base font-bold text-foreground">
        HSN Code & GST Rate Setup — Step by Step
      </h3>
      <div className="space-y-3">
        {stockItemSteps.map((s) => (
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
        GST Slab Configuration Steps
      </h3>
      <div className="space-y-3">
        {gstSlabSteps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[oklch(0.65_0.14_145)] flex items-center justify-center">
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

      <h3 className="text-base font-bold text-foreground mt-4">
        Stock Item HSN & GST Rate Table
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
                Category
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                HSN Code
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                GST %
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                CGST
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                SGST
              </th>
              <th className="text-center px-4 py-3 font-semibold text-foreground border-b border-border">
                IGST
              </th>
            </tr>
          </thead>
          <tbody>
            {hsnItems.map((row, i) => (
              <tr
                key={row.item}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                data-ocid={`hsn-items.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 text-muted-foreground text-xs border-b border-border/40">
                  {i + 1}
                </td>
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/40">
                  {row.item}
                </td>
                <td className="px-4 py-2.5 border-b border-border/40">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[row.category]}`}
                  >
                    {row.category}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center font-mono font-bold text-primary border-b border-border/40">
                  {row.hsn}
                </td>
                <td className="px-4 py-2.5 text-center border-b border-border/40">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${gstRateColors[row.gst]}`}
                  >
                    {row.gst}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-center text-muted-foreground border-b border-border/40">
                  {row.cgst}
                </td>
                <td className="px-4 py-2.5 text-center text-muted-foreground border-b border-border/40">
                  {row.sgst}
                </td>
                <td className="px-4 py-2.5 text-center text-muted-foreground border-b border-border/40">
                  {row.igst}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

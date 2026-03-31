const processSteps = [
  {
    step: "1",
    name: "Grey Fabric Procurement",
    desc: "Purchase raw grey cotton fabric from mills in Surat, Ahmedabad, and local suppliers.",
  },
  {
    step: "2",
    name: "Screen Printing",
    desc: "Apply designs using screen printing technique with synthetic dyes and chemical fixatives.",
  },
  {
    step: "3",
    name: "Washing & Processing",
    desc: "Wash printed fabric to fix colors; remove excess dye and chemicals.",
  },
  {
    step: "4",
    name: "Finishing",
    desc: "Iron, fold, and check quality of each saree. Apply border work if required.",
  },
  {
    step: "5",
    name: "Packaging",
    desc: "Fold sarees neatly, pack in polybags or gift boxes, label with price tags and design codes.",
  },
  {
    step: "6",
    name: "Sales & Dispatch",
    desc: "Sell to wholesale traders (B2B) and retail shops (B2C). Dispatch via road transport.",
  },
];

const rawMaterials = [
  {
    item: "Grey Cotton Fabric",
    unit: "Meters",
    supplier: "Surat, Ahmedabad mills",
    gst: "5%",
  },
  {
    item: "Synthetic Dyes",
    unit: "KG",
    supplier: "Chemical suppliers, Gujarat",
    gst: "18%",
  },
  {
    item: "Chemical Fixative",
    unit: "KG",
    supplier: "Chemical suppliers, Gujarat",
    gst: "18%",
  },
  {
    item: "Screen Printing Ink",
    unit: "KG",
    supplier: "Ahmedabad, Mumbai",
    gst: "18%",
  },
  {
    item: "Polybags (Packing)",
    unit: "Pieces",
    supplier: "Local packing suppliers",
    gst: "12%",
  },
  {
    item: "Gift Boxes",
    unit: "Pieces",
    supplier: "Local packing suppliers",
    gst: "12%",
  },
  {
    item: "Thread & Accessories",
    unit: "Pieces/Roll",
    supplier: "Surat, local",
    gst: "5%",
  },
];

const hsnCodes = [
  {
    product: "Cotton Printed Sarees (< ₹1000)",
    hsn: "6211",
    gst: "5%",
    cgst: "2.5%",
    sgst: "2.5%",
  },
  {
    product: "Cotton Printed Sarees (> ₹1000)",
    hsn: "6211",
    gst: "12%",
    cgst: "6%",
    sgst: "6%",
  },
  {
    product: "Grey Cotton Fabric",
    hsn: "5208",
    gst: "5%",
    cgst: "2.5%",
    sgst: "2.5%",
  },
  {
    product: "Saree Dress Material",
    hsn: "5208",
    gst: "5%",
    cgst: "2.5%",
    sgst: "2.5%",
  },
  {
    product: "Synthetic Dyes",
    hsn: "3204",
    gst: "18%",
    cgst: "9%",
    sgst: "9%",
  },
  {
    product: "Packing Material",
    hsn: "4819",
    gst: "12%",
    cgst: "6%",
    sgst: "6%",
  },
];

export default function Section03BusinessOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-border bg-card p-5">
          <h3 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
            <span className="text-xl">🏭</span> Company Profile
          </h3>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Company Name</dt>
              <dd className="font-semibold text-foreground">Vasudev Textile</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Address</dt>
              <dd className="font-semibold text-right">
                Triveni Print, Dhoraji Road, Jetpur
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">City</dt>
              <dd className="font-semibold">Jetpur</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">District</dt>
              <dd className="font-semibold">Rajkot</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">State</dt>
              <dd className="font-semibold">Gujarat</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Country</dt>
              <dd className="font-semibold">India</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">PIN Code</dt>
              <dd className="font-semibold">360370</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <h3 className="font-bold text-base text-foreground mb-3 flex items-center gap-2">
            <span className="text-xl">📍</span> About Jetpur
          </h3>
          <p className="text-sm text-text-body leading-relaxed">
            Jetpur is located in Rajkot district, Gujarat, and is renowned as
            the <strong>"Saree City of India"</strong>. It is the largest center
            for printed sarees and dress materials in Asia. The town has over
            5,000 printing units producing millions of meters of fabric
            annually.
          </p>
          <p className="text-sm text-text-body leading-relaxed mt-2">
            Vasudev Textile is a manufacturing unit in Jetpur, specializing in{" "}
            <strong>cotton printed sarees</strong>
            sold to wholesale traders and retail shops across India.
          </p>
        </div>
      </div>

      <h3 className="text-base font-bold text-foreground">
        Manufacturing Process — Step by Step
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {processSteps.map((s) => (
          <div
            key={s.step}
            className="rounded-lg border border-border bg-card p-4 flex gap-3"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">{s.step}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        Raw Materials Used
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Raw Material
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Unit
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Source
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                GST Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {rawMaterials.map((row, i) => (
              <tr
                key={row.item}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                data-ocid={`raw-materials.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/50">
                  {row.item}
                </td>
                <td className="px-4 py-2.5 text-text-body border-b border-border/50">
                  {row.unit}
                </td>
                <td className="px-4 py-2.5 text-text-body border-b border-border/50">
                  {row.supplier}
                </td>
                <td className="px-4 py-2.5 border-b border-border/50">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    {row.gst}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-base font-bold text-foreground mt-4">
        HSN Codes & Tax Rates
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Product
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                HSN Code
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Total GST
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                CGST
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                SGST
              </th>
            </tr>
          </thead>
          <tbody>
            {hsnCodes.map((row, i) => (
              <tr
                key={row.product}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                data-ocid={`hsn.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/50">
                  {row.product}
                </td>
                <td className="px-4 py-2.5 font-mono font-bold text-primary border-b border-border/50">
                  {row.hsn}
                </td>
                <td className="px-4 py-2.5 border-b border-border/50">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
                    {row.gst}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-text-body border-b border-border/50">
                  {row.cgst}
                </td>
                <td className="px-4 py-2.5 text-text-body border-b border-border/50">
                  {row.sgst}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

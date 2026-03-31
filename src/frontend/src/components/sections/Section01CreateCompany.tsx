import TallyPath from "../TallyPath";

const steps = [
  {
    step: 1,
    action: "Open Tally Prime",
    detail:
      "Double-click the Tally Prime icon on your desktop to launch the software.",
  },
  {
    step: 2,
    action: "Access Company Menu",
    detail:
      "Press F3 (Company) on the Gateway of Tally screen, or click the Company button in the top menu.",
  },
  {
    step: 3,
    action: "Select Create Company",
    detail:
      'From the Company menu, select "Create Company" to open the company creation form.',
  },
  { step: 4, action: "Enter Company Name", detail: "Type: Vasudev Textile" },
  {
    step: 5,
    action: "Enter Mailing Name",
    detail: "Mailing Name: Vasudev Textile (same as company name)",
  },
  {
    step: 6,
    action: "Enter Address Line 1",
    detail: "Address Line 1: Triveni Print",
  },
  {
    step: 7,
    action: "Enter Address Line 2",
    detail: "Address Line 2: Dhoraji Road, Jetpur",
  },
  { step: 8, action: "Enter City", detail: "City: Jetpur" },
  {
    step: 9,
    action: "Select State",
    detail: "State: Gujarat (press G for quick selection)",
  },
  { step: 10, action: "Select Country", detail: "Country: India" },
  { step: 11, action: "Enter PIN Code", detail: "PIN Code: 360370" },
  {
    step: 12,
    action: "Enter Phone Number",
    detail: "Phone: 02823-XXXXXX (enter your company phone number)",
  },
  {
    step: 13,
    action: "Enter Email",
    detail: "Email: vasudevtextile@gmail.com (enter company email)",
  },
  {
    step: 14,
    action: "Set Currency",
    detail: "Currency Symbol: ₹ — Base Currency: INR (Indian Rupee)",
  },
  {
    step: 15,
    action: "Set Maintain Mode",
    detail: "Maintain: Accounts with Inventory (for stock management)",
  },
  {
    step: 16,
    action: "Set Financial Year",
    detail: "Financial Year Beginning From: 01-04-2024",
  },
  {
    step: 17,
    action: "Set Books Beginning",
    detail: "Books Beginning From: 01-04-2024",
  },
  {
    step: 18,
    action: "Tally Vault Password",
    detail:
      "Tally Vault Password: (Leave blank or set a password to encrypt data)",
  },
  {
    step: 19,
    action: "Security Control",
    detail: "Use Security Control: Yes — Admin User: Admin",
  },
  {
    step: 20,
    action: "Save Company",
    detail: "Press Ctrl+A or click Accept to save the company configuration.",
  },
];

const companyDetails = [
  { field: "Company Name", value: "Vasudev Textile" },
  { field: "Mailing Name", value: "Vasudev Textile" },
  { field: "Address Line 1", value: "Triveni Print" },
  { field: "Address Line 2", value: "Dhoraji Road, Jetpur" },
  { field: "City", value: "Jetpur" },
  { field: "District", value: "Rajkot" },
  { field: "State", value: "Gujarat" },
  { field: "Country", value: "India" },
  { field: "PIN Code", value: "360370" },
  { field: "Phone", value: "02823-XXXXXX" },
  { field: "Email", value: "vasudevtextile@gmail.com" },
  { field: "Currency", value: "₹ INR (Indian Rupee)" },
  { field: "Maintain", value: "Accounts with Inventory" },
  { field: "Financial Year From", value: "01-04-2024" },
  { field: "Books Beginning From", value: "01-04-2024" },
  { field: "Security Control", value: "Yes — Admin User: Admin" },
];

export default function Section01CreateCompany() {
  return (
    <div className="space-y-6">
      <TallyPath path="Gateway of Tally > F3 (Company) > Create Company" />

      <div className="bg-amber-light border border-amber rounded-lg p-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          ℹ️ Before You Begin
        </p>
        <p className="text-sm text-text-body">
          Make sure Tally Prime is installed and activated with a valid license.
          You need to create the company only once. All accounting entries will
          be made under this company.
        </p>
      </div>

      <h3 className="text-base font-bold text-foreground">
        Step-by-Step Instructions
      </h3>
      <div className="space-y-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="flex gap-4 items-start p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold">{s.step}</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground">
                {s.action}
              </p>
              <p className="text-sm text-text-body mt-0.5">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-base font-bold text-foreground mt-8">
        Company Details — Reference Table
      </h3>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-primary/10">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Field Name
              </th>
              <th className="text-left px-4 py-3 font-semibold text-foreground border-b border-border">
                Value to Enter
              </th>
            </tr>
          </thead>
          <tbody>
            {companyDetails.map((row, i) => (
              <tr
                key={row.field}
                className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}
                data-ocid={`company.row.${i + 1}`}
              >
                <td className="px-4 py-2.5 font-medium text-foreground border-b border-border/50">
                  {row.field}
                </td>
                <td className="px-4 py-2.5 text-primary font-medium border-b border-border/50">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg bg-success-light border border-success/30 p-4 mt-4">
        <p className="text-sm font-semibold text-foreground mb-1">
          ✅ Company Created Successfully
        </p>
        <p className="text-sm text-text-body">
          After pressing Ctrl+A, Tally will save the company and take you to the
          Gateway of Tally for Vasudev Textile. You can now begin entering
          transactions and configuring features.
        </p>
      </div>
    </div>
  );
}

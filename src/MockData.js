export const MOCK_USER_DATA = {
  "verified@complisense.com": {
    name: "Vinod Kumar",
    status: "VERIFIED",
    transactions: [
      { id: "TX1092", amount: "₹12,400", status: "Clean", color: "#2A9D8F" },
      { id: "TX1093", amount: "₹8,09,000", status: "Flagged", color: "#E63946" }
    ]
  },
  "rejected@complisense.com": {
    name: "Pallavi Mulik",
    status: "REJECTED",
    reasons: ["Blurry Document", "Face Mismatch"],
    transactions: [
      { id: "TX3002", amount: "₹2,400", status: "Clean", color: "#2A9D8F" },
      { id: "TX5090", amount: "₹26,800", status: "Clean", color: "#2A9D8F" }
    ]
  },
  admin: {
    highRisk: [{ name: "Mark Hunt", flags: 12 }, { name: "Sarah Lee", flags: 15 }],
    medRisk: [{ name: "Peter Parker", flags: 6 }],
    lowRisk: [{ name: "Bruce Wayne", flags: 2 }]
  }
};
# ☁️ Cloud Cost Monitoring Dashboard

A full-stack application for **real-time visualization and monitoring** of AWS cloud costs. Designed for DevOps teams, cloud engineers, and finance departments, this dashboard provides actionable insights, budget alerts, and reporting tools to help manage AWS billing effectively.

---

## 🚀 Features

- 📈 View **total AWS costs** by day/week/month
- 🧮 Break down costs by AWS **service** (e.g., EC2, S3, Lambda)
- 🔔 Set **budget thresholds** with alerts (Email/SMS)
- 📤 Export reports to **PDF or CSV** (optional)
- 📬 Integrates with **AWS SNS** for notifications
- 🔐 Simple **token-based or IAM-based authentication**

---

## 🛠 Tech Stack

| Layer      | Technology                             |
|------------|-----------------------------------------|
| Frontend   | React, Recharts                        |
| Backend    | Node.js, Express, AWS Lambda           |
| AWS APIs   | Cost Explorer, CloudWatch, SNS, IAM    |
| Storage    | DynamoDB (optional - for cost history) |
| Infra as Code | Serverless Framework or Terraform    |
| Auth       | AWS IAM or Bearer Token                |

---

## 🧱 Architecture Overview

```
[ React Dashboard ]
        ↓
[ API Gateway (HTTPS) ]
        ↓
[ AWS Lambda (Node.js) ]
        ↓
[ AWS Cost Explorer ]
        ↓
[ SNS Alerts / DynamoDB (optional) ]
```

---

## 📁 Project Structure

```
cloud-cost-dashboard/
├── backend/                 # AWS Lambda (Serverless) backend
│   ├── handler.js
│   ├── serverless.yml
│   ├── package.json
│   └── .env.example
├── frontend/                # React dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── public/
│   ├── package.json
│   └── .env.example
├── shared/                 # Shared utilities and logic
│   ├── alerts/budgetAlert.js
│   └── utils/costParser.js
├── terraform/              # Optional: Terraform version of infrastructure
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
└── README.md
```

---

## ⚙️ Installation & Setup

### ✅ Prerequisites

- Node.js ≥ 16
- NPM or Yarn
- AWS Account
- AWS IAM user with `ce:GetCostAndUsage` and `sns:Publish` permissions
- Serverless Framework:
  ```bash
  npm install -g serverless
  ```

---

### 1️⃣ Backend (AWS Lambda)

```bash
cd backend
cp .env.example .env
npm install
serverless deploy
```

> After deployment, note the API URL:  
> `https://<random>.execute-api.<region>.amazonaws.com/dev`

---

### 2️⃣ Frontend (React)

```bash
cd frontend
cp .env.example .env
# Paste your backend API URL in .env
npm install
npm start
```

Access the dashboard at: `http://localhost:3000`

---

## 📤 Budget Alerts (via SNS)

To receive alerts:

1. Update `handler.js` or `budgetAlert.js` with your SNS Topic ARN.
2. Subscribe your email or phone number to the topic.
3. Set your budget threshold in code or use AWS Budgets.

---

## 📦 Optional: Terraform Support

If you prefer Terraform for infrastructure:

```bash
cd terraform
terraform init
terraform apply
```

Update `variables.tf` as needed for IAM, SNS, and budget thresholds.

---

## 🧪 Testing

You can test locally using:

```bash
serverless offline
```

Or deploy and test via API Gateway endpoint.

---

## 📘 Sample API Response

```json
{
  "ResultsByTime": [
    {
      "TimePeriod": { "Start": "2024-07-01", "End": "2024-07-02" },
      "Total": {
        "UnblendedCost": { "Amount": "12.345", "Unit": "USD" }
      }
    }
  ]
}
```

---

## 👨‍💻 Author

**Anthony Okeke**  
🌍 Software Engineer & DevOps Consultant  
📧 cyberokeke@gmail.com


---

## 📝 License

This project is licensed under the MIT License.

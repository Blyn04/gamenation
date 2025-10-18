# 🚀 Automatic Email Setup Guide

## 📧 Get Automatic Email Sending Working

To receive **automatic emails** in your Gmail inbox when you make purchases, follow these steps:

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE)
3. Verify your email address

### **Step 2: Connect Gmail**
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your Gmail account (nulsnumoa@gmail.com)
5. **Copy the Service ID** (looks like `service_xxxxxxx`)

### **Step 3: Create Email Template**
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** `{{subject}}`

**Content:**
```
Dear {{to_name}},

{{message}}

Best regards,
{{from_name}}
```

4. **Copy the Template ID** (looks like `template_xxxxxxx`)

### **Step 4: Get Public Key**
1. Go to "Account" → "General"
2. **Copy your Public Key** (looks like `xxxxxxxxxxxxxxxx`)

### **Step 5: Update Your Code**
Replace these values in `src/services/emailService.js`:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

### **Step 6: Test It!**
1. Make a test purchase
2. Check your Gmail inbox
3. You should receive the confirmation email automatically!

## ✅ **What You'll Get:**

- **AUTOMATIC emails** sent to your Gmail inbox
- **NO backend required** - pure frontend solution
- **FREE** - EmailJS free tier (200 emails/month)
- **INSTANT** - Emails sent immediately after purchase

## 🎯 **Result:**

Once set up, when you make a purchase:
1. **System processes** → Purchase completes
2. **Email sent automatically** → FROM nulsnumoa@gmail.com TO your email
3. **You receive email** → In your Gmail inbox immediately!

## 🆓 **Free Tier:**
- 200 emails per month
- Perfect for testing and small applications
- No credit card required

## ⚡ **Quick Setup Time:**
- **5-10 minutes** total setup time
- **One-time configuration**
- **Works forever** after setup

# 🔑 How to Get EmailJS Keys - STEP BY STEP

## 📧 Get Your EmailJS Configuration Values

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Use your email and create password
4. **VERIFY your email** (check your inbox)

### **Step 2: Get SERVICE ID**
1. After login, click **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"**
5. Login with **nulsnumoa@gmail.com** (or your Gmail)
6. **COPY the Service ID** - it looks like `service_xxxxxxxxx`

### **Step 3: Get TEMPLATE ID**
1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. **Template Name:** `Purchase Confirmation`
4. **Subject:** `{{subject}}`
5. **Content:**
```
Dear {{to_name}},

{{message}}

Best regards,
{{from_name}}
```
6. Click **"Save"**
7. **COPY the Template ID** - it looks like `template_xxxxxxxxx`

### **Step 4: Get PUBLIC KEY**
1. Click **"Account"** in the left menu
2. Click **"General"** tab
3. Find **"Public Key"** section
4. **COPY the Public Key** - it looks like `xxxxxxxxxxxxxxxx`

### **Step 5: Update Your Code**
Replace these lines in `src/services/emailService.js`:

```javascript
// REPLACE THESE VALUES:
const EMAILJS_SERVICE_ID = 'service_xxxxxxxxx';  // ← Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxx'; // ← Your Template ID  
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx';   // ← Your Public Key
```

## 🎯 **Example:**
If your values are:
- Service ID: `service_abc123`
- Template ID: `template_xyz789`
- Public Key: `user_1234567890abcdef`

Then your code should be:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'user_1234567890abcdef';
```

## ✅ **Test It:**
1. Save the file
2. Make a test purchase
3. Check your Gmail inbox
4. You should receive the email automatically!

## 🆓 **It's FREE:**
- No credit card required
- 200 emails per month
- Perfect for testing

## ⚡ **Total Time: 5 minutes**

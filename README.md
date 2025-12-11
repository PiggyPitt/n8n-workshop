# n8n-workshop

# 🔧 สร้าง LINE Provider + Messaging API Channel ชื่อ **`n8n workshop`** และขอ Long-Lived Channel Access Token

คู่มือนี้จะอธิบายทีละขั้นตอนสำหรับผู้ที่ **ยังไม่เคยมี Provider / Channel มาก่อน**  
หลังจากทำครบ คุณจะได้:

- Provider: `n8n workshop`
- Messaging API Channel: `n8n workshop`
- Channel ID
- Channel Secret
- Channel Access Token (Long-Lived)

> 💡 สำหรับใช้ใน workshop n8n: ส่งข้อความจาก workflow ไปที่ LINE

---

## 1️⃣ เข้า LINE Developers Console

1. เปิดเบราว์เซอร์ ไปที่:  
   👉 https://developers.line.biz/console/
2. Login ด้วย LINE account ของคุณ

> ถ้าเข้าถูกหน้าจะเห็นหน้า Dashboard ที่มีรายการ Provider (ถ้ายังไม่เคยสร้างจะยังว่างอยู่)

---

## 2️⃣ สร้าง Provider ชื่อ **`n8n workshop`**

1. ที่มุมซ้ายบน กดปุ่ม **Create**  
2. ในช่อง **Provider name** ให้กรอก: `n8n workshop` หรือ อะไรก็ได้ตามสะดวก
3. คลิกเข้าไปที่ Provider ที่สร้างใหม่
4. คลิกปุ่ม **Create a new channel**
5. เลือก **Messaging API**
6. คลิกปุ่ม **Create a LINE Official Account**
7. กรอกข้อมูล ชื่อบัญชี `n8n workshop` หรือ อะไรก็ได้ตามสะดวก email, country and buiness และคลิกตกลง
8. ตรวจสอบข้อมูลและสร้าง Channel รอให้ LINE สร้าง Channel ให้
9. คลิก ไปที่ **Line Official Account Manager**
10. อ่านข้อตกลงเกี่ยวกับการใช้ข้อมูลและกดยอมรับ
11. คลิกที่ **Settings** ที่มุมขวาบน
12. คลิกที่ **Messaging API** ใน Navigation bar ด้านซ้าย
13. คลิก **Enable Messaging API** แล้วเลือก Provider ที่สร้างใหม่
14. กลับไปที่ Line Developers Console คลิกที่ Label **Line Developers Console** สีเขียวด้านล่าง
15. คลิกที่ **Messaging API** ที่เพิ่งสร้างมาใหม่
16. คลิกที่ Tab **Messaging API** เลื่อนลงไปด้านล่างสุด จะเห็นเมนู **Channel access token (long-lived)**
17. คลิกที่ **Issue** แล้วก็จะได้ Long-Lived Channel Access Token แล้วก็ Copy ไว้


# n8n-workshop

# 🔧 Create LINE Provider + Messaging API Channel Named **`n8n workshop`** and Generate a Long-Lived Channel Access Token

This guide explains every step for participants who **have never created a Provider or Messaging API channel before**.  
After completing all steps, you will have:

- Provider: `n8n workshop`
- Messaging API Channel: `n8n workshop`
- Channel ID
- Channel Secret
- Long-Lived Channel Access Token

> 💡 This setup allows your n8n workflow to send notifications to LINE using the Messaging API.

---

## 1️⃣ Access LINE Developers Console

1. Open your browser and go to:  
   👉 https://developers.line.biz/console/
2. Log in using your LINE account.

> If everything is correct, you will see your Provider list (it may be empty if this is your first time).

---

## 2️⃣ Create a Provider Named **`n8n workshop`**

1. Click the **Create** button in the top-left corner.
2. In **Provider name**, enter: `n8n workshop` (You may choose any name you prefer.)
3. Click the Provider you just created.

---

## 3️⃣ Create a Messaging API Channel

Inside the Provider you created:

1. Click **Create a new channel**.
2. Select **Messaging API**.
3. Click **Create a LINE Official Account**.
4. Fill in the required information:

   - **Account name:**  
     `n8n workshop` (You may choose any name you prefer.)
   - **Email**
   - **Country / Region**
   - **Business type**

5. Click **OK**.
6. Review the details and proceed to create the Channel.
7. Wait until LINE completes the Channel setup.

---

## 4️⃣ Open LINE Official Account Manager

1. Click **LINE Official Account Manager**.
2. Read and accept the data usage agreement.
3. Click **Settings** in the top-right corner.
4. From the left navigation menu, select:
5. Click **Enable Messaging API**.
6. Choose the Provider you created earlier.
7. Click **OK**.

## 5️⃣ Return to LINE Developers Console

1. At the bottom-left of the page, click the green button: 👉 **Line Developers Console**
2. Select the Messaging API channel you created.
3. Click **Messaging API** tab.
4. Scroll down to the bottom and find the **Channel access token (long-lived)** section.
5. Click **Issue** to generate a new Long-Lived Channel Access Token.
6. Copy the generated token.

> ⚠️ Important Notes:
> - Do NOT share your token publicly.
> - Do NOT commit your token to GitHub.
> - Anyone who has this token can send messages using your bot.

## 8️⃣ Test the Token Using cURL
Replace `YOUR_LONG_LIVED_ACCESS_TOKEN` with your token:

```bash
curl --location 'https://api.line.me/v2/bot/message/broadcast' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_LONG_LIVED_ACCESS_TOKEN' \
--data '{
  "messages": [
    {
      "type": "text",
      "text": "Hello from n8n!"
    }
  ]
}'
```
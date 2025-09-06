# A Helper For Work Backend
---
## For Users

```Bash
GET    /users          - همه کاربران
GET    /users/{id}     - کاربر مشخص
POST   /users          - ایجاد کاربر
PUT    /users/{id}     - ویرایش کاربر
DELETE /users/{id}     - حذف کاربر
```

---

## For Products

```Bash
GET    /products       - همه محصولات
GET    /products/{id}  - محصول مشخص
POST   /products       - ایجاد محصول
PUT    /products/{id}  - ویرایش محصول
DELETE /products/{id}  - حذف محصول
```

---

## For Admins

```Bash
GET    /admins         - همه ادمین‌ها
GET    /admins/{id}    - ادمین مشخص
POST   /admins         - ایجاد ادمین
PUT    /admins/{id}    - ویرایش ادمین
DELETE /admins/{id}    - حذف ادمین
```

---

## For Api Health

```Bash
GET /health - بررسی سلامت API
```
---
<div>
For Developer Required Installed python3-venv and use this command :

### linuxUsers : 
```Bash 
    source venv/bin/activate
```

### windowsUsers :
```Bash
    venv\Scripts\activate
```

and For DeActive Venv:
```Bash
    deactivate
```
</div>

---
### For Server Run Use This Command:
<p style="background-color: #ffcccc; color: #d60000; padding: 8px; border-left: 4px solid #ff0000; border-radius: 4px;">
  <strong>Note:</strong> For Running Server Required Active Venv
</p>

```Bash
   python server.py
```

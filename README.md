## 💰 Bankist App

Một ứng dụng **giả lập ngân hàng trực tuyến (Bankist)** được viết bằng **HTML**, **CSS** và **JavaScript**,  
giúp người dùng **đăng nhập, chuyển tiền, vay tiền** và **xem thống kê tài chính theo thời gian thực**.  

> 🧩 Dự án này được **tùy chỉnh lại** từ phiên bản gốc của *Jonas Schmedtmann*, với **đơn vị tiền tệ: VND**.

---

## 🚀 Live Demo

Bạn có thể trải nghiệm ứng dụng trực tiếp tại đây:  
**👉 [Xem Demo Ngay!](https://saictruong.github.io/BankistApp/) 👈**

---

## 🧠 Tính năng chính

### 🔐 Login
- Đăng nhập bằng **username** và **PIN**.
- Khi đăng nhập thành công, hệ thống hiển thị lời chào và thông tin tài khoản.

### 💸 Movements
- Hiển thị **toàn bộ danh sách giao dịch** (deposit/withdrawal).
- Có thể **sắp xếp giao dịch tăng dần** bằng nút **SORT**.

### 📊 Summary
- **IN:** Tổng tiền nhận vào.  
- **OUT:** Tổng tiền chi ra.  
- **INTEREST:** Tổng lãi suất sinh ra.  
- Tất cả giá trị được hiển thị theo định dạng **VND** với `Intl.NumberFormat('vi-VN')`.

### 💱 Transfer
- Chuyển tiền giữa các tài khoản hợp lệ.
- Kiểm tra số dư và tài khoản trước khi thực hiện giao dịch.

### 🏦 Loan
- Có thể yêu cầu vay nếu có giao dịch gửi tiền tối thiểu **10%** số tiền vay.

### ❌ Close Account
- Đóng tài khoản bằng cách nhập đúng **username** và **PIN**.

### 🔁 Logout Timer
- Hệ thống tự động **đăng xuất** sau một khoảng thời gian không hoạt động.


---

## 🧩 Cấu trúc dự án

```
/
├── index.html # File HTML chứa cấu trúc trang web
├── style.css # File CSS chứa toàn bộ style
├── script.js # Logic xử lý chính bằng JavaScript
├── logo.png # Logo của ứng dụng
└── icon.png # Biểu tượng trang web

```

---

## 📖 Hướng Dẫn Sử Dụng (User Guide)

### 1. Khởi chạy Ứng Dụng
1.  **Clone (tải) dự án này về:**
    ```bash
    git clone https://github.com/SaiCTruong/BankistApp.git
    ```
2.  Mở thư mục dự án trong VS Code và dùng **Live Server**, hoặc mở trực tiếp file `index.html` bằng trình duyệt.

### 2. Đăng Nhập
Sử dụng một trong các tài khoản demo có sẵn dưới đây để đăng nhập:

| Chủ tài khoản | Username | PIN |
| :--- | :--- | :--- |
| Jonas Schmedtmann | `js` | `1111` |
| Phạm Công Trường | `pct` | `1208` |
| Nguyễn Nhật Thiên | `nnt` | `2105` |
| Lê Quốc Khánh | `lqk` | `3004` |

### 3. Sử Dụng Các Tính Năng Chính
Sau khi đăng nhập thành công:

* **💸 Chuyển Tiền (Transfer money):**
    * **Transfer to:** Nhập `username` của người nhận (ví dụ: `pct`, `nnt`).
    * **Amount:** Nhập số tiền muốn chuyển (ví dụ: `100000`).
    * Bấm nút `&rarr;` để xác nhận.

* **💰 Vay Tiền (Request loan):**
    * **Amount:** Nhập số tiền muốn vay (ví dụ: `500000`).
    * *Lưu ý:* Bạn chỉ có thể vay nếu có ít nhất 1 giao dịch nạp tiền (deposit) >= 10% số tiền muốn vay.

* **❌ Đóng Tài Khoản (Close account):**
    * **Confirm user:** Nhập `username` của *chính bạn* (ví dụ: `js`).
    * **Confirm PIN:** Nhập `PIN` của *chính bạn* (ví dụ: `1111`).
    * Bấm nút `&rarr;` để xác nhận xóa tài khoản.

* **⇅ Sắp Xếp (Sort):**
    * Bấm nút `&downarrow; SORT` ở cuối danh sách giao dịch để sắp xếp các giao dịch theo thứ tự từ thấp đến cao. Bấm lần nữa để trở về mặc định.

* **⏱️ Tự Động Đăng Xuất:**
    * Nếu bạn không thực hiện bất kỳ hành động nào trong 5 phút, ứng dụng sẽ tự động đăng xuất để bảo mật.

---


## 🧮 Công nghệ sử dụng

- **HTML5:** Cấu trúc trang và bố cục chính.  
- **CSS3:** Thiết kế giao diện, hiệu ứng hover và responsive layout.  
- **JavaScript (ES6+):**
  - Thao tác DOM (DOM Manipulation)
  - Xử lý sự kiện (Event Handling)
  - Phương thức mảng nâng cao (`map`, `filter`, `reduce`, `sort`)
  - Định dạng tiền tệ Việt Nam với `Intl.NumberFormat('vi-VN')`

---

## 🧑‍💻 Tác giả

Phạm Công Trường ([@SaiCTruong](https://github.com/SaiCTruong))


---

## 🏁 Giấy phép

Dự án được sử dụng **phi thương mại** cho **mục đích học tập và nghiên cứu**.  
**Bản gốc** thuộc quyền sở hữu của *Jonas Schmedtmann*.  


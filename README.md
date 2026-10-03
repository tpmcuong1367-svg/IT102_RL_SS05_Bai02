Phân tích nguyên nhân kỹ thuật gây lỗi: Nguyên lý tính bất biến của chuỗi (String Immutability): Trong JavaScript, chuỗi là kiểu dữ liệu nguyên thủy (primitive data type) có tính chất bất biến. Nghĩa là giá trị chuỗi đã tạo trong bộ nhớ không bao giờ bị thay đổi bởi bất kỳ phương thức nào. Các hàm như trim(), toUpperCase(), replaceAll(), slice() đều tính toán và trả về một chuỗi mới, chứ không sửa trực tiếp chuỗi ban đầu. Sai lầm trong mã nguồn gốc: Hai dòng lệnh: JavaScript rawTicketCode.trim(); rawTicketCode.toUpperCase(); thực thi xong thì giá trị trả về bị bỏ phí vì không được gán vào biến nào. Biến rawTicketCode vẫn giữ nguyên chuỗi bẩn ban đầu " med-card-0428-ut ". Hậu quả: startsWith("MED-") trả về false vì chuỗi bắt đầu bằng khoảng trắng " ". slice(4, 7) cắt trúng vị trí khoảng trắng và chữ đầu " m" thay vì mã khoa. includes("-UT") trả về false do chuỗi gốc viết thường "-ut". replaceAll("-", " | ") in ra dính toàn bộ khoảng trắng thừa hai đầu. Cách khắc phục: Áp dụng kỹ thuật xâu chuỗi phương thức và gán kết quả vào một biến mới: const cleanTicketCode = rawTicketCode.trim().toUpperCase();. Dùng biến cleanTicketCode này cho toàn bộ các phép kiểm tra và trích xuất phía sau. BẢNG KIỂM THỬ ĐỐI CHỨNG (TEST CASES) TC1: Mã phiếu có khoảng trắng thừa
Đầu vào: " med-card-0428-ut "
Kết quả sai: isValidPrefix = false, departmentCode = " m", chuỗi in dính khoảng trắng
Kết quả đúng: isValidPrefix = true, departmentCode = "CARD", Chuỗi in: MED | CARD | 0428 | UT
TC2: Mã phiếu thông thường

Đầu vào: " med-nhi-1024 "
Kết quả sai: isValidPrefix = false, departmentCode = " me", chuỗi in dính khoảng trắng
Kết quả đúng: isValidPrefix = true, departmentCode = "NHI", Chuỗi in: MED | NHI | 1024

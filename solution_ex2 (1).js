const rawTicketCode = "   med-card-0428-ut   ";

// Chuoi co tinh bat bien (Immutability), phai luu gia tri moi vao bien
const cleanTicketCode = rawTicketCode.trim().toUpperCase();

// Thuc hien kiem tra va xu ly tren bien da lam sach
const isValidPrefix = cleanTicketCode.startsWith("MED-");
const departmentCode = cleanTicketCode.slice(4, 8);
const isPriority = cleanTicketCode.includes("-UT");
const displayCode = cleanTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Ưu tiên tiếp nhận:", isPriority);
console.log("Chuỗi in phiếu:", displayCode);
document.addEventListener('DOMContentLoaded', () => {
    const noteText = document.getElementById('note-text');
    const saveButton = document.getElementById('save-button');
    const statusMessage = document.getElementById('status-message');

    // โหลดข้อมูลที่บันทึกไว้ใน localStorage เมื่อหน้าเว็บโหลด
    const savedNote = localStorage.getItem('myNote');
    if (savedNote) {
        noteText.value = savedNote;
    }

    // ฟังก์ชันสำหรับบันทึกข้อความ
    function saveNote() {
        const textToSave = noteText.value;
        localStorage.setItem('myNote', textToSave);
        statusMessage.textContent = 'บันทึกข้อความเรียบร้อยแล้ว!';
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 3000); // ลบข้อความสถานะหลังจาก 3 วินาที
    }

    // เมื่อคลิกปุ่ม "บันทึก" ให้เรียกใช้ฟังก์ชัน saveNote
    saveButton.addEventListener('click', saveNote);

    // บันทึกอัตโนมัติเมื่อมีการเปลี่ยนแปลงใน textarea
    noteText.addEventListener('input', () => {
        saveNote();
        statusMessage.textContent = 'บันทึกอัตโนมัติ...';
    });
});
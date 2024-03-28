// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//$(document).ready(function () {
//    $('.sub-btn').click(function () {
//        $(this).next('.sub-menu').slideToggle();
//    });
//})

//side bar
function toggleSubmenu(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

    var subMenu = event.target.nextElementSibling; // Lấy phần tử kế tiếp của liên kết, là submenu
    subMenu.classList.toggle('show'); // Thêm hoặc xóa lớp show cho submenu
}



function toggleCollapseExpand() {
    var subMenus = document.querySelectorAll('.sub-menu'); // Chọn tất cả submenu
    var collapseExpandBtn = document.getElementById('collapseExpandBtn'); // Chọn nút collapse/expand

    var anySubmenuOpen = Array.from(subMenus).some(function (subMenu) {
        return subMenu.classList.contains('show');
    });

    if (anySubmenuOpen) {
        collapseAll();
        collapseExpandBtn.textContent = 'Expand All'; // Nếu có bất kỳ submenu nào mở, thay đổi nút thành "Expand All"
    } else {
        expandAll();
        collapseExpandBtn.textContent = 'Collapse All'; // Nếu không có submenu nào mở, thay đổi nút thành "Collapse All"
    }
}

function collapseAll() {
    var subMenus = document.querySelectorAll('.sub-menu'); // Chọn tất cả submenu
    subMenus.forEach(function (subMenu) {
        subMenu.classList.remove('show'); // Loại bỏ lớp show để ẩn submenu
    });
}

function expandAll() {
    var subMenus = document.querySelectorAll('.sub-menu'); // Chọn tất cả submenu
    subMenus.forEach(function (subMenu) {
        subMenu.classList.add('show'); // Thêm lớp show để hiển thị submenu
    });
}

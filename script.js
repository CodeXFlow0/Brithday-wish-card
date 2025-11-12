let currentPage = 1;
const totalPages = 5;

function nextPage() {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage++;
    if (currentPage > totalPages) currentPage = totalPages;
    document.getElementById(`page${currentPage}`).classList.add('active');
}

function restart() {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage = 1;
    document.getElementById(`page1`).classList.add('active');
}

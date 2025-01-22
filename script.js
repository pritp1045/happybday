// Navigate to the next page
document.getElementById("nextPageBtn").addEventListener("click", function () {
    document.getElementById("page1").classList.add("hidden"); // Hide Page 1
    document.getElementById("page2").classList.remove("hidden"); // Show Page 2
});

// Finish button action
document.getElementById("finishBtn").addEventListener("click", function () {
    alert("Thank you for visiting! Have an amazing year ahead! 🎉");
});
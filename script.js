
function copyCode() {
    const code = document.getElementById("refCode").innerText;
    navigator.clipboard.writeText(code);
    alert("Referral code copied: " + code);
}

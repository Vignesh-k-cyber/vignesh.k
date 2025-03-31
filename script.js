// Function to display certificate in a popup
function showCertificate(pdfPath) { const certificateWindow = window.open(pdfPath, '_blank', 'width=800,height=600'); if (!certificateWindow) { alert('Popup blocker detected! Please allow popups for this site.'); } }

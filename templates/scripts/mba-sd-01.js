// JavaScript Document
function gooto(url) {
	location.href=url;
}

function caseLevel() {
	if (document.getElementById('caseNumber').value == "1") {
		gooto("../submit-docs/B-AURT-SD-02_eng.html");}
	else if(document.getElementById('caseNumber').value == "2") {
		gooto("../submit-docs/B-RC-SD-02_eng.html");}
	else if(document.getElementById('caseNumber').value == "3") {
		gooto("../submit-docs/gen-sd-02_no_subject_eng.html");}

	else {
		window.alert("Select 1 for T1 CASE (CNNNNNNNNNN-NNN-NN) for Processing Review ONLY, 2 for Integras (5-10 digit numbers) for Audit or 3 for all other case systems/reference numbers (SA CASE, CPP/EI CASE, T1BEN, DTC, T1 CASE excluding Processing Review)");}
}
export default function submit(event) {
    const form = document.querySelector('form');
    event.preventDefault();
    const formData = new FormData(form);
    const patientData = {};
    for (const [key, value] of formData.entries()) {
        patientData[key] = value;
    }
    console.log('Xəstə haqqında məlumat:', patientData);
    alert('Kart qeydiyyatdan keçdi');
}
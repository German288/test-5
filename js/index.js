// Инициализация EmailJS
emailjs.init('UY5Nq1-CzCBe9uAUk'); // Замените YOUR_USER_ID на ваш реальный User ID из EmailJS Dashboard

// Обработчик события отправки формы
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отмена стандартного действия отправки формы

    // Получение значений полей формы
    var fullName = document.getElementById('fullname').value;
    var phoneParent = document.getElementById('phoneparent').value;
    var nameChild = document.getElementById('namechild').value;
    var childAge = document.getElementById('number').value;
    var courseName = document.getElementById('namecourse').value;
    var childPhone = document.getElementById('telephone').value;

    // Параметры для отправки письма через EmailJS
    var params = {
        user_name: fullName,
        user_phone: phoneParent,
        child_name: nameChild,
        child_age: childAge,
        course_name: courseName,
        child_phone: childPhone
    };

    // Отправка письма через EmailJS
    emailjs.send('service_9wiug8d', 'template_bqomoti', params)
        .then(function(response) {
            console.log('Письмо успешно отправлено!', response.status, response.text);
            // Дополнительные действия после успешной отправки письма
        }, function(error) {
            console.error('Ошибка при отправке письма:', error);
            // Дополнительные действия в случае ошибки отправки письма
        });
});
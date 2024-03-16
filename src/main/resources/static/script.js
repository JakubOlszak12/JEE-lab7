const apiUrl = 'http://localhost:8080'; // Your API address

async function getStudents() {
    try {
        const response = await fetch(`${apiUrl}/students`);
        if (!response.ok) {
            throw new Error('Unable to fetch students.');
        }
        const students = await response.json();
        displayMessage(JSON.stringify(students));
    } catch (error) {
        displayError(error.message);
    }
}

async function addStudent(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('addStudentForm'));
    const student = {
        name: formData.get('name'),
        surname: formData.get('surname'),
        average: formData.get('average')
    };

    try {
        const response = await fetch(`${apiUrl}/students/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        if (!response.ok) {
            throw new Error('Unable to add student.');
        }
        displayMessage('Student added successfully.');
    } catch (error) {
        displayError(error.message);
    }
}

async function updateStudent(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('updateStudentForm'));
    const student = {
        id: formData.get('updateId'),
        name: formData.get('updateName'),
        surname: formData.get('updateSurname'),
        average: formData.get('updateAverage')
    };

    try {
        const response = await fetch(`${apiUrl}/students/update/${student.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        if (!response.ok) {
            throw new Error('There is no student with this id.');
        }
        displayMessage('Student updated successfully.');
    } catch (error) {
        displayError(error.message);
    }
}

async function deleteStudent(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('deleteStudentForm'));
    const studentId = formData.get('deleteId');

    try {
        const response = await fetch(`${apiUrl}/students/delete/${studentId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('There is no student with this id.');
        }
        displayMessage('Student deleted successfully.');
    } catch (error) {
        displayError(error.message);
    }
}

function displayMessage(message) {
    clearMessages();
    document.getElementById('message').textContent = message;
}

function displayError(error) {
    clearMessages();
    document.getElementById('error').textContent = `Error: ${error}`;
}

function clearMessages() {
    document.getElementById('message').textContent = '';
    document.getElementById('error').textContent = '';
}

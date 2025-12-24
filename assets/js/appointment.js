// Appointment booking functionality

document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        // Set minimum date to today
        const dateInput = appointmentForm.querySelector('input[type="date"]');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }
        
        // Time slot selection
        const departmentSelect = appointmentForm.querySelector('select[name="department"]');
        const timeSlotContainer = document.getElementById('timeSlotContainer');
        
        if (departmentSelect && timeSlotContainer) {
            departmentSelect.addEventListener('change', () => {
                if (departmentSelect.value) {
                    generateTimeSlots(timeSlotContainer);
                }
            });
        }
        
        // Form submission
        appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    }
});

function generateTimeSlots(container) {
    const slots = [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
        '04:00 PM', '04:30 PM', '05:00 PM'
    ];
    
    container.innerHTML = `
        <label class="block text-gray-700 font-medium mb-2">Preferred Time</label>
        <div class="grid grid-cols-3 gap-2">
            ${slots.map(slot => `
                <button type="button" class="time-slot-btn px-4 py-2 border border-gray-300 rounded-lg hover:bg-primary-50 hover:border-primary-600 transition" data-time="${slot}">
                    ${slot}
                </button>
            `).join('')}
        </div>
        <input type="hidden" name="time" id="selectedTime">
    `;
    
    container.querySelectorAll('.time-slot-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            container.querySelectorAll('.time-slot-btn').forEach(b => {
                b.classList.remove('bg-primary-600', 'text-white', 'border-primary-600');
            });
            this.classList.add('bg-primary-600', 'text-white', 'border-primary-600');
            document.getElementById('selectedTime').value = this.getAttribute('data-time');
        });
    });
}

function handleAppointmentSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate API call
    setTimeout(() => {
        if (window.HospitalUtils) {
            window.HospitalUtils.showNotification(
                'Thank you for your appointment request! We will contact you shortly to confirm your appointment.',
                'success'
            );
        } else {
            alert('Thank you for your appointment request! We will contact you shortly.');
        }
        
        e.target.reset();
        const timeSlotContainer = document.getElementById('timeSlotContainer');
        if (timeSlotContainer) {
            timeSlotContainer.innerHTML = '';
        }
    }, 500);
}


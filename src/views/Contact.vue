<script setup>
import { reactive, ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'


const map = ref(null)
onMounted(() => {
    // Office location (change this to your office's coordinates)
    const officeLatitude = 51.1844186
    const officeLongitude = 0.2722406

    // Initialize map and set view to your office location
    map.value = L.map('map', {
        attributionControl: false, // Disable the attribution control
    }).setView([officeLatitude, officeLongitude], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map.value);

    // Add a marker at your office location
    L.marker([officeLatitude, officeLongitude]).addTo(map.value).openPopup();
});


// Your EmailJS keys
const SERVICE_ID = 'service_41yi6xd'
const TEMPLATE_ID = 'template_1q53qk9'
const PUBLIC_KEY = 'Tdwg4UkGPJcc-dDmf'

const form = reactive({
    name: '',
    email: '',
    message: ''
})

const isLoading = ref(false)
const status = reactive({
    message: '',
    isError: false
})

const sendEmail = () => {
    isLoading.value = true
    status.message = ''

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message
    }, PUBLIC_KEY)
        .then(() => {
            status.message = 'Your message has been sent.'
            status.isError = false
            form.name = ''
            form.email = ''
            form.message = ''
        })
        .catch((error) => {
            console.error('Failed to send email:', error)
            status.message = 'Your message failed to send. Please try again later.'
            status.isError = true
        })
        .finally(() => {
            isLoading.value = false
        })
}
</script>
<style scoped>
#map {
    width: 100%;
    height: 400px;
}
</style>
<template>
    <div class="container">
        <div class="page-title">Contact</div>
    </div>

    <div class="container">
        <div class="row justify-content-between">
            <div class="col-12 col-md-5">
                <div class="text-primary title ">Where You Can Find Me</div>
                <div class="fs-5">
                    <p>
                        <i class="bi bi-geo-alt"></i> My Reiki space address is:
                    </p>
                    <p>
                        Mountfield, 63 The Drive, Tonbridge, TN9 2LS
                    </p>
                    <p>Proceed down the driveway off of the main road and park infront of the house</p>
                    <div class=" mt-2 mb-3">
                        <a href="https://maps.app.goo.gl/gntr1JTu6fpJh7Ln7" target="_blank"
                            class="btn btn-outline-primary">
                            <i class="bi bi-geo-alt"></i> View on Google Maps
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div id="map" style="height: 400px;"></div>
            </div>
        </div>
    </div>

    <div class="divider"></div>

    <div class="container">
        <div class="row justify-content-between">
            <div class="col-12 col-md-4">
                <div class="text-primary title ">Get In Touch</div>
                <div class="fs-5">
                    <p>
                        Send me a message if you have any questions or would like to know more about having a Reiki
                        session with me.
                    </p>

                </div>
            </div>
            <div class="col-12 col-md-6">
                <form @submit.prevent="sendEmail">
                    <div class="mb-3">
                        <label class="form-label fw-bold">Your Name</label>
                        <input v-model="form.name" required class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Your Email</label>
                        <input v-model="form.email" type="email" required class="form-control" />
                        <div id="emailHelp" class="form-text">Your email will never be shared with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Your Message</label>
                        <textarea v-model="form.message" required class="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" :disabled="isLoading" class="btn btn-primary btn-lg">Send</button>
                    <div class="spinner-border ms-2 " v-if="isLoading" role="status"></div>

                    <div v-if="status.message" :class="['mt-3', status.isError ? 'text-danger' : 'text-success']">
                        {{ status.message }}
                    </div>
                </form>
            </div>
        </div>
    </div>


</template>
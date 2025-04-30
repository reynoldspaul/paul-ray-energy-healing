<script setup>
import { onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router'
import { Modal } from 'bootstrap'

const route = useRoute()
let myModalInstance
onMounted(() => {
    const modalEl = document.getElementById('myModal')
    myModalInstance = new Modal(modalEl)
})
watchEffect(() => {
    if (route.query.booking == 'true') {
        myModalInstance.show()
    }
})
function hide() {
    myModalInstance.hide()
}
</script>
<template>
    <div class="modal fade" id="myModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-primary">Thank You For Your Booking</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    I look forward to seeing you. If you have any questions before the session please get in touch via
                    my
                    <RouterLink to="/contact" @click="hide">contact page</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
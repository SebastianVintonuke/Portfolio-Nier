<template>
    <div class='d-flex flex-column' style='width: 210mm; height: 297mm'>
        <div class='mosaic-array top'>
            <div class='line'></div>
            <div class='mosaic-container'>
                <mosaic v-for='i in 9' :key='i'></mosaic>
                <mosaic :end='true'></mosaic>
            </div>
        </div>
        <div class='d-flex flex-fill'>
            <div class='background-secondary' style='width: 35%; height: 100%'>
                <div style='height: 45px;'></div>
                <div class='d-flex flex-column p-5 gap-5'>
                    <div class='d-flex flex-column gap-2'>
                        <Qr></Qr>
                        <span class='fs-6 text-center secondary'> {{ $t('CV.QR') }} </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 secondary'> {{ $t('CV.EDUCATION') }} </span>
                        <hr style='background: #c9c5ab'>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.INF_ENG') }} </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 secondary'> {{ $t('CV.LANGUAGES') }} </span>
                        <hr style='background: #c9c5ab'>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.ENGLISH') }} </span>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.SPANISH') }} </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 secondary'> {{ $t('CV.APTITUDES') }} </span>
                        <hr style='background: #c9c5ab'>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.ANALYTICAL') }} </span>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.CREATIVE') }} </span>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.PROACTIVE') }} </span>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.ORDERLY') }} </span>
                        <span class='fs-6 secondary'> {{ '■ ' + $t('CV.RETAILER') }} </span>
                    </div>
                </div>
            </div>
            <div class='background-primary' style='width: 65%; height: 100%'>
                <div style='height: 45px;'></div>
                <div class='d-flex flex-column px-5 gap-5'>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-1 text-end primary' style='letter-spacing: 15px'> Sebastian Vintoñuke </span>
                        <span class='fs-4 text-end primary'> Software Developer </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 primary'> {{ $t('CV.PROFILE') }} </span>
                        <hr style='background: #3e3b34'>
                        <span class='fs-6 primary'> {{ $t('CV.PRESENTATION') }} </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 primary'> {{ $t('CV.SKILLS') }} </span>
                        <hr style='background: #3e3b34'>
                        <div class='d-flex justify-content-around'>
                            <div class='d-flex flex-column gap-2'>
                                <span class='fs-6 fw-medium primary'> ■ HTML5 </span>
                                <span class='fs-6 fw-medium primary'> ■ CSS/SASS </span>
                                <span class='fs-6 fw-medium primary'> ■ JS/TypeScript </span>
                            </div>
                            <div class='d-flex flex-column gap-2'>
                                <span class='fs-6 fw-medium primary'> ■ Vue.js </span>
                                <span class='fs-6 fw-medium primary'> ■ Node.js </span>
                                <span class='fs-6 fw-medium primary'> ■ Python </span>
                            </div>
                            <div class='d-flex flex-column gap-2'>
                                <span class='fs-6 fw-medium primary'> ■ C </span>
                                <span class='fs-6 fw-medium primary'> ■ OOP </span>
                                <span class='fs-6 fw-medium primary'> ■ TDD </span>
                            </div>
                        </div>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 primary'> {{ $t('CV.EXPERIENCE') }} </span>
                        <hr style='background: #3e3b34'>
                        <div class='d-flex align-items-baseline gap-1'>
                            <span class='fs-5 fw-bold primary'> QONTIGO </span>
                            <span class='fs-6 fw-medium primary'> AXIOMA / Deutsche Börse </span>
                        </div>
                        <div class='d-flex flex-column px-4'>
                            <span class='fs-5 primary'> ■ UI Engineer </span>
                            <span class='fs-6 primary'> {{ $t('CV.DATE_1') }} </span>
                            <span class='fs-5 primary'> ■ Trainee Frontend Engineering </span>
                            <span class='fs-6 primary'> {{ $t('CV.DATE_2') }} </span>
                        </div>
                    </div>
                    <span class='fs-6 text-center fw-bolder primary'> www.linkedin.com/in/sebastian-vintoñuke </span>
                </div>
            </div>
        </div>
        <div class='mosaic-array bottom'>
            <div class='line'></div>
            <div class='mosaic-container'>
                <mosaic v-for='i in 9' :key='i'></mosaic>
                <mosaic :end='true'></mosaic>
            </div>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import Mosaic from '../mosaic-array/mosaic.vue';
import Qr from './qr.vue';

@Options({
    components: {
        Mosaic,
        Qr
    }
})
export default class Cv extends Vue {}
</script>

<style lang='scss' scoped>
hr {
    background: #c9c5ab;
}
.primary {
    color: #3e3b34;
}
.secondary {
    color: #c9c5ab;
}
.mosaic-array {
    position: absolute;
    width: 210mm;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.top {
        top: 5mm;
    }
    &.bottom {
        top: 287mm;
    }
    .mosaic-container {
        display: flex;
        justify-content: center;
    }
    .line {
        height: 3px;
        background: #1d1a15;
    }
}</style>
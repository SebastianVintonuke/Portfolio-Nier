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
            <div class='b-secondary' style='width: 35%; height: 100%'>
                <div style='height: 45px;'></div>
                <div class='d-flex flex-column p-5 gap-5'>
                    <div class='d-flex flex-column gap-2'>
                        <img style="width: 100%" src='/img/qrcode.jpg'>
                        <span class='fs-6 text-center secondary'> {{ $t('CV.QR') }} </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 secondary'> {{ $t('CV.EDUCATION') }} </span>
                        <hr class='b-primary'>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.INF_ENG') }} </span>
                        </div>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 secondary'> {{ $t('CV.LANGUAGES') }} </span>
                        <hr class='b-primary'>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.ENGLISH') }} </span>
                        </div>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.SPANISH') }} </span>
                        </div>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 secondary'> {{ $t('CV.APTITUDES') }} </span>
                        <hr class='b-primary'>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.ANALYTICAL') }} </span>
                        </div>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.CREATIVE') }} </span>
                        </div>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.PROACTIVE') }} </span>
                        </div>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.ORDERLY') }} </span>
                        </div>
                        <div class='d-flex align-items-baseline gap-1'>
                            <div class="dot b-primary"></div>
                            <span class='fs-6 secondary'> {{ $t('CV.RETAILER') }} </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class='b-primary' style='width: 65%; height: 100%'>
                <div style='height: 45px;'></div>
                <div class='d-flex flex-column px-5 gap-5'>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-1 text-end primary' style='letter-spacing: 15px'> Sebastian Vintoñuke </span>
                        <span class='fs-4 text-end primary'> Software Developer </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 primary'> {{ $t('CV.PROFILE') }} </span>
                        <hr class='b-secondary'>
                        <span class='fs-6 primary'> {{ $t('CV.PRESENTATION') }} </span>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 primary'> {{ $t('CV.SKILLS') }} </span>
                        <hr class='b-secondary'>
                        <div class='d-flex justify-content-around'>
                            <div class='d-flex flex-column gap-2'>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> HTML5 </span>
                                </div>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> CSS /SASS </span>
                                </div>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> JS /TypeScript </span>
                                </div>
                            </div>
                            <div class='d-flex flex-column gap-2'>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> Vue.js </span>
                                </div>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> Node.js </span>
                                </div>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> Python </span>
                                </div>
                            </div>
                            <div class='d-flex flex-column gap-2'>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> C </span>
                                </div>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> OOP </span>
                                </div>
                                <div class='d-flex align-items-baseline gap-1'>
                                    <div class="dot b-secondary"></div>
                                    <span class='fs-6 fw-medium primary'> TDD </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='d-flex flex-column gap-2'>
                        <span class='fs-4 primary'> {{ $t('CV.EXPERIENCE') }} </span>
                        <hr class='b-secondary'>
                        <div class='d-flex align-items-baseline gap-1'>
                            <span class='fs-5 fw-bold primary'> QONTIGO </span>
                            <span class='fs-6 fw-medium primary'> AXIOMA / Deutsche Börse </span>
                        </div>
                        <div class='d-flex flex-column px-4'>
                            <div class='d-flex align-items-baseline gap-2'>
                                <div class="dot-big b-secondary"></div>
                                <span class='fs-5 primary'> UI Engineer </span>
                            </div>
                            <span class='fs-6 primary'> {{ $t('CV.DATE_1') }} </span>
                            <div class='d-flex align-items-baseline gap-2'>
                                <div class="dot-big b-secondary"></div>
                                <span class='fs-5 primary'> Trainee Frontend Engineering </span>
                            </div>
                            <span class='fs-6 primary'> {{ $t('CV.DATE_2') }} </span>
                        </div>
                    </div>
                    <div class='d-flex flex-column'>
                        <span class='fs-6 fw-bolder text-end primary'> sebastian-vintonyuke.vercel.app </span>
                        <span class='fs-6 fw-bolder text-end primary'> www.linkedin.com/in/sebastian-vintoñuke </span>
                    </div>
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

@Options({
    components: {
        Mosaic
    }
})
export default class Cv extends Vue {}
</script>

<style lang='scss' scoped>
.dot {
    width: 11px;
    height: 11px;
}
.dot-big {
    width: 14px;
    height: 14px;
}
.primary {
    color: #3e3b34;
}
.b-primary {
    background: #c9c5ab;
}
.secondary {
    color: #c9c5ab;
}
.b-secondary {
    background: #3e3b34;
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
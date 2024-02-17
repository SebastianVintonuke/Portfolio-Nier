<template>
    <div class='container d-flex flex-column'>
        <div class='d-flex pt-1 pb-3'>
            <animated-span class='text-uppercase' :label='$t("HOME.TITLE")'></animated-span>
        </div>
        <div class='d-flex flex-fill'>
            <div class='d-flex flex-column justify-content-between gap-5 py-3'>
                <div class='d-flex flex-column fw-medium text-nowrap lh-1'>
                    <span class='fs-1'> Sebastian Vintoñuke </span>
                    <span class='fs-3'>{{ $t('HOME.QUALIFICATION') }}</span>
                </div>
                <card :cardHandler='{ label: "", icon: "" }'>
                    <span class='text-center fs-6 text-wrap fw-normal'>{{ $t('HOME.CONTENT') }}</span>
                </card>
                <div class='d-flex flex-row-reverse'>
                    <div class='d-flex flex-column flex-fill' style='max-width: 300px'>
                        <div class='d-flex flex-column gap-1 text-nowrap lh-1'>
                            <span class='fs-6 text-start'>{{ $t('HOME.INTERFACE_INSPIRED_BY') }}</span>
                            <hr>
                            <span class='fs-4 fw-medium text-start'> NieRAutomata™ </span>
                            <hr>
                            <span class='fs-6 text-end'> Yoko Taro & Square Enix </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='d-flex align-items-center py-3'>
            <Banner>
                <span class='fs-4'>{{ $t('HOME.BANNER') }}</span>
            </Banner>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import { AnimatedSpan, Banner, Card } from '../../components';

@Options({
    components: {
        AnimatedSpan,
        Banner,
        Card
    }
})
export default class Home extends Vue {
}
</script>
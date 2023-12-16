<template>
    <div class='d-flex flex-column p-5 background-mh-all background-secondary-emphasis gap-4'>
        <div class='d-flex justify-content-between'>
            <div class='d-flex flex-column gap-4'>
                <div class='d-flex flex-wrap align-items-baseline gap-2 text-primary fw-medium text-uppercase'>
                    <span class='fs-1'>{{ $t('LOADER.CARGANDO') }}</span>
                    <span class='fs-5'>{{ $t('LOADER.STARTING_SYSTEM') }}</span>
                </div>
                <div class='d-flex flex-column px-4 gap-2 text-secondary fs-6 fw-medium'>
                    <span v-for='(label, index) in labels' :key='index'>{{ $t(label) }}</span>
                </div>
            </div>
            <div style="width: 32px;">
                <div v-if='loading' class='spinner-border text-primary' role='status'> <span class='visually-hidden'></span> </div>
            </div>
        </div>
        <div class='d-flex justify-content-center'>
            <span v-if='!loading' ref='scrollTo' class='fs-1 text-center text-primary fw-medium beat'>{{ $t('LOADER.CONTINUE') }}</span>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

const LABELS = [
    'LOADER.LABEL_1',
    'LOADER.LABEL_2',
    'LOADER.LABEL_3',
    'LOADER.LABEL_4',
    'LOADER.LABEL_5',
    'LOADER.LABEL_6',
    'LOADER.LABEL_7',
    'LOADER.LABEL_8',
    'LOADER.LABEL_9',
    'LOADER.LABEL_10',
    'LOADER.LABEL_11'
]

interface loaderHandler {
    onReady: Function
}

export default class Loader extends Vue {
    @Prop()
    handler!: loaderHandler;

    public loading = true;
    public labels: string[] = [];
    public labelIndex: number = 0;

    public mounted() {
        this.animation();
    }

    public beforeUnmount() {
        this.$el.removeEventListener('click', this.onClick);
    }

    public onClick(): void {
        this.handler.onReady();
    }

    protected animation(): void {
        new Promise(resolve => { setTimeout(() => resolve(null), Math.floor(Math.random() * (500 - 100 + 1)) + 100); })
            .then(() => {
                this.labels.push(LABELS[this.labelIndex]);
                this.labelIndex++;
            })
            .then(() => {
                if (this.labelIndex < LABELS.length) {
                    this.animation();
                } else {
                    this.loading = false;
                    this.$el.addEventListener('click', this.onClick);
                    this.$nextTick(() => (this.$refs.scrollTo as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' }));
                }
            });
    }
}
</script>

<style lang='scss' scoped>
.beat {
    animation: beat 2s infinite;
}
@keyframes beat {
0% {
    transform: scale(1);
}
50% {
    transform: scale(1.1);
}
100% {
    transform: scale(1);
}
}
</style>
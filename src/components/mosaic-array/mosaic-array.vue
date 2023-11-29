<template>
<div class='mosaic-array'>
    <div class='line'></div>
    <div class='mosaic-container'>
        <mosaic v-for='i in mosaicCount' :key='i'></mosaic>
        <mosaic :end='true'></mosaic>
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
export default class MosaicArray extends Vue {
    public mosaicCount = this.getMosaicCount();

    public mounted(): void {
        window.addEventListener('resize', this.handleResize);
    }

    public destroyed(): void {
        window.removeEventListener('resize', this.handleResize);
    }

    public handleResize(): void {
        this.mosaicCount = this.getMosaicCount();
    }

    public getMosaicCount(): number {
        const viewWidth = window.innerWidth;
        const mosaicWidth = 62;
        const count = Math.floor(viewWidth / mosaicWidth) - 2;
        if (count < 0) return 0;
        return count;
    }
}

</script>

<style lang='scss' scoped>
.mosaic-array {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.mosaic-container {
    display: flex;
    justify-content: center;
}

.line {
    height: 3px;
    background: #1d1a15;
}
</style>
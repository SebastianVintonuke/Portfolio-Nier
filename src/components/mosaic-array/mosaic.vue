<template>
<div class='mosaic'>
    <div class='conteiner-a'>
        <div class='block'></div>
    </div>
    <div class='conteiner-b'>
        <div class='triangle-container'>
            <div class='circle circle-a'></div>
            <div class='circle circle-b'></div>
            <div class='circle circle-c'></div>
        </div>
    </div>
    <div class='conteiner-a' v-show='end'>
        <div class='block'></div>
    </div>
</div>
</template>

<script lang='ts' scoped>
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class Mosaic extends Vue {
    @Prop()
    end?: boolean;
}
</script>

<style lang='scss' scoped>
.mosaic {
    display: flex;
    height: 30px;
}

.conteiner-a {
    width: 12px;
    display: flex;
}

.block {
    width: 10px;
    height: 5px;
    background-color: #1d1a15;
}

.conteiner-b {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

.triangle-container {
    position: relative;
    width: 20px;
    height: 15px;
}

.circle {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #1d1a15;
    clip-path: circle(50% at 50% 50%);
}

.circle-a {
    top: 0;
    left: 0;
}

.circle-b {
    top: 0;
    right: 0;
}

.circle-c {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>
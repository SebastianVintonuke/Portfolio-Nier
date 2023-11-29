<template>
    <div class='arrow'>
        <div class='triangle-container'>
            <div class='triangle' :class='primary ? "primary" : ""'></div>
        </div>
        <div class='block-container'>
            <div class='block'></div>
            <div class='block'></div>
        </div>
    </div>
</template>
    
<script lang='ts' scoped>
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

export default class IconArrow extends Vue {
    @Prop(Boolean) readonly primary!: boolean;
}
</script>
    
<style lang='scss' scoped>
.arrow {
    display: flex;
    align-items: center;
    width: 40px;
    height: 30px;
}

.triangle-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 100%;
}

.triangle {
    width: 40px;
    height: 20px;
    clip-path: polygon(0 50%, 30% 0, 100% 50%, 30% 100%, 30% 60%, 40% 50%, 30% 40%, 25% 50%, 30% 60%, 30% 100%);
    background-color: #38352e;
}

.primary {
    background-color: #d3cdaf;
}

.block-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.block {
    width: 5px;
    height: 5px;
    background-color: #38352e;
}
</style>
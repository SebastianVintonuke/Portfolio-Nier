<template>
<div class='range'>
    <div 
        v-for='(item, index) in handler.maxValue'
        :key='index'
        class='step'
        :ref='`ref-step-${handler.maxValue - index - 1}`'
        @mouseover='onHover(handler.maxValue - index)'>
        <div :class='(handler.maxValue - index > handler.value) ? "step-form dot" : ((handler.maxValue - index < handler.value) ? "step-form bar" : "step-form bar-last")'></div>
    </div>
    <div class='last-decorator-container'>
        <div class='last-decorator'></div>
        <div class='last-decorator'></div>
    </div>
</div>
</template>

<script scoped lang='ts'>
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

interface RangeHandler {
    value: number,
    maxValue: number,
    onChange: Function
}

export default class Range extends Vue {
    @Prop()
    handler!: RangeHandler;

    public valueSelected = 0;
    public classes: string[] = [];

    public created(): void {
        this.handlerIsValid();
        this.valueSelected = this.handler.value;
    }

    public onHover(newValue: number) {
        const newIndex = newValue - 1;
        const indexSelected = this.valueSelected - 1;
        if (this.valueSelected == newValue) {
            return
        } else if (newIndex > indexSelected) {
            for (let i = indexSelected; i < newIndex; i++) {
                ((this.$refs[`ref-step-${i}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.remove('dot');
                ((this.$refs[`ref-step-${i}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.add('bar');
                ((this.$refs[`ref-step-${i}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.remove('bar-last');
            }
            ((this.$refs[`ref-step-${newIndex}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.add('bar-last');
        } else {
            for (let i = indexSelected; newIndex < i; i--) {
                ((this.$refs[`ref-step-${i}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.add('dot');
                ((this.$refs[`ref-step-${i}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.remove('bar');
                ((this.$refs[`ref-step-${i}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.remove('bar-last');
            }
            ((this.$refs[`ref-step-${newIndex}`] as HTMLElement[])[0].firstChild as HTMLElement).classList.add('bar-last');
        }
        this.onChange(newValue);
    }

    public onChange(newValue: number): void {
        this.valueSelected = newValue;
        this.handler.onChange(newValue);
    }

    private handlerIsValid(): void {
        if (this.handler.maxValue < 1) throw `Error - Range input max value ${this.handler.maxValue} under zero`
        if (this.handler.value < 1) throw `Error - Range input value ${this.handler.value} under zero`
        if (this.handler.value > this.handler.maxValue) throw `Error - Range input value ${this.handler.value} is greater than max value ${this.handler.maxValue}`
    }
}
</script>

<style lang='scss' scoped>
.range {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}
.step {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 8px;
    height: 28px;
    cursor: pointer;
}
.step-form {
    width: 4px;
    background-color: #c9c5ab;
    transition: height 0.4s ease-in-out;
}
.dot {
    height: 4px;
}
.bar {
    height: 18px;
}
.bar-last {
    height: 28px;
    background-color: #fbfbf3;
}

.last-decorator-container {
    z-index: -1;
    position: absolute;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
}
.last-decorator {
    width: 4px;
    height: 2px;
    background-color: #c9c5ab;
}
</style>
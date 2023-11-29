<template>
    <div class='form-check form-switch'>
        <input ref='toggleSwitch' class='form-check-input' type='checkbox' role='switch'>
    </div>
</template>

<script scoped lang='ts'>
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

interface ToggleSwitchHandler {
    value: boolean,
    onChange: Function
}

export default class ToggleSwitch extends Vue {
    @Prop()
    handler!: ToggleSwitchHandler;

    private elm!: HTMLInputElement;

    public mounted(): void {
        this.elm = (this.$refs.toggleSwitch as HTMLInputElement);
        this.elm.checked = this.handler.value;
        this.elm.addEventListener('change', this.onChange);
    }

    public unmounted(): void {
        this.elm.removeEventListener('change', this.onChange);
    }

    public onChange(): void {
        this.handler.onChange(this.elm.checked)
    }
}
</script>

<style lang='scss' scoped>
.form-switch {
    input {
        background-color: #c9c5ab;
        &:checked {
            background-color: #625f54;
        }
    }
}
</style>
<template>
    <div class='list' :style='animation'>
        <div class='decorator-container'>
            <div class='decorator decorator-left' :style='decoratorAnimation'></div>
            <div class='decorator decorator-right' :style='decoratorAnimation'></div>
        </div>
        <div class='main-container'>
            <div class='line-container'>
                <div class='decorator decorator-line'></div>
                <div class='decorator decorator-dot'></div>
            </div>
            <div class='tabs-container'>
                <tab v-for='(item, index) in listHandler.items' :key='index' :selfKey='item' :groupKey='selected'
                    :tabHandler='{
                        label: listHandler.labels[index],
                        animated: false,
                        arrow: false,
                        onChange: onChange
                    }'>
                    <Component v-if='listHandler.slots && listHandler.slots[index]?.component == "ToggleSwitch"' :is='"ToggleSwitch"' :handler='listHandler.slots[index]?.handler'></Component>
                    <Component v-if='listHandler.slots && listHandler.slots[index]?.component == "Range"' :is='"Range"' :handler='listHandler.slots[index]?.handler'></Component>
                </tab>
            </div>
            <div class='line-container'>
                <div class='decorator decorator-line'></div>
                <div class='decorator decorator-dot'></div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Tab from '../tab/tab.vue';
import ToggleSwitch from '../toggle-switch/toggle-switch.vue';
import Range from '../range/range.vue';

export interface ListHandler<T> {
    items: Array<T>,
    labels: Array<string>,
    slots: Array<{ component: string, handler: Object }| null> | null,
    selected: T | null,
    onChange: Function
}

@Options({
    name: 'nier-list',
    components: {
        Tab,
        ToggleSwitch,
        Range
    }
})
export default class List<T> extends Vue {
    @Prop()
    listHandler!: ListHandler<T>;

    public selected: T | null = null;
    public animation = '';
    public decoratorAnimation = '';

    public created(): void {
        if (this.listHandler.items.length !== this.listHandler.labels.length) {
            throw new Error('There must be the same number of items and labels');
        }
        this.selected = this.listHandler.selected;
    }

    public onChange(newTab: T): void {
        this.selected = newTab;
        this.listHandler.onChange(newTab);
    }

    public mounted(): void {
        new Promise(resolve => { setTimeout(() => { resolve(null); }, 50); })
            .then(() => {
                this.animation = 'opacity: 1';
                this.decoratorAnimation = 'height: 90%';
            })
    }
}
</script>

<style lang='scss' scoped>
.list {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 25px 1fr;
    column-gap: 4%;
    width: 100%;
    height: 100%;
    transition: opacity 0.4s ease-out;
    opacity: 0;
}

.decorator {
    transition: height 0.2s ease-out;
    height: 25%;
    background-color: #837f6e;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%237f7c68' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.decorator-container {
    display: flex;
    align-items: center;
    .decorator-left {
        width: 14px;
        margin-right: 7px;
    }
    .decorator-right {
        width: 4px;
    }
}
.main-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-right: 3.5%;
    overflow: visible;
    /* TODO TOKEN */
    background-color: #d1cbaf;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23cbc5a7' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border: 1px solid rgba($color: #000000, $alpha: 0.1);
    box-shadow: 4px 4px 1px 1px rgba(129, 126, 112, 0.7);
    .line-container {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        height: 0.7em;
        .decorator-line {
            flex-grow: 1;
            margin: 0 10px 0 10px;
            height: 2px;
        }
        .decorator-dot {
            width: 5px;
            height: 5px;
            clip-path: circle(50% at 50% 50%);
            margin-left: auto;
        }
    }
    .tabs-container {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        max-height: 20em;
        overflow-y: scroll;
        overflow-x: hidden;
        .tab {
            width: 95%;
        }
        &::-webkit-scrollbar {
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #4d4a40;
        }
    }
}
</style>
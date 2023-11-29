<template>
    <div class='menu'>
        <div class='decorator-container'>
            <div class='decorator decorator-left' :style='verticalAnimation'></div>
            <div class='decorator decorator-right' :style='verticalAnimation'></div>
        </div>
        <div class='tabs-container'>
            <tab v-for='(item, index) in items' :key='index' :selfKey='item' :groupKey='selected' :tabHandler='{
                label: menuHandler.labels[index],
                icon: menuHandler.icons ? menuHandler.icons[index] : null,
                animated: true,
                arrow: true,
                onChange: onChange
            }'></tab>
        </div>
    </div>
</template>

<script lang='ts' scoped>
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import Tab from '../tab/tab.vue';

export interface MenuHandler<T> {
    items: Array<T>,
    labels: Array<string>,
    icons: Array<string | null> | null,
    selected: T | null;
    onChange: Function
}

@Options({
    name: 'nier-menu',
    components: {
        Tab
    }
})
export default class Menu<T> extends Vue {
    @Prop()
    menuHandler!: MenuHandler<T>;

    public selected: T | null = null;
    public verticalAnimation = '';
    public items: Array<T> = [];

    public created(): void {
        if (this.menuHandler.items.length !== this.menuHandler.labels.length) {
            throw new Error('There must be the same number of items and labels');
        }
        this.selected = this.menuHandler.selected;
    }

    public onChange(newTab: T): void {
        this.selected = newTab;
        this.menuHandler.onChange(newTab);
    }

    public mounted(): void {
        this.pushNextTab();
        new Promise(resolve => { setTimeout(() => { resolve(null); }, 200); })
            .then(() => {
                this.verticalAnimation = 'height: 90%';
            })
    }

    public pushNextTab(): void {
        if (this.items.length < this.menuHandler.items.length) {
            this.items.push(this.menuHandler.items[this.items.length]);
            new Promise(resolve => { setTimeout(() => { resolve(null); }, 75); })
                .then(() => {
                    this.pushNextTab();
                });
            return
        }
        return
    }

}
</script>

<style lang='scss' scoped>
.menu {
    display: grid;
    width: 100%;
    grid-template-rows: 1fr;
    grid-template-columns: 25px 1fr;
    column-gap: 4%;

    .decorator {
        transition: height 0.15s ease-out;
        height: 0;
    }

    .tabs-container {
        display: flex;
        flex-direction: column;
        gap: 0.2em;
    }
}
.decorator {
    /* TODO TOKEN */
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
</style>
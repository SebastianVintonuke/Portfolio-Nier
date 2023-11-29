<template>
    <div v-if='isMobileNav()' class='d-flex justify-content-between'>
        <ButtonIcon class='m-2' :handler='{ icon: "fa fa-sharp fa-solid fa-bars", animated: true, onClick: openMenu }'></ButtonIcon>
        <div :class='"offcanvas offcanvas-start" + (showMenu ? " show" : "")'>
            <div class='offcanvas-header'>
                <h5 class='offcanvas-title fs-4 fw-medium'>{{ $t('NAVBAR.MENU') }}</h5>
                <ButtonIcon :handler='{ icon: "fa fa-sharp fa-solid fa-chevron-left", animated: true, onClick: closeMenu }'></ButtonIcon>
            </div>
            <div class='offcanvas-body d-flex flex-column gap-2 fs-4 fw-medium'>
                <Tab selfKey='home' :groupKey='tabSelected'
                    :tabHandler='{ label: $t("NAVBAR.HOME"), icon: "fa fa-sharp fa-vihara", animated: true, arrow: false, text: "toUpperCase", onChange }'>
                </Tab>
                <Tab selfKey='projects' :groupKey='tabSelected'
                    :tabHandler='{ label: $t("NAVBAR.PROJECTS"), icon: "fa fa-sharp fa-code", animated: true, arrow: false, text: "toUpperCase", onChange }'>
                </Tab>
                <Tab selfKey='contact' :groupKey='tabSelected'
                    :tabHandler='{ label: $t("NAVBAR.CONTACT"), icon: "fa fa-sharp fa-address-book", animated: true, arrow: false, text: "toUpperCase", onChange }'>
                </Tab>
                <Tab selfKey='system' :groupKey='tabSelected'
                    :tabHandler='{ label: $t("NAVBAR.SYSTEM"), icon: "fa fa-sharp fa-gears", animated: true, arrow: false, text: "toUpperCase", onChange }'>
                </Tab>
            </div>
        </div>
    </div>
    <div v-else ref='menuDesktop' class='d-flex gap-5 justify-content-center fs-4 fw-medium' style='height: 75px;'>
        <Tab style='' selfKey='home' :groupKey='tabSelected'
            :tabHandler='{ label: $t("NAVBAR.HOME"), icon: "fa fa-sharp fa-vihara", animated: true, arrow: true, text: "toUpperCase", onChange }'>
        </Tab>
        <Tab style='' selfKey='projects' :groupKey='tabSelected'
            :tabHandler='{ label: $t("NAVBAR.PROJECTS"), icon: "fa fa-sharp fa-code", animated: true, arrow: true, text: "toUpperCase", onChange }'>
        </Tab>
        <Tab style='' selfKey='contact' :groupKey='tabSelected'
            :tabHandler='{ label: $t("NAVBAR.CONTACT"), icon: "fa fa-sharp fa-address-book", animated: true, arrow: true, text: "toUpperCase", onChange }'>
        </Tab>
        <Tab style='' selfKey='system' :groupKey='tabSelected'
            :tabHandler='{ label: $t("NAVBAR.SYSTEM"), icon: "fa fa-sharp fa-gears", animated: true, arrow: true, text: "toUpperCase", onChange }'>
        </Tab>
    </div>
</template>

<script scoped lang='ts'>
import { Vue, Options } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { Tab, ButtonIcon } from '../../components';

const MIN_TAB_SIZE = 175;

export interface NavBarHandler {
    onChange: Function
}

@Options({
    components: {
        Tab,
        ButtonIcon
    }
})
export default class NavBar extends Vue {
    @Prop()
    handler!: NavBarHandler;

    @Watch('$i18n.locale')
    onLangChanged() {
        this.normalizeTabs();
    }
    
    public tabSelected = '';
    public showMenu = false;

    public windowSize = window.innerWidth;

    public created(): void {
        this.onChange('home');
    }

    public mounted() {
        window.addEventListener('resize', this.updateWindowSize);
        this.onLangChanged();
    }

    public beforeUnmount() {
        window.removeEventListener('resize', this.updateWindowSize);
    }

    public isMobileNav(): boolean {
        return this.windowSize <= 850;
    }

    public onChange(tab: string): void {
        this.tabSelected = tab;
        this.handler.onChange(tab)
    }

    public openMenu(): void {
        this.showMenu = true;
    }

    public closeMenu(): void {
        this.showMenu = false;
    }

    private normalizeTabs(): void {
        const menuDesktop = this.$refs.menuDesktop as HTMLElement;
        if (!menuDesktop) return

        Array.from(menuDesktop.children).forEach(tab => (tab as HTMLElement).style.minWidth = '0')
        new Promise(resolve => { setTimeout(() => resolve(null), 1); })
            .then(() => {
                let maxWidth = (Array.from(menuDesktop.children).reduce((max, current) => {
                    return (current as HTMLElement).offsetWidth > (max as HTMLElement).offsetWidth ? current : max;
                }) as HTMLElement).offsetWidth;
                maxWidth = (maxWidth > MIN_TAB_SIZE) ? maxWidth : MIN_TAB_SIZE;
                Array.from(menuDesktop.children).forEach(tab => (tab as HTMLElement).style.minWidth = maxWidth + 'px')
            });
    }

    private updateWindowSize(): void {
        this.windowSize = window.innerWidth;
    }
}
</script>

<style lang='scss' scoped>
.offcanvas {
    background-color: #c9c5ab;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23bbb7a0' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>